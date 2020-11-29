import React, {useState, useEffect} from 'react';
import {Added} from './todoView/added';
import {Done} from './todoView/done';
import './todoFunc.css';
import Check from './images/check.svg';

export const ToDo = () => {

const [state, updateState] = useState([]);
const [done, updateDone] = useState([]);
const [task, updateTask] = useState('');
const [inputValue, updateInputValue] = useState('');

const getTask = (e) => {
    updateTask(e.target.value);
    updateInputValue(e.target.value);
}
const getTaskByEnter = (e) => {
    if(e.key === 'Enter'){
       save();
    }
}
const save = () => {
    let copy = [...state];
    copy.push({
        name: task,
     })
    updateState(copy);
    updateTask('');
    updateInputValue('');
}
const move = (e)=>{
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
const deleteList = (e) => {
    state.map((el, i)=>{
        if(e.target.parentElement.parentElement.innerText === el.name){
         let element =  state.splice(i, 1)[0]
           updateState([...state]);
        } 
    })
}
const deleteDone = (e) => {
    done.map((el, i)=>{
        if(e.target.parentElement.parentElement.innerText === el.name){
         let element =  done.splice(i, 1)[0]
           updateDone([...done]);
        } 
    })
}
    return(
        <>
            <div className='input-cont'>
                <input type='text' className='input' placeholder='add new task' onChange={getTask} value={inputValue} onKeyDown={getTaskByEnter}/>
                <div className='intup-save'>
                    <img className='input-icon' src={Check} alt='check icon' onClick={save}/>
                </div>
            </div>
            <Added todos={state} move={move} deleteList={deleteList}/>
            <Done  done={done} deleteDone={deleteDone}/>
        </>
    );

};