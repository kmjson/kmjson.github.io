import React, { Component } from 'react';

export default class Add extends Component {
  state = {
    text: ''
  };

  submit = () => {
    if (this.state.text !== '') {
      this.props.action(this.state.text);
      this.setState({ text: '' });
    }
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  border = {
    margin: '1.5rem',
    marginBottom: '0',
    borderBottom: '1px solid black'
  };

  input = {
    fontSize: '1rem',
    width: '90%',
    padding: '.75rem',
    borderRadius: '1rem',
    border: '1px black solid',
    fontFamily: 'Alata'
  };

  button = {
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '.5rem',
    padding: '.5rem',
    background: '#f4f4f4',
    cursor: 'pointer',
    margin: '.5rem',
    fontFamily: 'Alata'
  };

  render() {
    return (
      <div style={this.border}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          style={this.input}
        />
        <br />
        <button onClick={() => this.submit()} style={this.button}>
          Submit
        </button>
      </div>
    );
  }
}
