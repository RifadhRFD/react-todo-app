import React from 'react'

const Form = ( {inputText, setInputText, todos, setTodos} ) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000 }
        ]);
        setInputText("");
    }



  return (
    <form>
        <input type="text" value={inputText} onChange={inputTextHandler} className="todo-input" />
        <button onClick={submitTodoHandler} type="submit" className="todo-btn">
            <i className="fa-solid fa-square-plus"></i>
        </button>

        <div className="select">
            <select name="todo" className="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form
