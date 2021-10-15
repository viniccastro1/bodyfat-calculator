import {Container, Row, Col} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

import MyForm from './MyForm';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import BodyfatTable from './BodyfatTable';

function App() {

  function cmToInch(cm){
    return cm/2.54;
  }

  //*FORM*

  function handleSubmit(e){
    //prevent default form behavior
    e.preventDefault();

    //outputs bodyfat %
    if (gender === 'male'){ 
      let bf = 86.010 * Math.log10(cmToInch(waist) - cmToInch(neck)) - 70.041 * Math.log10(cmToInch(height)) + 36.76;
      setBfPercentage(bf);
      console.log(bf, bfPercentage)
    }

    else if (gender === 'female'){
      let bf = 163.205 * Math.log10(cmToInch(waist) + cmToInch(hips) - cmToInch(neck)) - 97.684 * Math.log10(cmToInch(height)) - 78.387;
      setBfPercentage(bf);
    }

    //shows table
    sethideBfTable(false);

    setTimeout(function(){ 
      window.scroll(0, 500) 
    }, 1000);

    
  }

  const [gender, setGender] = useState('male');
  function handleGenderChange(event){
    //gets interaction to set 'gender' value
    setGender(event.target.value);

    //hide and show hips form
    if (gender === 'male') setHideHips(!true);
    if (gender === 'female') setHideHips(!false);
  }

  const [age, setAge] = useState();
  function handleAgeChange(event){
    setAge(event.target.value);
  }

  const [weight, setWeight] = useState();
  function handleWeightChange(event){
    setWeight(event.target.value);
  }

  const [height, setHeight] = useState();
  function handleHeightChange(event){
    setHeight(event.target.value);
  }

  const [neck, setNeck] = useState();
  function handleNeckChange(event){
    setNeck(event.target.value);
  }

  const [waist, setWaist] = useState();
  function handleWaistChange(event){
    setWaist(event.target.value);
  }

  const [hips, setHips] = useState();
  function handleHipsChange(event){
    setHips(event.target.value);
  }
  const [hideHips, setHideHips] = useState(true);


  //*BODYFAT TABLE*

  const [hideBfTable, sethideBfTable] = useState(true);
  const [bfPercentage, setBfPercentage] = useState(0);

  return (
  <Container fluid className='bg-light'>
    <Row ><Header/></Row>

    <Row className='justify-content-center'>
      <Col md={7}>
        <MyForm
        onSubmit={handleSubmit}

        weight={weight}
        height={height}
        neck={neck}
        waist={waist}
        hips={hips}

        onGenderChange={handleGenderChange}
        onWeightChange={handleWeightChange}
        onHeightChange={handleHeightChange}
        onNeckChange={handleNeckChange}
        onWaistChange={handleWaistChange}
        onHipsChange={handleHipsChange}

        hideHips={hideHips}
        />
      </Col>

      <Col md={3} className='d-flex justify-content-center'> <Info/> </Col>
      <Col md={2}/> {/*Empity col */}
    </Row>

    <Row className='justify-content-left'>
      <Col md={2}/> {/*Empity col */}
      <BodyfatTable 
      hideThis={hideBfTable} 
      weight={weight} 
      bfPercentage={bfPercentage.toFixed(2)} 
      fatMass={(weight*bfPercentage/100).toFixed(2)} 
      leanMass={(weight - (weight*bfPercentage/100)).toFixed(2)}/>
    </Row>

    <Row><Footer/></Row>
  </Container>
  );
}

export default App;
