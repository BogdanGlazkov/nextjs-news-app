import { Card } from "react-bootstrap";
import { INewsArticle } from "@/models/NewsArticles";
import Image from "next/image";
import placeholderImage from "@/assets/images/newsarticle_placeholder.jpg";
import s from "@/styles/App.module.css";

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
        <Image
          src={validImageUrl || placeholderImage}
          width={500}
          height={200}
          alt="News article image"
          className={`card-img-top ${s.image}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default NewsArticle;
