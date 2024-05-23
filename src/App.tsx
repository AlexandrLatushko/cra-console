import React from 'react';
import './App.css';

function App() {
  console.log('App rendered')

  return (
    <div>
      <AppTitle/>
      <Rating />
      <Accordion/>
      <Rating />

    </div>
  );
}

function AppTitle() {
  console.log('AppTitle rendered')
  return(
    <>This is APP component</>
  )
}

function Rating() {
  console.log('Raiting rendered')

  return(
    <>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </>
  )
}

function Star() {
  console.log('Star rendered')
  return(
    <div>star</div>
  )
}

function Accordion() {
  console.log('Accordion rendered')

  return(
  <>
    <AccordionTitle />
    <AccordionBaby />
  </>
    
    
  )
}

function AccordionTitle() {
  console.log('AccordionTitle rendered')

  return (
    <h3>menu</h3>
  )
}

function AccordionBaby() {
  console.log('AccordionBaby rendered')
  return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  )
}
export default App;
