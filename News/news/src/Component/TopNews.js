import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import { NewsArticles } from "./NewsArticles";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchTopHeadlines } from "../Service/Service";

export function TopNews() {
  const [articles, setArticles] = useState([]);

  const getTopHeadline = async () => {
    const response = await fetchTopHeadlines();
    setArticles(response.data.articles);
  };

  useEffect(() => {
    getTopHeadline();
  }, []);

  return (
    <Container className="mt-3">
      <Header title="Welcome to Top Headlines"></Header>
      <Container className="mt-3">
        <NewsArticles articles={articles} />
      </Container>
    </Container>
  );
}
