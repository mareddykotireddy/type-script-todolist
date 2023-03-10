import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputField from './Components/InputField';
import { Todo } from './Components/model';
import TodoList from './Components/TodoList';

const  App : React.FC=()=> {

const [todo, setTodo] = useState<string>("")
const [todos, setTodos] = useState<Todo[]>([])

const handleAdd=(e:React.FormEvent)=>{

  e.preventDefault();
if(todo){
  setTodos([...todos,{id:Date.now(),todo,isDone:false}])
setTodo("");

}
};
console.log(todo)
// console.log(`App comp--> ${todos}`);
  return (
   <div className="App">

   <span className="heading">TASKIFY</span>

   <InputField todo={todo} setTodo={setTodo}  handleAdd={ handleAdd}/>
   {/* {todos.map((t)=><li key={t?.id}> {t.todo}</li>)} */}
   <TodoList todos={todos} setTodos={setTodos}/>
   </div>
  )
};

export default App
