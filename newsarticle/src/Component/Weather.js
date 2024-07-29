import { Container } from "react-bootstrap";
import { Header } from "./Header";

export function Weather (){
   return(
    <Container className="mt-3">
        <Header title="View weather for your mentioned city"/>
        <Container></Container>
    </Container>
   )
}