var TodoListController = {
    add: function (todo) {
        var default_todo = {
                id: this.getID(),
                title: 'default',
                done: false
            },
            new_todo = Object.assign(default_todo, todo),
            todos = Simplex.todos;

        todos.push(new_todo);
        Simplex.todos = todos;
    },

    remove: function (id) {
        var todos = Simplex.todos.filter((todo) => {
            return todo.id != id;
        });

        Simplex.todos = todos;
    },

    updateById: function (id, updated_todo) {
        var todos = Simplex.todos.map((todo) => {
            return todo.id == id ? updated_todo : todo;
        })
        Simplex.todos = todos;
    },

    get: function (id) {

    },

    getID() {
        return 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}


window.TodoListController = TodoListController;
export default TodoListController;
