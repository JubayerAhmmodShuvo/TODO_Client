import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ShowTodo = () => {
  const [user] = useAuthState(auth);
  const [todo, setTodo] = useState([]);
  
  if (user) {
    fetch(`http://localhost:5000/todos?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTodo(data));
     
   
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todo.map((todo, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td><button>X</button></td>
                <td><button>X</button></td>
               
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTodo;