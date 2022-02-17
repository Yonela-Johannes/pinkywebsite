import React, {useState} from 'react'
import Validation from './validation';
import {NavLink} from 'react-router-dom'
import './styles.css'


export default function SignIn() {
    const [values, setValues ] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setValues({...values, 
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
    }
  return (
    <div className='form-container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Log In</h2>
            </div>
            <form className="form-wrapper">
                <div className='form-name'>
                    <label className='label'>Email</label>
                    <input className='input' type='email' name='email' value={values.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className='form-name'>
                    <label className='label'>Password</label>
                    <input className='input' type='password' name='password' value={values.password} onChange={handleChange} />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <button className='submit' onClick={handleSubmit}>Sign In</button>
                </div>
            </form>
            <p className='formLink'>Don't have account?
                <NavLink to='/signup'>
                    <p>Sign Up</p>
                </NavLink>
            </p>
        </div>
    </div>
  )
}
