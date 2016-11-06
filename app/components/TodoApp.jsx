var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
  handleAddTodo: function (text) {
    alert(text);
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
