import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError] = useState();

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () =>{
    setError(null);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title:'Invalid age',
        message:'Please enter a valid age (> 0).'
      })
      return;
    }
    const userDet = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onGetUser(userDet);

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onGetError={errorHandler} />}
      <Card className="input">
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input type="text" value={enteredName} onChange={nameHandler}></input>
          <label>Age (Years)</label>
          <input type="number" value={enteredAge} onChange={ageHandler}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
