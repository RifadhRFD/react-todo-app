import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status){
      case 'completed'
    }
  }



  return (
    <div className="App">
      <header>
        <h1>Daily Todo List </h1>
      </header>
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos} 
      setStatus
      />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
