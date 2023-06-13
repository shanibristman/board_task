import { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {

    const [Tasks , SetTasks] = useState([]);
    
    const loadActivityTask= async () =>{
        let res = await fetch(`http://localhost:5008/api/tasks`,
        { method: 'GET' });
        let data = await res.json();
        SetTasks(data);
    }

    const AddTask = async (task) => {        
        let res = await fetch(`http://localhost:5008/api/tasks/add`,
            {
                method: 'POST',
                body: (JSON.stringify(task)),
                headers: { 'Content-Type': 'application/json'}

            });
        let data = await res.json();
    }

    const UpdateTask = async(task) => {
      
        let id=task.id;        
        let res = await fetch(`http://localhost:5008/api/tasks/${id}`,
        {
            method: 'PUT',
            body: (JSON.stringify(task)),
            headers: { 'Content-Type': 'application/json'}
        });
        let data = await res.json();    
      }

    const values = {
        Tasks,
        loadActivityTask,
        AddTask,
        UpdateTask
    }
    return(
        <TaskContext.Provider value={values}>
            {props.children}
        </TaskContext.Provider>
    )
}
