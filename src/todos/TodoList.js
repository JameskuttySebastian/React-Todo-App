import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import "./TodoList.css";
import NewTodoForm from './NewTodoForm';
import { removeTodo, markTodoAsCompleted } from './actions'

const TodoList = ({todos = [], onCompletedPressed, onRemovePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />        
        {todos.map(todo=> <TodoListItem 
            todo={todo} 
            onCompletedPressed={onCompletedPressed} 
            onRemovePressed={onRemovePressed} 
            />)}
    </div>
);
const mapStateToProps = state => ({
    todos : state.todos,
})
const mapDispatchToProps = dispatch =>({
    onRemovePressed : text => dispatch(removeTodo(text)),
    onCompletedPressed : text => dispatch(markTodoAsCompleted(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);