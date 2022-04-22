import React from "react";
import "./UsersList.css";
import Card from "../UI/Card";

const UsersList = (props) => {

  if(props.users.length===0)
  {
    return;
  }

  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
