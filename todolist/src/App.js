import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const smaller = {
    maxWidth: '30rem',
    margin: 'auto'
  };

  return (
    <div className="App" style={smaller}>
      <h1>Todo-List</h1>
      <TodoList />
    </div>
  );
}

export default App;
