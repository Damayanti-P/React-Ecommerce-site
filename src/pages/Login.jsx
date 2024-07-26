import React, { useState } from 'react'
import'../pages/login.css'
const Login = ({onLogin}) => {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const [errors,setErrors]=useState({});
    const [loginErrors,setLoginErrors]=useState('')

    const handleChange=(e)=>{

        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
    const validation=()=>
    {
        const newError={}
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email) { newError.email = 'Email is Required' }
        else if (!emailRegex.test(formData.email)) { newError.email = 'Invalid email address' }
        if (!passwordRegex.test(formData.password)) { newError.password = 'Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long' }
        setErrors(newError);
        return Object.keys(newError).length===0;
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(!validation) return;
       
        if(storedData && storedData.email===formData.email && storedData.password===formData.password)
        {
            console.log('Login successful:', storedData);
            setLoginErrors('');
            onLogin();
        }
        else {
            setLoginErrors('Invalid Login details');
        }

    }
    const storedData=JSON.parse(localStorage.getItem('userData'));
  return (
  
    <div className='loginContainer'>
    <form className='loginForm' onSubmit={handleSubmit}>
    <div className='log-heading-div'>
            <label className='log-label'>
                LOGIN
            </label>
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div className='logdiv'>
            <label className='log-label'>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            {errors.email && <span className='log-error'>{errors.email}</span>}
        </div>
        <div className='logdiv'>
        <br></br>
            <label className='log-label'>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            {errors.password && <span className='log-error'>{errors.password}</span>}
        </div>
        {loginErrors && <span>{loginErrors}</span>}
        <br />
        <button className='login-button' type="submit">Login</button>
        <span className='below-login' >New User? Register here </span>
        <span className='below-login'>OR </span>
        <span className='below-login'>Forgot Password?</span>
    </form>
    </div>
   
  )
    }

export default Login
