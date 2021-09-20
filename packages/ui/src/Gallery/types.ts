export interface Image {
  src: string;
  thumbnail?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  date?: string;
  description?: string;
  tags?: string[];
}
