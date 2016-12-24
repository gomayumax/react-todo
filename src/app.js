import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter.js';
import TodoApp from './components/TodoApp.js';

document.addEventListener("DOMContentLoaded", () => {
    ReactDom.render(
        <TodoApp />,
        document.getElementById('root')
    );
});