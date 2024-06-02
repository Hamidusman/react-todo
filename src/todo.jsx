import React, {useState} from "react"

function Todo(){
    const [tasks, setTasks] = useState(['kk']);
    const [newTask, setNewTask] = useState('');
    
    function handleTasks(event) {
        setNewTask(event.target.value);

    }

    function newTaskInput() {
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i!== index));

    }

    function moveTaskUp(index){

        if (index > 0) {
            const Update = [...tasks];
            [Update[index], Update[index - 1]] =
            [Update[index - 1], Update[index]];
            setTasks(Update);
        }
        

    }
    function moveTaskDown(index){

        if (index > tasks.length - 1) {
            const Update = [...tasks];
            [Update[index], Update[index + 1]] =
            [Update[index + 1], Update[index]];
            setTasks(Update);
        }

    }



    return (
        <div>
            <input type="text" value={newTask} onChange={handleTasks}/>
            <button className="add-button" onClick={newTaskInput}>Add</button>
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            {task}
                            <button onClick={() => moveTaskUp(index)}>Up</button>
                            <button onClick={() => moveTaskDown(index)}>Down</button>
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Todo