import {Row, Col, Form, Button} from 'react-bootstrap'

function SubmitInput(props) {

  return (
    <Row className='justify-content-center'>
        <Col sm={8} className='d-flex justify-content-end'><Button variant="primary" type="submit">Submit</Button></Col>
    </Row>
  );
}

export default SubmitInput;
