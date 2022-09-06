import { useState } from 'react';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {

  const [inputValue, setInputvalue] = useState("");

  return (
 <div className='container'>
  <InputShortener setInputvalue={setInputvalue}/>
  <LinkResult inputValue={inputValue}/>
 </div>
  );
}

export default App;