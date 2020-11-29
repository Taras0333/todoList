import React from 'react';
import './todoView.css';
import White from '../images/whiteBin.svg';


export const Done = (props) => {
    return(
        <div className='done-cont'>
            <span className='title'>Done</span>
            {props.done.slice(-5).map((el) => {
                 return (
                    <div className='done' >
                        {el.name}
                        <div className='cont-rigth'>
                            <img src={White} className='bin-icon' alt='bin-icon' onClick={props.deleteDone}/>
                        </div>
                    </div>
                 )
            })}
        </div>
           
        
    )
}