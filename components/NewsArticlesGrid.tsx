import { Row, Col } from "react-bootstrap";
import { INewsArticle } from "@/models/NewsArticles";
import NewsArticle from "./NewsArticle";

interface NewsArticlesGridProps {
  articles: INewsArticle[];
}

const NewsArticlesGrid = ({ articles }: NewsArticlesGridProps) => {
  return (
    <Row xs={1} sm={2} xl={3} className="g-4">
      {articles.map((article) => (
        <Col key={article.url}>
          <NewsArticle article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsArticlesGrid;
