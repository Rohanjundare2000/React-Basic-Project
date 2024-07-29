import { Card, Col, Row } from "react-bootstrap";

export function NewsArticles(props) {
  <Row>
    {props.map((article) => {
      return (
        <Col lg={6}>
          <Card>
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    })}
  </Row>;
}
