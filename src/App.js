import React, { useState } from "react";
import AddUser from "./components/Users/AddUser.js";
import UsersList from "./components/Users/UsersList.js";

const App = () => {
  const [user,setUser] = useState([]);

  const getNewUser = (newUser) => {
    setUser((prevUsers)=>{
      return [newUser,...user];
    })
  }

  return (
    <div>
      <AddUser onGetUser={getNewUser}/>
      <UsersList users={user}/>
    </div>
  );
}

export default App;
