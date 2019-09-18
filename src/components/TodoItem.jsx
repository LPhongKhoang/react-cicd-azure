import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div className="clearfix" style={this.getTodoStyle()}>
        <p className="float-left" style={this.getLineThroughStyle()}>
          <input
            type="checkbox"
            checked={completed ? "checked" : ""}
            onChange={() => this.props.markComplete(id)}
          />
          <span className="d-inline ml-2">{title}</span>
        </p>

        <div className="float-right">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDeleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getTodoStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px solid #ccc"
    };
  };

  getLineThroughStyle = () => {
    const todo = this.props.todo;

    return {
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };
}

// PropTypes for requring todo props while using this component
TodoItem.propsType = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
