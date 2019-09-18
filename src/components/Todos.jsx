import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  componentDidMount() {
    console.log("Todos: DidMount: fetch data");
    this.props.getTodos();
  }

  constructor() {
    super();
    console.log("Todos: constructor");
  }

  render() {
    console.log("Todos: render");
    return (
      <div className="todo-list">
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={this.props.markComplete}
            onDeleteTodo={this.props.onDeleteTodo}
          />
        ))}
      </div>
    );
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};

export default Todos;
