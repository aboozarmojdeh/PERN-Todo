import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import InputTodo from './components/InputTodo/InputTodo';
import ListTodos from './components/ListTodos/ListTodos';
function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
