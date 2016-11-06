var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Meow'
        },
        {
          id: 2,
          text: 'Woof'
        },
        {
          id: 3,
          text: 'Mrow'
        },
        {
          id: 4,
          text: 'Mooo'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
