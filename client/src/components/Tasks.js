import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard'
import './Tasks.css';

export default function Tasks() {

    const {Tasks, loadActivityTask} = useContext(TaskContext);

    useEffect(() =>{
        loadActivityTask();
    },[])


  return (
    <div className="allpage">
        <div className='title'>TASK BOARD:</div>
        <button className='btn-add'>Add Task</button>
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
