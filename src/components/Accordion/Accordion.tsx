
function Accordion() {
  console.log("Accordion rendered");

  return (
    <>
      <AccordionTitle />
      <AccordionBaby />
    </>
  );
}

export default Accordion;

function AccordionTitle() {
  console.log("AccordionTitle rendered");

  return <h3>menu</h3>;
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
