import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Alert } from "react-bootstrap";
import { INewsArticle, INewsResponse } from "@/models/NewsArticles";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";

interface CategoryNewsPageProps {
  newsArticles: INewsArticle[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const paths = categorySlugs.map((slug) => ({ params: { category: slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({
  params,
}) => {
  const category = params?.category?.toString();
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
  );

  const newsResponse: INewsResponse = await response.json();
  return { props: { newsArticles: newsResponse.articles }, revalidate: 5 * 60 };
};

const CategoryNewsPage = ({ newsArticles }: CategoryNewsPageProps) => {
  const router = useRouter();
  const categoryName = router.query.category?.toString();
  const title = "Category: " + categoryName;

  return (
    <>
      <Head>
        <title key="title">{`${title} - NextJS News App`}</title>
      </Head>
      <main>
        <h1>{title}</h1>
        <Alert>
          This page uses <strong>getStaticProps</strong> for very high page
          loading speed and <strong>incremental static regeneration</strong> to
          show data not older than <strong>5 minutes.</strong>
        </Alert>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
};

export default CategoryNewsPage;
