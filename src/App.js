import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] =  useState([]);

  const addUsersHandler =(uName, uAge) =>{
    setUserList((previousUserList)=>{
      return [...previousUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });

  };

  return (
   <div> 
     <AddUser onAddUser = {addUsersHandler}/>
     <UserList users= {userList}></UserList>
   </div>
    );
}

export default App;
