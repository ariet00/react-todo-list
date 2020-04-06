import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = props => {

    return (
        <ul className="TodoList">
            {props.todos.map((todo, i) => {
                return (
                    <TodoItem
                        todo={todo}
                        key={i}
                        isDone={props.isDone}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList