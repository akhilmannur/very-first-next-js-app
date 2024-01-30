import React from "react";

const UsersPage = async() => {

  interface User{
    id:number,
    name:string
  }

const res= await fetch('https://jsonplaceholder.typicode.com/users')
const users: User[] =await res.json();

  return (
    <div>
      <h1>
        User List 
      </h1>
      <ul>
        {
          users.map((user)=>(
           <li key={user.id} >
              {user.name}
              {user.id}
           </li>
           
          ))
        }
      </ul>
   
    </div>
  );
};

export default UsersPage;
