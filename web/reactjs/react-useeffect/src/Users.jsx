import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import {MoonLoader} from 'react-spinners'
const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const usersList = await response.json();
      if(usersList.length == 0){
        console.log("No user found")
      } else {
        setUsers(usersList)
        setLoading(false)
      }
    }

    getUsers()
  })
  
  return (
    <>
      <div className="m-4">
        <span className="text-xl block">User Data</span>
        <div className="mt-3">
          { loading ? <div>Loading <MoonLoader /></div> :
          users.length > 0 ?
            <div className="grid grid-cols-12 gap-3">
              {users.map((user, i)=>{
                return (
                  <div key={i} className="col-span-4">
                    <UserCard user={user}/>
                  </div>
                )
              })}
            </div> :
            <div><i>No users found</i></div>
          }
        </div>
      </div>
    </>
  )
};

export default Users;
