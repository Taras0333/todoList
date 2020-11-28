import React from 'react';
import './todoView.css';
import Black from '../images/blackBin.svg';
import White from '../images/whiteBin.svg';
import Check from '../images/check.svg';

export const Added = (props) => {
   
    return(
        <div className='added-cont'>
            <span className='title'>In prosses</span>
            {props.todos.map((el) => {
                 return (
                    <div className='todo-container' >
                        {el.name}
                        <div className='cont-rigth'>
                            <img src={Check} className='bin-icon' onClick={props.show}/>
                            <img src={Black} className='bin-icon'/>
                        </div>
                    </div>
                 )
            })}
        </div>
            
        
    )
}