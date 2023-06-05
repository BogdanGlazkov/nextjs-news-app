import { GetServerSideProps } from "next";
import Head from "next/head";
import { Alert } from "react-bootstrap";
import { INewsArticle, INewsResponse } from "@/models/NewsArticles";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";

interface BreakingNewsPageProps {
  newsArticles: INewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
      process.env.NEWS_API_KEY
  );
  const newsResponse: INewsResponse = await response.json();
  return { props: { newsArticles: newsResponse.articles } };
};

export default function BreakingNewsPage({
  newsArticles,
}: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking News - NextJS News App</title>
        <meta name="description" key="description" content="NextJS news app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Breaking News</h1>
        <Alert>
          This page uses <strong>getServerSideProps</strong> to fetch data
          server-side on every request. This allows search engines to crawl the
          page content and <strong>improves SEO.</strong>
        </Alert>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
}
