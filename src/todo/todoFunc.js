import React, {useState, useEffect} from 'react';
import {Added} from './todoView/added';
import {Done} from './todoView/done';
import './todoFunc.css';
import Check from './images/check.svg';
import {saveState, loadStateHave, loadStateDone, saveDone } from './getState';

export const ToDo = () => {

const [state, updateState] = useState([]);
const [done, updateDone] = useState([]);
const [task, updateTask] = useState('');
const [inputValue, updateInputValue] = useState('');

useEffect(() => {

      updateState(loadStateHave());

        updateDone(loadStateDone());
    
       
  }, []);

  useEffect(() => {
    saveState(state);
    saveDone(done);

  });

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
    if(task){
        let copy = [...state];
        copy.push({
            name: task,
            priority: 1,
            date: new Date().toLocaleDateString(),
         })
        updateState(copy);
        updateTask('');
        updateInputValue('');
    }
   
}
const move = (e)=>{
    let element = '';
    state.map((el, i)=>{
        if(e.target.parentElement.parentElement.getElementsByClassName('task-title')[0].innerText === el.name){
          element =  state.splice(i, 1)[0];
          element.date = new Date().toLocaleDateString();
           updateState([...state]);
           let copy = [...done];
           copy.push(element)
           updateDone(copy);
        } 
    })
}
const moveBack = (e)=>{
    let element = '';
    done.map((el, i)=>{
        if(e.target.parentElement.parentElement.getElementsByClassName('task-title')[0].innerText === el.name){
          element =  done.splice(i, 1)[0];
          element.date = new Date().toLocaleDateString();
           updateDone([...done]);
           let copy = [...state];
           copy.push(element)
           updateState(copy);
        } 
    })
}
const deleteList = (e) => {
    state.map((el, i)=>{
        if(e.target.parentElement.parentElement.getElementsByClassName('task-title')[0].innerText === el.name){
         let element =  state.splice(i, 1)[0]
           updateState([...state]);
        } 
    })
}
const deleteDone = (e) => {
    done.map((el, i)=>{
        if(e.target.parentElement.parentElement.getElementsByClassName('task-title')[0].innerText === el.name){
            
         let element =  done.splice(i, 1)[0]
           updateDone([...done]);
        } 
    })
}
const changePrior = (e) => {
state.map((el, i) => {
    console.log(e.target.parentElement);
    if(e.target.parentElement.getElementsByClassName('task-title')[0].innerText === el.name){
        console.log(el.name);
        state.splice(i, 1);
        updateState([...state, {name: el.name, priority: +e.target.value}]);
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
            <Added todos={state} move={move} deleteList={deleteList} changePrior={changePrior} />
            <Done  done={done} deleteDone={deleteDone} moveBack={moveBack} />
        </>
    );

};