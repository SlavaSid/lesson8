/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../reducers/usersReducer.js";


export const Form = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(10);
    const [postName, setPostName] = useState('');
    const [postUserName, setPostUserName] = useState('');
    const [postEmail, setPostEmail] = useState('');
    const [postAdress, setPostAdress] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        setCount((prevState) => {
          dispatch({
            type: ADD_USER,
            payload: {
              id: prevState + 1,
              name: postName,
              username: postUserName,
              email: postEmail,
              address: postAdress,
            },
          });
          return prevState + 1;
        });


    setPostName('');
    setPostEmail('');
    setPostUserName('');
    setPostAdress('');

};

const onChangename = (e) => {
setPostName(e.target.value);
};
const onChangeUserName = (e) => {
setPostUserName(e.target.value);
};
const onChangeEmail = (e) => {
setPostEmail(e.target.value);
};
const onChangeAdress = (e) => {
setPostAdress(e.target.value);
};
return (
    <form onSubmit={addNewPost} className="form">
        <div className="wrapper">
            <label>
                Name: <input required value={postName} onChange={onChangename}/>
            </label>
            <label>
                userName: <input required value={postUserName} onChange={onChangeUserName}/>
            </label>
            <label>
                Email: <input required value={postEmail} onChange={onChangeEmail}/>
            </label>
            <label>
                Address: <input required value={postAdress} onChange={onChangeAdress}/>
            </label>
        </div>
        <div className="button">
            <button type="submit">Добавить</button>
        </div>
    </form>
);



};