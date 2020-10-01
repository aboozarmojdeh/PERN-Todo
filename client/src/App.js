import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTodo from './components/InputTodo/InputTodo';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
