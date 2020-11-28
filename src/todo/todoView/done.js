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
                        {el.name}
                        <div className='cont-rigth'>
                            <img src={Check} className='bin-icon' onClick={props.show}/>
                            <img src={White} className='bin-icon'/>
                        </div>
                    </div>
                 )
            })}
        </div>
           
        
    )
}