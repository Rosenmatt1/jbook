import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler';

// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => <h1> Hi There! </h1>;

// ReactDOM.render(
//   <App/>,
//   document.querySelector('#root')
// );

const App = () => {
  const [code, setCode] = useState('');
  const iframe = useRef<any>();
  const [input, setInput] = useState('');


  let onClick = async () => {
    const output = await bundle(input)
    setCode(output);
  }

  return <div>
    <h1> Transpiler App </h1>
    <CodeEditor 
    initialValue="const a = 1;"
    onChange = {(value) => setInput(value)}
    />
    <div>
      <button onClick={onClick}>Submit</button>
    </div>
    < Preview code={code} />
  </div>
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)