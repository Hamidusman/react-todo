import React, {useState} from "react"

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleTasks(event) {
        setNewTask(event.target.value);

    }

    function newTaskInput() {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i!== index));

    }

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const Update = [...tasks];
            [Update[index], Update[index + 1]] =
            [Update[index + 1], Update[index]];
            setTasks(Update);
        }

    }



    return (
        <div className="container">
            <input className="task-input" type="text" value={newTask} onChange={handleTasks} />
            <button className="add-button" onClick={newTaskInput}>Add</button>
            
            {tasks.map((task, index) => (
                <div className="item" key={index}>
                    <p
                        onClick={() => toggleComplete(index)}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                    >
                        {task.text}
                    </p>
                    <div>
                        <button className="mod" onClick={() => moveTaskDown(index)}>Down</button>
                        <button className="mod" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Todo;
