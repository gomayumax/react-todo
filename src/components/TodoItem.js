import React, {Component} from 'react'
import TodoTextInput from './TodoTextInput.js'
import TodoList from './TodoList.js'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <TodoTextInput />
                <TodoList />
            </div>
        );
    }
}