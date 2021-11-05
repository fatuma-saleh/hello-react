import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}>{props.children}</button>
  )

};

const Application = () => {

  const [name,setName] = useState("");

  const reset = () => {
     setName("")
    
  };
  const greeting = <h1>Hello {name}</h1>;

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
      <Button reset={reset}>Reset</Button>
      {name && greeting}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));


