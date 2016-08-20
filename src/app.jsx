import TodoListWidget from './components/TodoListWidget';
import { Simplex } from 'react-simplex';
import TodoListController from './controllers/TodoListController';

var default_todos = [
    { id: 1, "title":"Wake up", done: true},
    { id: 2, "title":"Eat"},
    { id: 3, "title":"Go to work"}
];

Simplex.init('todos', default_todos, true);



ReactDOM.render(
    <TodoListWidget />,
    document.getElementsByTagName('TodoListWidget')[0]
);
/*
TodoListController.add( { "title":"Wake up", done: true} );
TodoListController.add( { "title":"Eat"} );
TodoListController.add( { "title":"Go to work"} );
*/
