import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
 import { toast } from "react-toastify"; 

const ShowTodo = () => {
  const [user] = useAuthState(auth);
  const [todo, setTodo] = useState([]);
  const [line,setLine] = useState(false);
  
  if (user) {
    fetch(`https://polar-mesa-90175.herokuapp.com/todos?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTodo(data));
     
   
  }
   const handleDeleteBtn = id => {
        const confirm = window.confirm('Want to delete this item');
        if (confirm) {
            const url = `https://polar-mesa-90175.herokuapp.com/todos/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                  const rest = todo.filter(item => item._id !== id);
                  setTodo(rest);
                  toast.info("Delete Successful", {
                    theme: "colored",
                  });
                    
                })
        }
    }
  const strikeThrouth = id => {
    const url = `https://polar-mesa-90175.herokuapp.com/todos/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: true,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       
        const rest = todo.map(item => {
          if (item._id === id && item.completed === false) {
            
            return { ...item, completed: true };


          }
          return item;
        });
        setTodo(rest);
        toast.success("Task Completed", {
          theme: "colored",
        });
      });
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
                <td>
                  <button
                    onClick={() => strikeThrouth(todo._id)}
                    class="btn btn-xs btn-success"
                    style={{
                     
                    textDecorationLine: todo.completed ? "line-through" : "none",
                    }}
                  >
                    Complete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteBtn(todo._id)}
                    class="btn btn-xs btn-error"
                   
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTodo;