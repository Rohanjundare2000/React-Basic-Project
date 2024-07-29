import { Container } from "react-bootstrap";
import { NewsArticles } from "./NewArticle";
import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../Servies/NewsServices";
import { Header } from "./Header";

export function TopHeadlines() {
  const [newArticles, setNewArticles] = useState([]);

  const getTopHeadlines = async () => {
    const response = await fetchTopHeadlines();
    console.log(response.data.article);
    setNewArticles(response.data.article);
  }
  useEffect(() => {
    getTopHeadlines();
  }, []);

  return (
    <Container className="mt-3">
      <Header title="WelCome to Top Headline"></Header>
      <Container className="mt-3">
        <NewsArticles article={NewsArticles}></NewsArticles>
      </Container>
    </Container>
  );
}
