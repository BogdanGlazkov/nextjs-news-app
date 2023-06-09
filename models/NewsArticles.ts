export interface INewsArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface INewsResponse {
  articles: INewsArticle[];
}
