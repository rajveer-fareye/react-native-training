import Realm from "realm";

// export const TodoSchema ={
//     name: TODO_SCHEMA,
//     primaryKey:'id',
//     properties:{
//         id:'int',
//         name: {type: 'string', indexed:true},
//         done: {type: 'bool', indexed:false},
//     }
// };

// export const TodoListSchema ={
//     name: TODOLIST_SCHEMA,
//     primaryKey:'id',
//     properties:{
//         id:'int',
//         name:'string',
//         creationDate:'date',
//         todos:{type:'list',objectType:TODO_SCHEMA},
//     }
// };

// const databaseOptions ={
//     path:'todoListApp.realm',
//     schema:[TodoListSchema,TodoSchema],
    
// };

// export const insertNewToDoList



























export const Todo = "Todos";

export const TodoListData = {
	name: 'Todo',
	primaryKey: 'id',
	properties: {
	    id: {type: 'string', indexed: true},
	    title: 'string',
	    completed: 'bool',
	    createdAt: 'date',
        dueDate:'date',
	    updatedAt: 'date'
	}
};

const databaseOptions ={
    path:'todoListApp.realm',
    schema:[TodoListData],
    
};

export const insertIntoTodoList = newTodo => new Promise((resolve,reject) =>{
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            realm.create(TodoListData,newTodo);
            resolve(newTodo);
        });
    }).catch((error)=> reject(error));
});

export const updateIntoTodoList = todo => new Promise((resolve,reject) =>{
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            let updatingTodo = realm.objectForPrimaryKey(TodoListData,todo.id);
            updatingTodo.name = todo.name;
            resolve();
        });
    }).catch((error)=> reject(error));
});

export const deleteTodo = todoId => new Promise((resolve,reject) =>{
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            let deletingTodo = realm.objectForPrimaryKey(TodoListData,todoId);
            realm.delete(deletingTodo);
            resolve();
        });
    }).catch((error)=> reject(error));
});

export const deleteAllTodoList = todoId => new Promise((resolve,reject) =>{
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            let allTodos = realm.objects(TodoListData);
            resolve(allTodos);
        });
    }).catch((error)=> reject(error));
});

export const queryAllTodoList = todoId => new Promise((resolve,reject) =>{
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            let allTodoList = realm.objects(TodoListData);
            resolve(allTodoList);
        });
    }).catch((error)=> reject(error));
});




export default new Realm(databaseOptions);




// let allSchemas = {
//     findAll: function(sortBy) {
//       if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
//       return repository.objects('Todo').sorted(sortBy);
//     },
  
//     save: function(todo) {
//       if (repository.objects('Todo').filtered("title = '" + todo.title + "'").length) return;
  
//       repository.write(() => {
//         todo.updatedAt = new Date();
//         repository.create('Todo', todo);
//       })
//     },
  
//     update: function(todo, callback) {
//       if (!callback) return;
//       repository.write(() => {
//         callback();
//         todo.updatedAt = new Date();
//       });
//     }
//   };