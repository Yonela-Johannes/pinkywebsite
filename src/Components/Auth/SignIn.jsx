import Spinner from '../../Components/Post/Feed.js/Spinner'
import { FcGoogle } from 'react-icons/fc'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import  app  from '../../firebase'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function Signin() {

    const navigate = useNavigate()
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const login = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider)
    const { refreshToken, providerData } = user;
    
    localStorage.setItem('user', JSON.stringify(providerData))
    localStorage.setItem('accessToken', JSON.stringify(refreshToken))
  };

  return (
      <div className='formContainer'>
        <div className='spinnerLoginContainer'>
          <Spinner />
        </div>
        <div>
        <div className='appWrapper'>
            </div>
            <button onClick={login} className='loginWrapper'>
               <FcGoogle fontSize={20} />
               <p className='googleText'>Sign in</p>
            </button>
        </div>
    </div>
  )
}

