import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard'
import LogIn from './LogIn';
import './Tasks.css';
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';



export default function Tasks() {

    const {Tasks, loadActivityTask, AddTask} = useContext(TaskContext);
    const {isAuthenticated, logOut} = useContext(UserContext)
    const [Open , SetOpen] = useState(false);
    const [OpenLog, SetOpenLog] = useState(false);

    const [Title, SetTitle] = useState();
    const [stringDescription, SetStringDescription] = useState([]);

    const history = useHistory()



    const openAdd=(event)=>{
        event.preventDefault();
        SetOpen(!Open)
    }

    // const openLog = (e)=>{
    //     e.preventDefault();
    //     SetOpenLog(!OpenLog)
    // }

    const  AddThisTask= async ()=>{
  
        let arr = stringDescription.split(',');
        let task = {
            title : Title,
            description : arr
        }
        await AddTask(task);
        SetOpen(!Open)
        loadActivityTask();
    }

    useEffect(() =>{
        loadActivityTask();
        if(!isAuthenticated()){
            logOut()
            history.push('/');
        }
    },[])

  return (
    
    <div className="allpage">
            {/* <button onClick={openLog}>LogIn</button> */}
            <div className='title'>TASK BOARD:</div>
            {Open?
            <div className='popups'>
                <button onClick={openAdd} >X</button>
                <div>Add Task</div>
                <label>
                    <div>Title:</div>
                    <input placeholder='Title: ' onChange={e=>SetTitle(e.target.value)}></input>
                </label>
                <label>
                    <div>Description:</div>
                    <input placeholder='Put the sign "," between the different descriptions' onChange={e=>SetStringDescription(e.target.value)}></input>
                </label>
                <button onClick={AddThisTask}>Add Task</button>
            </div>
            :
            <button className='btn-add' onClick={openAdd}>Add Task</button>
    }
            <div className='cards'>
                {Tasks.map((task, index)=>{
                    return (
                        <div key={index}>
                            <TaskCard props={task}></TaskCard>
                        </div>
                    )
                })}
            </div>
        </div>
        // }
        // </div>
  )
}