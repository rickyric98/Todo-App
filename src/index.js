import React from "react";
import ReactDOM from "react-dom";
import "./todostyle.css";
import SubmitForm from "./SubmitForm";

class App extends React.Component {
  state = {
    tasks: [],
  };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        You have {props.numTodos} tasks remaining
      </h1>
    </div>
  );
};

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return (
      <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    );
  });
  return <div className="list-wrapper">{todos}</div>;
};

const Todo = (props) => {
  return (
    <div className="list-item">
      {props.content}
      <button
        class="delete is-pulled-right"
        onClick={() => {
          props.onDelete(props.id);
        }}
      ></button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
