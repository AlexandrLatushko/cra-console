import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  console.log('App rendered')

  return (
    <div>
      <PageTitle title= {'This is APP component'}/>
      <PageTitle title= {'My Friends'}/>

      Artikle 1
      <Rating value= {3} />

      <Accordion titleValue= {"Menu"} collapsed= {true}/>
      <Accordion titleValue= {"Users"} collapsed= {true}/>

      Article 2 
      <Rating value= {0} />
      <Rating value= {1} />
      <Rating value= {3} />
      <Rating value= {3} />
      <Rating value= {4} />
      <Rating value= {5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendered')
  
  return(
    <h1> {props.title} </h1>
  )
}

export default App;
