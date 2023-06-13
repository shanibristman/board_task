import React, { useState , useContext } from 'react'
import { TaskContext } from '../context/TaskContext';
import './TaskCard.css';

export default function TaskCard({props}) {

  const [Open , SetOpen] = useState(false);
  const [Edit, SetEdit] = useState(false);
  const [Title , SetTitle] = useState();
  const {UpdateTask,loadActivityTask } = useContext(TaskContext);

  const showNoreData=(event)=>{
    event.preventDefault();
    SetOpen(!Open)
  }

  const openEdit = (e)=>{
    e.preventDefault();
    SetEdit(!Edit)
  }

  const ediThisTask = async () =>{
    let newtask = {
      id :props._id, 
      title : Title,
      description : props.description,    
    }
    await UpdateTask(newtask);
    SetEdit(!Edit)
    loadActivityTask();
  }

  return (
    <div className='all'>
    {Open? 
        <div className='popup scrool'>
          <button onClick={showNoreData}>X</button>
          <div>
              <div>{props.title}:</div>
          </div>
          <div>
            {props.description.map((item, index)=>{
              return(
                  <div key={index}>{item}</div>
                )
              })}
          </div>
        </div>  
        :
        <div>
          {!Edit?
          <div className='task-title'>
            <div onClick={showNoreData}>{props.title}</div>
            <button className='edit-btn' onClick={openEdit}>update</button>
          </div>
           :
          <div>
              <div className='popup'>
              <button  onClick={openEdit} >X</button>
              <label>
                <div>New Title:</div>
                <input placeholder={props.title} onChange={e=>SetTitle(e.target.value)}></input>
            </label>
            <button onClick={async() => {ediThisTask()}}>update title</button>
            </div>
          </div>
          }        
          </div>
        }
    </div>
  )
}
