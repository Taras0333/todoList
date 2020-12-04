import React from 'react';
import './todoView.css';
import Black from '../images/blackBin.svg';
import White from '../images/whiteBin.svg';
import Check from '../images/check.svg';

export const Added = (props) => {
   
    return(
        <div className='added-cont'>
            <span className='title'>In prosses</span>
            {props.todos.sort(function(a, b, i) {
                return a.priority - b.priority;
            }).map((el) => {
                 return (
                    <div className='todo-container' >
                       <span className='task-title'>{el.name}</span> 
                       
                        <select className='select' onChange={props.changePrior} id="select" selected='select priority'>
                            <option selected disabled >select priority</option>
                            <option value='select priority'>1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>
                        </select>
                        <span className='date'>{el.date}</span>
                        <div className='cont-rigth'>
                            <img src={Check} className='bin-icon' onClick={props.move} alt='check-icon'/>
                            <img src={Black} className='bin-icon' onClick={props.deleteList} alt='bin-icon'/>
                        </div>
                    </div>
                 )
            })}
        </div>
            
        
    )
}