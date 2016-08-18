import TodoListWidget from './components/TodoListWidget';
import { Simplex } from 'react-simplex';
import TodoListController from './controllers/TodoListController';

Simplex.set('todos')


ReactDOM.render(
    <TodoListWidget />,
    document.getElementsByTagName('TodoListWidget')[0]
);

TodoListController.add( { "title":"Wake up", done: true} );
TodoListController.add( { "title":"Eat"} );
TodoListController.add( { "title":"Go to work"} );