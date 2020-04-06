import React from 'react'
import './TodoItem.css'
import Context from '../../Context/Context'

const TodoItem = props => {

    const classes = []

    if (props.todo.done) {
        classes.push('Done')
        classes.push('Done-li')
    }

    return (
        <li className={"TodoItem " + classes[1]}>
            <span className={classes[0]}>
                <strong>{props.todo.id + 1}&nbsp;</strong>
                <span>{props.todo.title}</span>
            </span>
            <button onClick={() => props.isDone(props.todo.id)}>{props.todo.done ? 'Not Done' : 'Done'}</button>
            <Context.Consumer>
                { ({onDeleteTodo}) => (<button onClick={onDeleteTodo.bind(null, props.todo.id)}>Remove</button> )}
            </Context.Consumer>
        </li>
    )
}

export default TodoItem