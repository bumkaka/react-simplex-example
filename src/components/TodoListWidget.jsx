import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { SimplexConnect } from 'react-simplex';


var TodoListWidget = React.createClass({
    render: function() {
        return (
            <div className="col-xs-6 col-xs-offset-3">
                <div className="well">
                    <h1>Todo list:</h1>
                    <TodoList todos={this.props.todos}/>
                    <TodoForm/>
                </div>
            </div>
        );
    }
});


export default SimplexConnect( TodoListWidget, ['todos'] );


