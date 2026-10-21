import { createServer, Model }  from 'miragejs'

createServer({
    models: {
        todos: Model
    },
    seeds(server) {
    server.db.loadData({
      todos: [
        {id: '1', label: 'Todo 1', complete: true},
        {id: '2', label: 'Todo 2', complete: false},
        {id: '3', label: 'Todo 3', complete: false},
        {id: '4', label: 'Todo 4', complete: false},
        {id: '5', label: 'Todo 5', complete: true},
      ],
    })
    },
    routes() {

        this.namespace = 'api';

        //get(/api/todos)
        //get(/api/todos/:id)

        this.get('/todos', (schema) => {
            return schema.all('todos');
        })

        this.get('/todos/:id', (schema, request) => {
            const id = request.params.id;

            return schema.db.tasks.find(id);
        })

        // this.put('/todos/:id', (schema, request) => {
        //     const id = request.params.id;
        //     let task = JSON.parse(request.requestBody) ;
        //     schema.db.tasks.find(id);

        //     return data;
        // })
        
        this.post('/todos', (schema, request) => {
            const task = JSON.parse(request.requestBody);
            return schema.db.tasks.insert(task);
        })
        
        this.delete('/todos/:id', (schema, request) => {
            const id = request.params.id;

            return schema.todos.find(id).destroy();
        })

    }
})