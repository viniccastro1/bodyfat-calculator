import {Form, Col, Row} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import SubmitInput from './SubmitInput'


function MyForm(props) {
    return (
    <Row className='d-flex justify-content-center'>
      <Col sm={8}>
      <Form className='p-3 bg-grad section-card bg-white' onSubmit={props.onSubmit} >
      <RadioInput onChange={props.onGenderChange}/>
      <TextInput label='Peso' unity ='kgs' controlId='formWeight' inputValue={props.weight} onChange={props.onWeightChange}/>
      <TextInput label='Altura' unity ='cm' controlId='formHeight' inputValue={props.height} onChange={props.onHeightChange}/>
      <TextInput label='Pescoço' unity ='cm' controlId='formNeck' inputValue={props.neck} onChange={props.onNeckChange}/>
      <TextInput label='Cintura' unity ='cm' controlId='formWaist' inputValue={props.waist} onChange={props.onWaistChange}/>
      <TextInput label='Quadril' unity ='cm' controlId='formHips' inputValue={props.hips} onChange={props.onHipsChange} hideIt={props.hideHips}/>
      <SubmitInput/>
      </Form>
      </Col>
    </Row>

    
    );
  }
  
  export default MyForm;
  