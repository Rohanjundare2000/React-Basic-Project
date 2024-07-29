import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { fetchAllNews } from "../Service/Service";
import { NewsArticles } from "./NewsArticles";
import "bootstrap/dist/css/bootstrap.min.css";

export function AllNews() {
  const [news, setNews] = useState([]);

  const [topicValue, setTopicValue] = useState("");

  const fetchApi = async (news) => {
    const response = await fetchAllNews(news);
    const a = response.data;
    setNews(a);
  };

  useEffect(() => {
    fetchApi("lok sabha elections");
  }, []);

  const handleTopicChange = (e) => {
    setTopicValue(e.target.value);
  };

  const handleFetchNewsClick = () => {
    fetchApi(topicValue);
  };

  return (
    <Container className="mt-3">
      <Header title="View all type of news based on your own topic"></Header>
      <Container className="mt-3">
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Mention a Topic</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a topic"
                name="topic"
                onChange={handleTopicChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <Button variant="success" onClick={handleFetchNewsClick}>
              Fetch News
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <NewsArticles articles={news} />
      </Container>
    </Container>
  );
}
