import TodoListController from '../controllers/TodoListController';

 var TodoForm = React.createClass({
    handleSubmit: function( e ){
        e.preventDefault();
        var todo = ReactDOM.findDOMNode( this.refs.todo ).value.trim();
        if ( !todo ) return;
        TodoListController.add( {title: todo} );
        ReactDOM.findDOMNode( this.refs.todo ).value = '';
    },

    render: function() {
        return (
            <div className="commentForm vert-offset-top-2">
                <hr />
                <div className="clearfix">
                    <form className="todoForm form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="task" className="col-md-2 control-label">To do</label>
                            <div className="col-md-10">
                                <input type="text" id="task" ref="todo" className="form-control" placeholder="What do you need to do?" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-2 text-right">
                                <input type="submit" value="Save Item" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});


export default TodoForm;