import { GetServerSideProps } from "next";
import Head from "next/head";
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
      </Head>
      <main>
        <h1>Breaking News</h1>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
}
