import React, { useState, useEffect } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        // Abrir ou criar o banco de dados 'todoDB'
        const request = indexedDB.open('todoDB', 1);

        request.onerror = function(event) {
            console.error('Erro ao abrir o banco de dados:', event.target.error);
        };

        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            // Criar um object store chamado 'tasks' para armazenar as tarefas
            const objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
            // Criar um índice para pesquisa rápida por título
            objectStore.createIndex('title', 'title', { unique: false });
        };

        request.onsuccess = function(event) {
            const db = event.target.result;
            // Carregar as tarefas do IndexedDB
            loadTasksFromDB(db);
        };
    }, []);

    const loadTasksFromDB = (db) => {
        // Abrir uma transação de leitura no object store 'tasks'
        const transaction = db.transaction(['tasks'], 'readonly');
        const objectStore = transaction.objectStore('tasks');
        // Obter todos os itens do object store e adicionar às tarefas do estado
        const request = objectStore.getAll();

        request.onsuccess = function(event) {
            const tasks = event.target.result;
            setTasks(tasks);
        };

        request.onerror = function(event) {
            console.error('Erro ao carregar tarefas:', event.target.error);
        };
    };

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            const task = { title: newTask };
            // Adicionar a nova tarefa ao IndexedDB
            addTaskToDB(task);
            setNewTask('');
        }
    };

    const addTaskToDB = (task) => {
        // Abrir uma transação de gravação no object store 'tasks'
        const request = indexedDB.open('todoDB', 1);

        request.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(['tasks'], 'readwrite');
            const objectStore = transaction.objectStore('tasks');
            // Adicionar a nova tarefa ao object store
            const addRequest = objectStore.add(task);

            addRequest.onsuccess = function(event) {
                // Atualizar as tarefas no estado após adicionar a tarefa com sucesso
                loadTasksFromDB(db);
            };

            addRequest.onerror = function(event) {
                console.error('Erro ao adicionar tarefa:', event.target.error);
            };
        };
    };

    const deleteTask = (id) => {
        // Abrir uma transação de gravação no object store 'tasks'
        const request = indexedDB.open('todoDB', 1);

        request.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(['tasks'], 'readwrite');
            const objectStore = transaction.objectStore('tasks');
            // Excluir a tarefa do object store com base no ID
            const deleteRequest = objectStore.delete(id);

            deleteRequest.onsuccess = function(event) {
                // Atualizar as tarefas no estado após excluir a tarefa com sucesso
                loadTasksFromDB(db);
            };

            deleteRequest.onerror = function(event) {
                console.error('Erro ao excluir tarefa:', event.target.error);
            };
        };
    };

    return (
        <div>
            <h1>Lista para Mercado</h1>
            <input
                type="text"
                placeholder="Digite um novo produto"
                value={newTask}
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Adicionar Produto</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => deleteTask(task.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
