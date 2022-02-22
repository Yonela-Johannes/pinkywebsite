import React, {useState} from 'react';
import Validation from './validation';
import {NavLink} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { TiSocialFacebookCircular } from "react-icons/ti";
import logo from '../../img/logopinky.png';
import bgImage from '../../img/60.png';
import './styles.css';

import { client } from '../../client';

export default function SignIn() {
    const navigate = useNavigate()


    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        const { name, googleId, imageUrl, email, admin } = response.profileObj;
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            admin: admin,
            image: imageUrl,
            email: email,
        }

        client.createIfNotExists(doc)
        .then(() => {
            navigate('/', { replace: true })
        })
    }

  return (
    <div className='form-container'>
        <div className='app-wrapper'>
            <div>
                <img src={logo} className='logo' alt="" />
            </div>
            <div>
                <p className='loginTitle'>Sign In</p>
            </div>
            <div className='loginWrapper'>
                <GoogleLogin
                    // clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                    clientId= '1012340695541-l7j2gt5f7pcjsq2kf7ar6oigmoqmiqum.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <div 
                            type='button' 
                            className='loginButton google' 
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            >
                            <FcGoogle /><p>Sign in with Google</p>
                        </div>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy='single_host_origin'
                />
            </div>
        </div>
    </div>
  )
}
