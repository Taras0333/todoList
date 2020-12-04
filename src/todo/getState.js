import React, {useState, useEffect} from 'react';

export const loadStateHave = () => {
    try {
      const serializedState = localStorage.getItem('have');
      if (serializedState === null) {
        return undefined;
      }
      
      let parsedStore = JSON.parse(serializedState);
      return parsedStore;
    } catch (err) {
      return undefined;
    }
  }; 
  export const loadStateDone = () => {
    try {
      const serializedState = localStorage.getItem('done');
      if (serializedState === null) {
        return undefined;
      }
      
      let parsedStore = JSON.parse(serializedState);
      console.log(parsedStore);
      return parsedStore;
    } catch (err) {
      return undefined;
    }
  }; 
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('have', serializedState);
    } catch {
    }
  };
  export const saveDone = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('done', serializedState);
    } catch {
    }
  };