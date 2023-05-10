import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  const { name, username, email } = user;

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/users/${id}`, user);
    window.location.href = "/home";
  };

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:8000/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h3>Add User</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor=''>Name: </label>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onInput={(e) => handleChangeInput(e)}
          />
          <br />
          <label htmlFor=''>UserName: </label>
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onInput={(e) => handleChangeInput(e)}
          />
          <br />
          <label htmlFor=''>Email: </label>
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onInput={(e) => handleChangeInput(e)}
          />
          <br />
          <Button type='submit' variant='outline-primary'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
