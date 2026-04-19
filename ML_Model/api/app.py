"""
YouTube Video Categorization ML API
Custom-trained ML model (NO external ML APIs used)
Integrates with YouTubeCategorizer C# application
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import json
import os
from pathlib import Path
import sys

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable cross-origin requests from C# application

# Global variables for model components
model = None
vectorizer = None
id_to_category = None
model_type = None

# Keyword hashmap: category -> list of case-insensitive substrings that
# strongly signal that category. Each match adds KEYWORD_BOOST to the ML
# probability for that category before argmax, so clear keyword signals can
# correct weak / ambiguous ML predictions without overriding confident ones.
KEYWORD_BOOST = 0.15  # Per-match additive boost on probability
CONFIDENCE_THRESHOLD = 0.50  # Below this, return "Uncategorized" instead of a category

CATEGORY_KEYWORDS = {
    "Comedy": [
        "comedy", "funny", "joke", "jokes", "standup", "stand-up", "prank",
        "parody", "sketch", "satire", "humor", "skit", "laugh", "hilarious",
        "trolling", "reaction",
    ],
    "Education": [
        "lesson", "tutorial", "course", "lecture", "study", "university",
        "college", "exam", "homework", "classroom", "learn", "learning",
        "explained", "explainer", "how it works", "crash course",
    ],
    "Entertainment": [
        "movie", "film", "trailer", "review", "celebrity", "actor", "actress",
        "behind the scenes", "hollywood", "tv show", "series", "netflix",
        "disney", "marvel", "top 10", "top ten",
    ],
    "Gaming": [
        "gameplay", "walkthrough", "playthrough", "speedrun", "minecraft",
        "fortnite", "xbox", "playstation", "ps5", "ps4", "nintendo", "switch",
        "steam", "gamer", "twitch", "esports", "let's play", "lets play",
        "mods", "boss fight", "fps", "mmorpg", "roblox", "valorant",
    ],
    "Howto & Style": [
        "diy", "how to", "how-to", "fashion", "makeup", "beauty", "haul",
        "outfit", "decor", "home decor", "crafting", "nail art", "skincare",
        "hair tutorial", "lookbook", "get ready with me", "grwm",
    ],
    "Music": [
        "song", "lyrics", "music video", "official music video", "cover",
        "remix", "album", "concert", "live performance", "band", "singer",
        "guitar", "piano", "drum", "drums", "producer", "vocals",
        "official audio", "feat.", "ft.", "mv", "acoustic",
    ],
    "News & Politics": [
        "news", "politics", "election", "president", "government", "congress",
        "senate", "policy", "protest", "breaking news", "coverage", "report",
        "minister", "parliament", "campaign", "debate", "geopolitics",
    ],
    "People & Blogs": [
        "vlog", "daily routine", "storytime", "story time", "draw my life",
        "q&a", "qna", "life update", "my story", "day in my life",
        "day in the life", "family", "morning routine", "night routine",
    ],
    "Science & Technology": [
        "science", "physics", "chemistry", "biology", "engineering",
        "mathematics", " math ", "quantum", "atom", "atoms", "molecule",
        "experiment", "research", "theorem", "equation", "algorithm",
        "computer", " ai ", "artificial intelligence", "machine learning",
        "programming", "coding", "robot", "robotics", "space", "universe",
        "galaxy", "astronomy", "dna", "evolution", "gravity", "nuclear",
        "electron", "magnet", "laser", "semiconductor", "veritasium",
        "jet engine", "reaction", "relativity", "neuron", "biotech",
        "technology", "tech", "software", "hardware", "gadget",
    ],
    "Sports": [
        "football", "soccer", "basketball", "baseball", "tennis", "nba",
        "nfl", "mlb", "fifa", "world cup", "olympics", "athlete", "goal",
        "highlights", "boxing", "mma", "ufc", "cricket", "golf", "hockey",
        "match", "tournament", "championship",
    ],
}


def apply_keyword_boost(probabilities, text):
    """
    Add KEYWORD_BOOST * (match count) to each category's probability
    based on CATEGORY_KEYWORDS. Returns (boosted_probs, match_summary)
    where match_summary maps category -> match count (only positive).
    """
    text_lower = text.lower()
    boosted = probabilities.copy()
    match_summary = {}

    for cat_id, category in id_to_category.items():
        keywords = CATEGORY_KEYWORDS.get(category, [])
        match_count = sum(1 for kw in keywords if kw.lower() in text_lower)
        if match_count > 0:
            boosted[cat_id] += KEYWORD_BOOST * match_count
            match_summary[category] = match_count

    return boosted, match_summary

def load_ml_model():
    """
    Load trained ML model and preprocessing components
    This is YOUR custom model - no external APIs
    """
    global model, vectorizer, id_to_category, model_type
    
    try:
        # Get models directory path (one level up from api folder)
        current_dir = Path(__file__).parent
        models_dir = current_dir.parent / 'models'
        
        print("\n" + "="*70)
        print("LOADING CUSTOM ML MODEL (NO EXTERNAL APIS)")
        print("="*70)
        print(f"Models directory: {models_dir}")
        
        # 1. Load the trained model
        model_path = models_dir / 'best_model.pkl'
        if not model_path.exists():
            print(f"❌ ERROR: Model file not found!")
            print(f"   Expected location: {model_path}")
            print(f"   → Run Jupyter notebook 03_model_training.ipynb first!")
            return False
        
        model = joblib.load(str(model_path))

        # Compatibility shim: pickle was saved with sklearn 1.8+ which dropped
        # the `multi_class` attribute, but runtime sklearn 1.6.x still reads it
        # inside predict_proba. 'auto' routes to multinomial softmax (matches
        # the training default).
        if not hasattr(model, 'multi_class'):
            model.multi_class = 'auto'

        model_type = type(model).__name__
        print(f"✅ Model loaded: {model_type}")
        
        # 2. Load TF-IDF vectorizer
        vectorizer_path = models_dir / 'tfidf_vectorizer.pkl'
        if not vectorizer_path.exists():
            print(f"❌ ERROR: Vectorizer not found!")
            print(f"   Expected location: {vectorizer_path}")
            print(f"   → Run Jupyter notebook 03_model_training.ipynb first!")
            return False
        
        vectorizer = joblib.load(str(vectorizer_path))
        feature_count = len(vectorizer.get_feature_names_out())
        print(f"✅ Vectorizer loaded: {feature_count} features")
        
        # 3. Load label mapping (category names)
        mapping_path = models_dir / 'label_mapping.json'
        if not mapping_path.exists():
            print(f"❌ ERROR: Label mapping not found!")
            print(f"   Expected location: {mapping_path}")
            print(f"   → Run Jupyter notebook 02_preprocessing.ipynb first!")
            return False
        
        with open(mapping_path, 'r') as f:
            label_mapping = json.load(f)
        
        # Create reverse mapping: label_id -> category_name
        id_to_category = {v: k for k, v in label_mapping.items()}
        print(f"✅ Label mapping loaded: {len(id_to_category)} categories")
        
        # Display available categories
        print(f"\n📊 Available Categories:")
        for cat_id in sorted(id_to_category.keys()):
            print(f"   {cat_id}: {id_to_category[cat_id]}")
        
        print("\n" + "="*70)
        print("🚀 CUSTOM ML MODEL READY - NO EXTERNAL APIS USED!")
        print("="*70)
        
        return True
    
    except Exception as e:
        print(f"\n❌ ERROR loading model: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

@app.route('/')
def home():
    """Root endpoint - API information"""
    return jsonify({
        "service": "YouTube Video Categorization ML API",
        "version": "1.0",
        "status": "running",
        "model_loaded": model is not None,
        "model_type": model_type if model else "not_loaded",
        "description": "Custom-trained ML model for video categorization",
        "endpoints": {
            "health": "GET /health - Check API status",
            "categorize": "POST /categorize - Categorize single video",
            "batch": "POST /categorize/batch - Categorize multiple videos",
            "info": "GET /model/info - Get model details"
        },
        "note": "NO external ML APIs used - all inference done locally"
    })

@app.route('/health', methods=['GET'])
def health_check():
    """
    Health check endpoint
    Called by C# application to verify API is ready
    """
    is_healthy = model is not None and vectorizer is not None and id_to_category is not None
    
    return jsonify({
        "status": "healthy" if is_healthy else "unhealthy",
        "model_loaded": model is not None,
        "model_type": model_type if model else None,
        "vectorizer_loaded": vectorizer is not None,
        "label_mapping_loaded": id_to_category is not None,
        "categories_count": len(id_to_category) if id_to_category else 0,
        "categories": list(id_to_category.values()) if id_to_category else [],
        "message": "Custom ML model ready" if is_healthy else "Model not loaded"
    }), 200 if is_healthy else 503

@app.route('/categorize', methods=['POST'])
def categorize():
    """
    Categorize a single video (title + description)
    This is called by C# CategorizationService for each video
    
    Request JSON (from C#):
    {
        "text": "video title and description combined"
    }
    
    Response JSON (to C#):
    {
        "category": "Technology",
        "confidence": 0.87
    }
    """
    try:
        # 1. Validate request
        if not request.is_json:
            return jsonify({"error": "Content-Type must be application/json"}), 400
        
        data = request.get_json()
        text = data.get('text', '')
        
        # 2. Validate text input
        if not text or len(text.strip()) == 0:
            print("[Categorize] ⚠️  Empty text received, returning Uncategorized")
            return jsonify({
                "category": "Uncategorized",
                "confidence": 0.0
            }), 200
        
        # 3. Log request (truncate long text for readability)
        text_preview = text[:80] + "..." if len(text) > 80 else text
        print(f"[Categorize] Processing: {text_preview}")
        
        # 4. Transform text using TF-IDF vectorizer
        text_vectorized = vectorizer.transform([text])

        # 5. Predict with ML model + apply keyword hashmap boost
        if hasattr(model, 'predict_proba'):
            probabilities = model.predict_proba(text_vectorized)[0]
            ml_prediction = int(probabilities.argmax())
            ml_category = id_to_category[ml_prediction]
            ml_confidence = float(probabilities[ml_prediction])

            boosted_probs, keyword_matches = apply_keyword_boost(probabilities, text)
            prediction = int(boosted_probs.argmax())
            category = id_to_category[prediction]
            confidence = float(boosted_probs[prediction])
            # Clamp at 1.0 since additive boost can exceed 1
            confidence = min(confidence, 1.0)

            if keyword_matches:
                print(f"[Categorize] 🔑 Keyword matches: {keyword_matches}")
            if category != ml_category:
                print(f"[Categorize] ↪️  Keyword boost flipped ML prediction: "
                      f"{ml_category} ({ml_confidence:.2%}) → {category} ({confidence:.2%})")
        else:
            # Models without predict_proba (e.g. Linear SVM) — fall back to raw predict
            prediction = int(model.predict(text_vectorized)[0])
            category = id_to_category[prediction]
            confidence = 1.0

        # 6b. Low-confidence guard — if the model isn't sure enough, refuse to guess
        if confidence < CONFIDENCE_THRESHOLD:
            print(f"[Categorize] ⚠️  Low confidence ({confidence:.2%} < {CONFIDENCE_THRESHOLD:.0%}) — "
                  f"would have predicted '{category}', returning 'Uncategorized'")
            category = "Uncategorized"

        # 7. Log result
        print(f"[Categorize] ✅ Result: {category} (confidence: {confidence:.2%})")
        
        # 8. Return response to C# application
        return jsonify({
            "category": category,
            "confidence": confidence
        }), 200
    
    except Exception as e:
        # Log error and return Uncategorized (C# will handle gracefully)
        print(f"[Categorize] ❌ ERROR: {str(e)}")
        import traceback
        traceback.print_exc()
        
        return jsonify({
            "category": "Uncategorized",
            "confidence": 0.0,
            "error": str(e)
        }), 200  # Return 200 so C# continues processing

@app.route('/categorize/batch', methods=['POST'])
def categorize_batch():
    """
    Categorize multiple videos at once (optional - for future optimization)
    Currently not used by C# application but available for testing
    
    Request JSON:
    {
        "texts": ["text1", "text2", "text3", ...]
    }
    
    Response JSON:
    {
        "categories": ["Category1", "Category2", "Category3", ...]
    }
    """
    try:
        # 1. Validate request
        if not request.is_json:
            return jsonify({"error": "Content-Type must be application/json"}), 400
        
        data = request.get_json()
        texts = data.get('texts', [])
        
        # 2. Validate texts
        if not texts or not isinstance(texts, list):
            return jsonify({"error": "texts must be a non-empty list"}), 400
        
        print(f"[Batch] Processing {len(texts)} videos...")
        
        # 3. Transform all texts at once (vectorization is efficient with batches)
        texts_vectorized = vectorizer.transform(texts)
        
        # 4. Predict all categories
        predictions = model.predict(texts_vectorized)
        
        # 5. Convert label IDs to category names
        categories = [id_to_category[pred] for pred in predictions]
        
        # 6. Log summary
        unique_categories = set(categories)
        print(f"[Batch] ✅ Complete! Found categories: {unique_categories}")
        
        # 7. Return response
        return jsonify({"categories": categories}), 200
    
    except Exception as e:
        print(f"[Batch] ❌ ERROR: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

@app.route('/model/info', methods=['GET'])
def model_info():
    """
    Get detailed information about loaded model
    Useful for debugging and documentation
    """
    try:
        if model is None:
            return jsonify({
                "error": "Model not loaded",
                "message": "Start the API to load the model"
            }), 503
        
        info = {
            "model_type": model_type,
            "model_name": str(model.__class__.__name__),
            "features_count": len(vectorizer.get_feature_names_out()),
            "categories_count": len(id_to_category),
            "categories": sorted(id_to_category.values()),
            "vectorizer_config": {
                "type": "TfidfVectorizer",
                "max_features": vectorizer.max_features,
                "ngram_range": list(vectorizer.ngram_range),
                "stop_words": "english" if vectorizer.stop_words else None
            },
            "supports_probability": hasattr(model, 'predict_proba'),
            "training_source": "Custom-trained on YouTube trending videos dataset",
            "no_external_apis": True
        }
        
        return jsonify(info), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Error handlers
@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors - endpoint not found"""
    return jsonify({
        "error": "Endpoint not found",
        "available_endpoints": {
            "GET /": "API information",
            "GET /health": "Health check",
            "POST /categorize": "Categorize single video",
            "POST /categorize/batch": "Categorize multiple videos",
            "GET /model/info": "Model information"
        }
    }), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors - internal server error"""
    print(f"[ERROR] Internal server error: {error}")
    return jsonify({
        "error": "Internal server error",
        "message": "Check server logs for details"
    }), 500

# Main entry point
if __name__ == '__main__':
    print("\n" + "="*70)
    print("YOUTUBE VIDEO CATEGORIZATION ML API")
    print("Custom ML Model Server for C# Application")
    print("="*70)
    
    # Load model at startup
    if not load_ml_model():
        print("\n" + "="*70)
        print("❌ FAILED TO START - MODEL NOT LOADED")
        print("="*70)
        print("\n🔧 TROUBLESHOOTING STEPS:")
        print("1. Check that you completed Part A (Jupyter notebooks)")
        print("2. Verify these files exist in ML_Model/models/:")
        print("   - best_model.pkl")
        print("   - tfidf_vectorizer.pkl")
        print("   - label_mapping.json")
        print("3. Run Jupyter notebooks 01, 02, and 03 to create these files")
        print("\nExiting...\n")
        sys.exit(1)
    
    # Start Flask server
    print("\n" + "="*70)
    print("🚀 STARTING ML API SERVER")
    print("="*70)
    print(f"🌐 Server URL: http://localhost:5001")
    print(f"📡 Listening on all interfaces (0.0.0.0:5001)")
    print(f"⚙️  Model: {model_type}")
    print(f"📊 Categories: {len(id_to_category)}")
    print(f"\n💡 This API serves YOUR custom-trained model")
    print(f"💡 NO external ML APIs are used")
    print(f"\n⌨️  Press Ctrl+C to stop the server")
    print("="*70 + "\n")
    
    # Run Flask application
    app.run(
        host='0.0.0.0',      # Listen on all network interfaces
        port=5001,           # Port 5001 (matches C# appsettings.json)
        debug=False,         # Disable debug mode (use False in production)
        threaded=True,       # Handle multiple requests simultaneously
        use_reloader=False   # Disable auto-reload to prevent double loading
    )