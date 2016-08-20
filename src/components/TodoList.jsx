import TodoItem from './TodoItem';

var TodoList = React.createClass({
    
    render: function() {
        if ( !this.props.todos ) return null;


        var todos = this.props.todos.map( function ( todo ) {
            return (
                <TodoItem todo={ todo } key={ todo.id}/>
            );
        });

        return (
            <ul className="list-group">
                {todos}
            </ul>
        );
    }
});


export default TodoList;
