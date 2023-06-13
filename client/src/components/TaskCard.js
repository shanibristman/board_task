import React from 'react'

export default function TaskCard({props}) {
  return (
    <div>
        <div>{props.title}</div>
        {/* <div>
          {props.description.map((item, index)=>{
            return(
              <div>{item}</div>
            )
          })}
        </div> */}
    </div>
  )
}
