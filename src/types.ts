export interface Article {
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ArticleResponse {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
}
