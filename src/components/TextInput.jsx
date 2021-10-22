import {Row, Col, Form} from 'react-bootstrap'

function TextInput(props) {

  return (
        <Form.Group className="mb-1" controlId={props.controlId} hidden={props.hideIt}>
        <Row className='justify-content-center'>
            <Col sm={2} className='d-sm-flex align-items-center justify-content-end '><Form.Label>{props.label}</Form.Label></Col>
            <Col sm={6} className='d-flex align-items-center'> 
              <Form.Control type="number" className='inline-block' value={props.inputValue} onChange={props.onChange}/> 
              <span class='input-unity-label-holder text-secondary'>
                <span class='input-unity-label' >{props.unity}</span>
              </span> 
            </Col>
        </Row>
        </Form.Group>
  );
}

export default TextInput;
