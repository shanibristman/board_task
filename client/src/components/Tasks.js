import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard'
import './Tasks.css';

export default function Tasks() {

    const {Tasks, loadActivityTask, AddTask} = useContext(TaskContext);
    const [Open , SetOpen] = useState(false);

    const [Title, SetTitle] = useState();
    const [stringDescription, SetStringDescription] = useState([]);


    const openAdd=(event)=>{
        event.preventDefault();
        SetOpen(!Open)
    }

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
    },[])

  return (
    
    <div className="allpage">
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
  )
}
