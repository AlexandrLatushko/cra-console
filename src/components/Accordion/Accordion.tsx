type AccordionPropsType ={
  titleValue: string
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendered");
  if(props.collapsed === true){
    return (
      <>
        <AccordionTitle title= {props.titleValue} />
        <AccordionBaby />
      </>
    );
  }else {
    return <AccordionTitle title={props.titleValue} />;
  }
  
}

export default Accordion;

type AccordionTitlePropsType= {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendered");

  return <h3> {props.title} </h3>;
}

function AccordionBaby() {
  console.log("AccordionBaby rendered");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
} 
