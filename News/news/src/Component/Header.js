import { Container,Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export function Header(props) {
  return (
    <Container>
      <Alert variant="primary">
        <h5>{props.title}</h5>
      </Alert>
      <p>This is a real time news and weather app</p>
    </Container>
  );
}
