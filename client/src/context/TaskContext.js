import { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {

    const [Tasks , SetTasks] = useState([]);
    
    const loadActivityTask= async () =>{
        let res = await fetch(`http://localhost:5008/api/tasks`,
        { method: 'GET' });
        let data = await res.json();
        console.log(data);
        SetTasks(data);
    }

    const values = {
        Tasks,
        loadActivityTask
    }
    return(
        <TaskContext.Provider value={values}>
            {props.children}
        </TaskContext.Provider>
    )
}
