import React, {useState, useEffect} from 'react';
import {Added} from './todoView/added';
import {Done} from './todoView/done';
import './todoFunc.css';

export const ToDo = () => {

const [state, updateState] = useState(
    [
        {
            id: 1,
            name: 'tatas',
        },
        {
            id: 2,
            name: 'taras',
        },
        {
            id: 3,
            name: 'juliasia',
        },
        {
            id: 4,
            name: 'dima',
        },
        {
            id: 5,
            name: 'chort',
        },
    ]
)
const [done, updateDone] = useState([]);

const show = (e)=>{
    let element = '';
    state.map((el, i)=>{
        if(e.target.parentElement.parentElement.innerText === el.name){
          element =  state.splice(i, 1)[0]
           updateState([...state]);
           let copy = [...done];
           copy.push(element)
           updateDone(copy);
        }
        
    })
    
}
    return(
        <>
            <input type='text' className='input' placeholder='add new task'/>
            <Added todos={state} show={show}/>
            <Done  done={done}/>
        </>
    );

};