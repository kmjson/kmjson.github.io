import React, { Component } from 'react';
import Add from './Add';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  state = {
    id: 0,
    todos: []
  };

  add = text => {
    let items = this.state.todos;
    items.push({
      id: this.state.id,
      text: text
    });
    this.setState({ id: this.state.id + 1, todos: items });
  };

  remove = id => {
    let items = this.state.todos;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
      }
    }
    this.setState({ todos: items });
  };

  render() {
    return (
      <div>
        <Add action={text => this.add(text)} />
        {this.state.todos.map((item, key) => (
          <TodoItem
            key={key}
            remove={() => this.remove(item.id)}
            text={item.text}
          />
        ))}
      </div>
    );
  }
}
