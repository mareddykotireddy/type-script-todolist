import React from 'react'
import { Todo } from './model'
import SingleTodo from './SingleTodo';
import "./styles.css"


interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }: props) => {
    console.log(todos)
    return (
        <div className="todos">
            {todos.map(todo => (

                // <li key={todo?.id}> {todo.todo}</li>

                <SingleTodo todo={todo} key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />

            ))}
        </div>
    )
}

export default TodoList
