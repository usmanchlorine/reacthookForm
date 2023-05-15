import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
function App() {
  const form = useForm();

  const { register, control, handleSubmit } = form

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <div className='container'>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Youtube Form</h1>
          <h3>Username</h3>

          <input type='text' id="username" name="username" {...register("username")}></input>

          <br></br>
          <br></br>
          <br></br>
          <h3>Password</h3>

          <input type='password' id="password" name="password" {...register("password")}></input>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <input type='submit'></input>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
}

export default App;
