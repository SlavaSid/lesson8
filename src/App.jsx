/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import './App.css';
import UserData from './components/UserData';
import {Form} from './components/Form';
import {useDispatch} from 'react-redux';
import axios from "axios";
import { SET_USERS } from "./reducers/usersReducer.js";


function App() {
 const dispatch = useDispatch();
 const [appState, setAppState] = useState(false);

 useEffect(() => {
  setAppState(true);
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  axios.get(apiUrl).then((resp) => {
    const allPersons = resp.data;
    setAppState(false);
    dispatch({
    type: SET_USERS, payload: allPersons});
 })

  }, []);
  



  return (
    <div>
      <Form/> {appState ? (<h1>Загрузка данных</h1>) : (<UserData/>)}
    </div>
  )
}

export default App;
