import {Container, Row, Col} from 'react-bootstrap';
import MyForm from './MyForm';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';

function App() {

  return (
  <Container fluid>
    <Row ><Header/></Row>

    <Row className='mx-5'>
      <Col md={6}> <MyForm/> </Col>
      <Col><Info/></Col>
    </Row>

    <Row>Resultado (hidden)</Row>

    <Row><Footer/></Row>
  </Container>
  );
}

export default App;
