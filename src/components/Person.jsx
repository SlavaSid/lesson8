/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { DELETE_USER } from "../reducers/usersReducer.js";

export const Person = ({ person, index }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch({ type: DELETE_USER, payload: id });
  };
  return (
    <tr key={person.id}>
      <td>{index + 1}</td>
      <td>{person.name}</td>
      <td>{person.username}</td>
      <td>{person.email}</td>
      <td>{person.address.city}</td>
      <td>
        <button onClick={() => handleDeleteUser(person.id)}>Delele</button>
      </td>
    </tr>
  );
};
