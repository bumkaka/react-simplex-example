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
            <li className="list-group-item clearfix"  key={ this.props.todo.id } >

                <span style={ this.props.todo.done ? { textDecoration: 'line-through', color: 'grey'} : { 'fontWeight':'bold'} }>{this.props.todo.title}</span>

                <div className="pull-right">
                    <input type="checkbox" checked={ this.props.todo.done } onChange={ this.handleChangeDone }/>
                    <span className="badge" onClick={ this.handleRemove } style={{cursor: 'pointer'}}>del</span>
                </div>
            </li>
        );
    }
});

export default TodoItem;
