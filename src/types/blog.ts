
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  content: string;
  source?: string;
}
