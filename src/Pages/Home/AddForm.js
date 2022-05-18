import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
  import {  toast } from 'react-toastify' 


const AddForm = () => {
 const [user] = useAuthState(auth);
 const [todo, setTodo] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const url = `https://polar-mesa-90175.herokuapp.com/todos`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) =>
        setTodo(result),
        toast.success("Your todo has been added")
    
    );
     reset(); 
  };

  return (
    <div className="border my-auto pb-20 ">
      <form
        className="form-control w-full max-w-xs mx-auto gap-8 mt-24 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input input-bordered input-secondary w-full max-w-xs"
          value={user?.email} 
          readOnly
          {...register("email", { required: true, maxLength: 40 })}
        />
        <input
          className="input input-bordered input-secondary w-full max-w-xs"
          placeholder="Task Name"
          {...register("name", { required: true, maxLength: 30 })}
        />

        <textarea
          className="input input-bordered input-secondary w-full h-32 "
          placeholder="Description"
          {...register("description")}
        />
        <button className="btn btn-outline btn-primary ">ADD</button>
      </form>
    </div>
  );
};

export default AddForm;