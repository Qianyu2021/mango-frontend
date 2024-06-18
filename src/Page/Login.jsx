import React from 'react'
import {Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='auth'>
            <div className='card'>
                <h1>Login</h1>
                <form>
                    <input required type="text" placeholder='username'/>
                    <input required type="password" placeholder='password'/>
                    <button>Login</button>            
                </form>
            </div>
        </div>
    )
}

export default Login