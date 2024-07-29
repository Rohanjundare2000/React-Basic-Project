import { Container,Alert,p } from "react-bootstrap";

export function Header(props){
    return(
      
         <Container>
            <Alert variant="Primary"><h5>{props.title}</h5></Alert>
            <p>This is a real time news and weather app</p>
         </Container>

    );

}