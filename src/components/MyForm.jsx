import {Form} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import SubmitInput from './SubmitInput'


function MyForm() {
    function cmToInch(cm){
      return cm/2.54;
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

    function handleSubmit(e){
      //prevent default form behavior
      e.preventDefault();
      console.log(hips)

      //outputs bodyfat %
      if (gender === 'male'){ 
        console.log(86.010 * Math.log10(cmToInch(waist) - cmToInch(neck)) - 70.041 * Math.log10(cmToInch(height)) + 36.76);
      }

      else if (gender === 'female'){
        console.log(163.205 * Math.log10(cmToInch(waist) + cmToInch(hips) - cmToInch(neck)) - 97.684 * Math.log10(cmToInch(height)) - 78.387)
      }

    }


    return (
    <Form className='p-3 bg-grad form' onSubmit={handleSubmit} >
      <RadioInput onChange={handleGenderChange}/>
      <TextInput label='Idade' unity ='' controlId='formAge' inputValue={age} onChange={handleAgeChange}/>
      <TextInput label='Peso' unity ='kgs' controlId='formWeight' inputValue={weight} onChange={handleWeightChange}/>
      <TextInput label='Altura' unity ='cm' controlId='formHeight' inputValue={height} onChange={handleHeightChange}/>
      <TextInput label='Pescoço' unity ='cm' controlId='formNeck' inputValue={neck} onChange={handleNeckChange}/>
      <TextInput label='Cintura' unity ='cm' controlId='formWaist' inputValue={waist} onChange={handleWaistChange}/>
      <TextInput label='Quadril' unity ='cm' controlId='formHips' inputValue={hips} onChange={handleHipsChange} hideIt={hideHips}/>
      <SubmitInput/>
    </Form>
    );
  }
  
  export default MyForm;
  