import { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";
import TodoButton from './components/TodoButton';

function App() {
  const [todo, setTodo] = useState([])

  function clickhandler(){
    setCount(count+1);

  }
  let [title,setTitle]= useState("");
  let [desc,setDesc] = useState("");

  function todoChangeHandler(){
    // todo= todo.push({title: })  // aise nhi krna h dont change previous state
    let id=todo.length
    let todoobj= {id:id,title:title, desc:desc};
    let newTodo= [...todo,todoobj] //spread operator to copy arr
    setTodo(newTodo);
    setTitle("");
    setDesc("");
  }

  function titleChangeHandler(e){
    setTitle(e.target.value);
    console.log(title)
  }

  function descChangeHandler(e){
    setDesc(e.target.value);
    console.log(desc)
  }

  function formSubmitHandler(e){
    e.preventDefault();
  }
  function todoDeleteHandler(id){
    let newTodo= todo.filter((t)=> t.id!=id)
    setTodo(newTodo);

  }

  return (
    <>
      <form action='' onSubmit={formSubmitHandler}>
        <input type='text' value={title} name='' id='' onChange={titleChangeHandler}/>
        <input type='text'  value={desc} name='' id=''  onChange={descChangeHandler}/>
        <button onClick={todoChangeHandler}>Add</button>
      </form>
      {/* <button onClick={todoChangeHandler}>Add</button> */}

      <div className="todolist">
        {todo.map((t)=> {
        return(
          <div>
        <Todo key={t.id} title={t.title} desc={t.desc}/>
        <TodoButton todoDeleteHandler={todoDeleteHandler} id={t.id}></TodoButton>
          </div>
        )
        })}
      </div>
    </>
  )
}


export default App
