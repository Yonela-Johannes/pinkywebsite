import React, {useState} from 'react'
import Validation from './validation';
import {NavLink} from 'react-router-dom'
import './styles.css'


export default function SignUp() {
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
    <div className='form-container top'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Create Account</h2>
            </div>
            <form className="form-wrapper">
                <div className='form-name'>
                    <label className='label'>Name</label>
                    <input className='input' type='text' name='name' value={values.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
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
                    <button className='submit' onClick={handleSubmit}>Sign Up</button>
                </div>
            </form>
            <p className='formLink'>Already have account?
                <NavLink to='/signin'>
                    <p>Sign In</p>
                </NavLink>
            </p>
        </div>
    </div>
  )
}
