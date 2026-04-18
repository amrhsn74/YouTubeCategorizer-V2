import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly channelPalette = [
    { bg: '#EEF2FF', color: '#4338CA', border: '#C7D2FE' },
    { bg: '#FDF2F8', color: '#BE185D', border: '#FBCFE8' },
    { bg: '#ECFDF5', color: '#065F46', border: '#A7F3D0' },
    { bg: '#FFFBEB', color: '#92400E', border: '#FDE68A' },
    { bg: '#EFF6FF', color: '#1D4ED8', border: '#BFDBFE' },
    { bg: '#FFF7ED', color: '#C2410C', border: '#FED7AA' },
    { bg: '#F5F3FF', color: '#6D28D9', border: '#DDD6FE' },
    { bg: '#ECFEFF', color: '#0E7490', border: '#A5F3FC' },
    { bg: '#FEF3C7', color: '#B45309', border: '#FCD34D' },
    { bg: '#FCE7F3', color: '#9D174D', border: '#F9A8D4' },
    { bg: '#F0FDF4', color: '#166534', border: '#BBF7D0' },
    { bg: '#FDF4FF', color: '#7E22CE', border: '#E9D5FF' },
  ];

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  getChannelColorStyle(channelName: string): Record<string, string> {
    const idx = this.hashString(channelName) % this.channelPalette.length;
    const c = this.channelPalette[idx];
    return {
      'background-color': c.bg,
      'color': c.color,
      'border-color': c.border,
    };
  }

  private readonly colorMap: Record<string, string> = {
    Technology: 'cat-Technology',
    Education: 'cat-Education',
    Entertainment: 'cat-Entertainment',
    Gaming: 'cat-Gaming',
    Music: 'cat-Music',
    Sports: 'cat-Sports',
    Science: 'cat-Science',
    Food: 'cat-Food',
    Lifestyle: 'cat-Lifestyle',
    DIY: 'cat-DIY',
    Business: 'cat-Business',
    Health: 'cat-Health',
  };

  private readonly emojiMap: Record<string, string> = {
    Technology: '💻',
    Education: '📚',
    Entertainment: '🎬',
    Gaming: '🎮',
    Music: '🎵',
    Sports: '⚽',
    Science: '🔬',
    Food: '🍽️',
    Lifestyle: '✨',
    DIY: '🔧',
    Business: '💼',
    Health: '💚',
  };

  getColorClass(label: string): string {
    return this.colorMap[label] ?? 'cat-default';
  }

  getEmoji(label: string): string {
    return this.emojiMap[label] ?? '📹';
  }
}
