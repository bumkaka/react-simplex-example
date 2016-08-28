import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { SimplexConnect, SimplexMapToProps } from 'react-simplex';


var TodoListWidget = React.createClass({
    render: function() {
        return (
            <div className="col-xs-6 col-xs-offset-3">
                <div className="well">
                    <h1>Todo list { this.props.todos_count } / { this.props.not_finished_count }</h1>
                    <TodoList todos={this.props.todos}/>
                    <TodoForm/>
                </div>
            </div>
        );
    }
});

/*
*   One way is just connect Simplex by specified storage to component
*   export default SimplexConnect( TodoListWidget, ['todos'] );
*/

/*
*   Second way - connect the entire Simplex to the component through mapToProps function. 
*/
export default SimplexMapToProps( TodoListWidget, ( storage )=>{
    return {
        todos: storage.todos,
        todos_count: storage.todos.length,
        not_finished_count: storage.todos.filter( ( todo )=>{ 
                return !todo.done;
            }).length
    }
})


