import {Row, Col, Form} from 'react-bootstrap'

function TextInput(props) {

  return (
        <Form.Group className="mb-1" controlId="formGender">
        <Row className='justify-content-center'>
        <Col sm={2} className='d-sm-flex align-items-center justify-content-end' ><Form.Label>Gênero</Form.Label> </Col>
        <Col sm={6}>
            <Row className='' onChange={props.onChange}>
            <Col className='d-flex align-items-center'><Form.Check type="radio" label="Masculino" name="gender" value='male' defaultChecked/></Col>
            <Col className='d-flex align-items-center'><Form.Check type="radio" label="Feminino" name="gender" value='female'/></Col>
            </Row>
        </Col>
        </Row>  
        </Form.Group>
  );
}

export default TextInput;
