import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once
  useEffect(() => {
    getLocalTodos();
  }, []);


  //useEffect
  useEffect(() => {
     //function
    const filterHandler = () => {
      switch(status){
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true))
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
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
      setStatus={setStatus}
      
      />
      <TodoList 
      filteredTodos={filteredTodos} 
      todos={todos} 
      setTodos={setTodos}/>
    </div>
  );
}

export default App;
