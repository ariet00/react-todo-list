import React from 'react'
import './AddTodo.css'

const createNewTaskBtn = (callback) => {
    let input = document.querySelector('.Add-Todo__message')
    if (input.value === '') {
        return
    }
    let task = {
        done: false,
        title: input.value
    }  

    callback(task)
    input.value = ''
}

const AddTodo = props => {
    return (
        <form 
            className="Add-Todo" 
            onSubmit={(e) => e.preventDefault()}
        >
            <input 
                className="Add-Todo__message" 
                type="text"
            />

            <button
                type="submit"
                className="Add-Todo__btn"
                onClick={ () => createNewTaskBtn(props.addTodo) }
            >
            Add task</button>       
        
        </form>
    )
}

export default AddTodo