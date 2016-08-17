import TodoListController from '../controllers/TodoListController';


var TodoItem = React.createClass({
    handleChangeDone: function( e ){
        var todo = this.props.todo;
        todo.done = e.target.checked;
        TodoListController.updateById( this.props.id, todo );
    },

    handleRemove: function(){
        TodoListController.remove( this.props.todo.id );
    },

    render: function() {
        return (
            <li className="list-group-item clearfix">

                <span style={ this.props.todo.done ? { textDecoration: 'line-through', color: 'grey'} : { 'font-weight':'bold'} }>{this.props.todo.title}</span>

                <div className="pull-right">
                    <input type="checkbox" checked={ this.props.todo.done } onChange={ this.handleChangeDone }/>
                    <button type="button" className="btn btn-xs btn-danger img-circle" onClick={ this.handleRemove }>del</button>
                </div>
            </li>
        );
    }
});

export default TodoItem;