import React, { useState } from 'react'
 import '../pages/Register.css'
 import logo from '../img/wordmark-logo-name-only.png'
const Register = ({onRegistration}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address:''
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };
    const allUsers=[];

    const validateForm = () => {
        const newError = {};
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.name) newError.name = 'Name is required';

        if (!formData.email) { newError.email = 'Email is Required' }
        else if (!emailRegex.test(formData.email)) { newError.email = 'Invalid email address' }
        if (!formData.password) { newError.password = 'Password is Required' }
        else if (!passwordRegex.test(formData.password)) { newError.password = 'Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long' }
        setErrors(newError);
        return Object.keys(newError).length === 0;
    };
    

const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    localStorage.setItem('userData', JSON.stringify(formData));
    onRegistration();
    setFormData({ name: '',
        email: '',
        password: ''});
    setErrors({});
    
}
return (
    <div className='registerContainer regdiv'>
    <form className='registerForm' onSubmit={handleSubmit}>
    <div className='reg-heading-div'>
            <label className='reg-label'>
                Register Here!!!
            </label>
        </div>
        <div className='regdiv'>
            <label className='reg-label'>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            {errors.name && <span className='reg-error'>{errors.name}</span>}
        </div>
        <br></br>
        <div  className='regdiv'>
            <label className='reg-label'>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            {errors.email && <span className='reg-error'>{errors.email}</span>}
        </div>
        <div  className='regdiv'>
        <br></br>
            <label className='reg-label'>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            {errors.password && <span className='reg-error'>{errors.password}</span>}
        </div>
        <div  className='regdiv'>
        <br></br>
            <label className='reg-label'>
                Address:
            </label>
            <textarea  name="address" rows="3" cols="59" value={formData.address} onChange={handleChange} /> 
           
        </div>
        <br></br>
        <button type="submit" className='register-button'>Register</button>
    </form>
    </div>

);
};

export default Register
