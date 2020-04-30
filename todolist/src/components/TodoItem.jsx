import React, { Component } from 'react';

export default class TodoItem extends Component {
  itemStyle = {
    padding: '1rem',
    borderRadius: '1rem',
    background: '#f4f4f4',
    maxWidth: '90%',
    margin: '.5rem',
    textAlign: 'left',
    fontSize: '1rem',
    wordWrap: 'break-word'
  };

  remove = {
    marginRight: '.25rem',
    cursor: 'pointer',
    color: 'red'
  };

  render() {
    return (
      <div style={this.itemStyle}>
        <span style={this.remove} onClick={this.props.remove}>
          X
        </span>
        {this.props.text}
      </div>
    );
  }
}
