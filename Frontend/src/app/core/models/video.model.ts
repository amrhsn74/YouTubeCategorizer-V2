export interface VideoDto {
  id: number;
  videoId: string;
  title: string;
  description: string;
  channelName: string;
  categoryLabel: string;
}

export interface CategoryDto {
  id: number;
  label: string;
  videos: VideoDto[];
}

export interface CategorizedVideosDto {
  categories: CategoryDto[];
}

export interface ChannelInputDto {
  channelUrl1: string;
  channelUrl2: string;
  channelUrl3: string;
}

export interface FlatVideo extends VideoDto {
  categoryLabel: string;
}

export interface DashboardStats {
  totalVideos: number;
  totalCategories: number;
  totalChannels: number;
}

export type StatusType = 'info' | 'success' | 'error' | null;

export interface StatusMessage {
  type: StatusType;
  text: string;
}
