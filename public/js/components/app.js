// import Login from "./login.js";
const AppComponent = {
    template: `
<div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">ToDo List</a>
        </div>
    </nav>
    <div class="container-fluid">

        <button class="btn btn-sm btn-primary mt-2" @click="getItems">Listar</button>

        <ul class="list-unstyled mt-2">
            <li v-for="item of todoList" class="mb-1">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="item.text" />
                    <button class="btn btn-sm btn-outline-success" @click="doneItem(item.id)" v-if="item.status=='todo'">OK</button>
                    <button class="btn btn-sm btn-success" @click="todoItem(item.id)" v-if="item.status=='done'">OK</button>
                    <button class="btn btn-sm btn-outline-primary" @click="updateTextItem(item)">Actualizar</button>
                    <button class="btn btn-sm btn-outline-warning" @click="deleteItem(item.id)">Eliminar</button>
                </div>
            </li>
        </ul>

        <div class="input-group mt-2">
            <input type="text" class="form-control" v-model="text" />
            <button class="btn btn-sm btn-primary" @click="addItem">Agregar</button>
        </div>
    </div>

</div>`,

    data() {
        return {
            text: '',

            todoList: [
                // {
                //     id: 1,
                //     text: 'Item A',
                //     status: 'todo',
                // }
            ],

        }
    },

    async mounted() {
        try {
            await this.getItems();
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        async getItems() {
            try {
                const response = await axios.get('/api/todos');
                this.todoList = response.data;
            } catch (error) {
                console.log(error);
            }
        },

        async addItem() {
            const text = this.text;
            const body = {
                text
            };
            try {
                const response = await axios.post('/api/todos', body);
                const data = response.data;
                return this.getItems(); 
            } catch (error) {
                console.log(error);
            }
        },

        async doneItem(id) {
            try {
                const response = await axios.patch(`/api/todos/${id}/done`);
                const data = response.data;
                return this.getItems(); 
            } catch (error) {
                console.log(error);
            }
        },

        async todoItem(id) {
            try {
                const response = await axios.patch(`/api/todos/${id}/todo`);
                const data = response.data;
                return this.getItems(); 
            } catch (error) {
                console.log(error);
            }
        },

        async updateTextItem(item) {
            const id = item.id;
            const text = item.text;
            const body = {
                text
            };
            try {
                const response = await axios.patch(`/api/todos/${id}`, body);
                const data = response.data;
                return this.getItems(); 
            } catch (error) {
                console.log(error);
            }
        },

        async deleteItem(id) {
            try {
                const response = await axios.delete(`/api/todos/${id}`);
                const data = response.data;
                return this.getItems(); 
            } catch (error) {
                console.log(error);
            }
        },

    }

};

export default AppComponent;