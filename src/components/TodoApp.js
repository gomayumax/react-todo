import React, {Component} from 'react'
import TodoItem from './TodoItem.js'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <h1>todo list</h1>
                <TodoItem />
            </div>
        );
    }
}