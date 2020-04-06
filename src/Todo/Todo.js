import React from 'react'
import TodoList from './TododList/TodoList'
import AddTodo from './AddTodo/AddTodo'
import './Todo.css'
import Context from '../Context/Context'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        
        let todos = JSON.parse(window.localStorage.getItem('todos'))
        
        this.state = {
            todos: todos || []
        }

    }
    

    //////////////////////
    isDone(id) {
        let todos = this.state.todos.map(item => {
            if (item.id === id) {
                item.done = !item.done
            }
            return item
        })

        window.localStorage.setItem('todos', JSON.stringify(todos))
        this.setState({ todos })
    }

    ///////////////////////
    onDeleteTodo = (id) => {
        let todos = this.state.todos.filter((item) => item.id !== id).map((item, i) => { 
            item.id = i
            return item
        })
        window.localStorage.setItem('todos', JSON.stringify(todos))
        this.setState({ todos })
    }

    //////////////////////
    addTodo = async (task) => {
        task.id = this.state.todos.length
        await this.setState({
            todos: this.state.todos.concat(task)
        })

        window.localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

    render() {

        return (
            <div className="Todo" >
                <AddTodo
                    addTodo={this.addTodo}
                />
                <Context.Provider value={{ onDeleteTodo: this.onDeleteTodo }}>
                    {this.state.todos.length ?
                        <TodoList
                            todos={this.state.todos}
                            isDone={this.isDone.bind(this)}
                        />
                        : <p style={{ color: '#000000', fontSize: '22px' }}>No todos</p>}
                </Context.Provider>
            </div>
        )
    }
}


export default Todo


//  sendRequest(url, method , body) {
//         const headers = {
//             'Content-Type': 'application/json'
//         }

//         return fetch(url, {
//             method: method,
//             body: JSON.stringify(body),
//             headers: headers
//         })
//     }
