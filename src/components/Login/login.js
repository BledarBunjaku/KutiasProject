import React from 'react'
import './login.css'
import Logo from '../Images/header-logo.png'
import { Link } from "react-router-dom";


const Login = ({ userState }) => {

    const [info, setInfo] = userState;

    console.log(info)

    const emailHandleChange = (e) => {
        let newObj = { ...info }
        newObj.name = e.target.value
        setInfo({ ...newObj })
    }
    const passwordHandleChange = (e) => {
        let newObj = { ...info }
        newObj.password = e.target.value
        setInfo({ ...newObj })
    }
    return (
        <div className='container-login'>
            <main>
                <div className='logo'><img src={Logo} alt='img'></img></div>
                <article>
                    <div className='form-container'>
                        <div className='form-name'>
                            <div>Log In</div>
                        </div>
                        <div className='form-content'>
                            <form>
                                <input className='login__email' onChange={emailHandleChange} value={info.name} type="text" name="email" placeholder="Write Your Email" />
                                <input className='login__password' onChange={passwordHandleChange} value={info.password} type="password" name="password" placeholder="Your last name.." />
                                <div className='submit-btn'>
                                    <Link to='/home'  >LOG IN</Link>
                                </div>

                                <div className='forget-password'>
                                    <a href='google.com' target='_blank'>forget password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}
export default Login
