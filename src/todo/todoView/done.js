import React from 'react';
import './todoView.css';
import White from '../images/whiteBin.svg';
import Check from '../images/check.svg';


export const Done = (props) => {
    return(
        <div className='done-cont'>
            <span className='title'>Done</span>
            {props.done.map((el) => {
                 return (
                    <div className='done' >
                        <span className='task-title'>{el.name}</span> 
                 <span className='date'>{el.date}</span>
                        <div className='cont-rigth'>
                            <img src={Check} className='bin-icon' onClick={props.moveBack} alt='check-icon'/>
                            <img src={White} className='bin-icon' alt='bin-icon' onClick={props.deleteDone}/>
                        </div>
                    </div>
                 )
            })}
        </div>
           
        
    )
}