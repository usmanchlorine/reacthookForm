import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
function App() {
  const form = useForm({
    defaultValues: { /// the default value mean it will be there when te page is loaded 
      username: 'pakistan',
      socials: { /// in this way i can define a certain scheme about how the data should be given to the server 
        facebook: "",
        twitter: "",
      }
    }
  }); // here we have to add default values 

  const { register, control, handleSubmit, formState } = form
  const { errors } = formState
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <div className='container'>
      <div className="App">
        {/* we are using no Validate to remove all the cutom Validation  */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          <h1>Youtube Form</h1>

          <div className='' style={{ position: 'relative' }}>
            <h3>Username</h3>
            {/* we are using ...register to include all the props of form  register plus we can include Validation as the second argument after register("[FIELD NAME]",{[CONDITION KEY VALUES]})  */}
            <input type='text' id="username" name="username" {...register("username", {

              required: 'Username required',
              validate: (uservalue) => {
                if (uservalue === ('admin')) {
                  return "Enter the different value for username"
                }

              }
            })}></input>

            <p className="" style={{ textAlign: 'left', marginLeft: '5em', color: "red", position: "absolute" }}><small>{errors.username?.message}</small></p>

          </div>
          <br></br>


          <div className='px-4' style={{ position: 'relative' }}>
            <h3>Email</h3>
            <input type='text' id="email" name="email" {...register("email", {
              required: "email should be provided",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Please enter a valid email address"
              },
              validate: {
                notAdmin: (emailvalue) => {
                  if (emailvalue.includes("admin")) {
                    return "this email is used for admin only"
                  }
                }
                ,
                notBlacklisted: (emailvalue) => {
                  if (emailvalue.endsWith("demonkey.com")) {
                    return "this is blacklisted domain"

                  }


                }
              }

            })}></input>
            <p className="" style={{ textAlign: 'left', marginLeft: '5em', color: "red", position: "absolute" }}><small>{errors.email?.message}</small></p>
          </div>
          <br></br>

          <div className='' style={{ position: 'relative' }}>

            <h3>Password</h3>

            <input type='password' id="password" name="password" {...register("password", {
              required: "Password should be provided"
            })}></input>
            <p className="" style={{ textAlign: 'left', marginLeft: '5em', color: "red", position: 'absolute' }}><small>{errors.password?.message}</small></p>
          </div>




          <div className='' style={{ position: 'relative' }}>

            <h3>facebook</h3>

            <input type='text' id="facebook" name="facebook" {...register("socials.facebook")}></input>
          </div>






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
