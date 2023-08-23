export interface Article {
  title: string;
  description?: string;
  tags: string[];
  url: string;
  image?: string;
  publishedAt: string;
  author: {
    name: string;
    photo: string;
  };
}
