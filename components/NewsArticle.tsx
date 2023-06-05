import { Card } from "react-bootstrap";
import { INewsArticle } from "@/models/NewsArticles";

interface NewsArticleProps {
  article: INewsArticle;
}

const NewsArticle = ({
  article: { title, description, url, urlToImage },
}: NewsArticleProps) => {
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : undefined;

  return (
    <a href={url}>
      <Card className="h-100">
        <Card.Img variant="top" src={validImageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default NewsArticle;
