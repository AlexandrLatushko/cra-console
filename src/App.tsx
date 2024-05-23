import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  console.log('App rendered')

  return (
    <div>
      <AppTitle/>
      Artikle 1
      <Rating value= {3} />
      <Accordion/>
      Article 2 
      <Rating value= {0} />
      <Rating value= {1} />
      <Rating value= {2} />
      <Rating value= {3} />
      <Rating value= {4} />
      <Rating value= {5} />
    </div>
  );
}

function AppTitle() {
  console.log('AppTitle rendered')
  return(
    <div>This is APP component</div>
  )
}

export default App;
