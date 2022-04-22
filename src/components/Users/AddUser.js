import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(enteredName.trim().length===0 || enteredAge.trim().length===0)
    {
      return;
    }
    if(+enteredAge<1)
    {
      return;
    }
    const userDet = {
        name:enteredName,
        age:enteredAge,
        id:Math.random().toString()
    }

    props.onGetUser(userDet);

    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" value={enteredName} onChange={nameHandler}></input>
        <label>Age (Years)</label>
        <input type="number" value={enteredAge} onChange={ageHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
