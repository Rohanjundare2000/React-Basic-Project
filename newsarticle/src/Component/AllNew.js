import { useState,useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { fetchAllNews } from "../Servies/NewsServices";
import { Header } from "./Header";
import { NewsArticles } from "./NewArticle";

export function Allnews() {
    
  const [NewArticles, setNewArticles] = useState([]);
  const [topicValue, setTopicValue] = useState("");

  const getAllNews = async (topic) => {
    const response = await fetchAllNews(topic);
    setNewArticles(response.data.articles);
  };
  useEffect(() => {
    getAllNews("lok sabha election");
  });
  const handleTopicChange = (e) => {
    setTopicValue(e.target.value);
  };
  const handleFetchNewsClick = () => {
    getAllNews(topicValue);
  };

  return (
    <Container className="mt-3">
      <Header title="View all type of news based on your own topic"/>
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
        <NewsArticles articles={NewArticles} />
        {/* <Row>
                    {
                        newsArticles.map((article) => {
                            return (
                                <Col lg={6}>
                                    <Card>
                                        <Card.Img variant="top" src={article.urlToImage} />
                                        <Card.Body>
                                            <Card.Title>{article.title}</Card.Title>
                                            <Card.Text>
                                                {article.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row> */}
      </Container>
    </Container>
  );
}
