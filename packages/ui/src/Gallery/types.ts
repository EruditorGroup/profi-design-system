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

export interface Album {
  id: number | string;
  name: string;
  description: string;
  previewSrc: string;
  filesCount: number;
  tags?: string[];
}
