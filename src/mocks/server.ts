import { createServer, Model }  from 'miragejs'

createServer({
    models: {
        todos: Model
    },
    routes() {

        this.namespace = 'api';

        //get(/api/todos)
        //get(/api/todos/:id)

        this.get('/todos', (schema) => {
            return schema.all('todos');
        })
        
        this.post('/todos', (schema, request) => {
            const task = JSON.parse(request.requestBody);
            return schema.create('todos', task);
        })

        this.get('/todos/:id', (schema, request) => {
            const id = request.params.id;

            return schema.find('todos', id);
        })

        this.put('/todos/:id', (schema, request) => {
            const id = request.params.id;

            const newTask = JSON.parse(request.requestBody) ;
            
            const todo = schema.find('todos', id);
            todo?.update(newTask)
            return {};
        })
        
        this.delete('/todos/:id', (schema, request) => {
            const id = request.params.id;
            const todo = schema.find('todos', id);
            todo?.destroy();
            return {};
        })

    }
})