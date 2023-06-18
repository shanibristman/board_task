import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';

export default function LogIn() {

    const [Email, SetEmail] = useState();
    const [Password, SetPassword] = useState();
    const {logIn} = useContext(UserContext)

    const logInThisUser = async()=>{
        let user = {
            email : Email,
            password : Password
        }
        await logIn(user)

    }
    return (
        <form onSubmit={logInThisUser}>
            <label>
                <div>Email:</div>
                <input type="email" placeholder='email: ' onChange={e=>SetEmail(e.target.value)}></input>
            </label>
            <label>
                <div>Password:</div>
                <input type="password" placeholder='password: ' onChange={e=>SetPassword(e.target.value)}></input>
            </label>
            <button type="submit">LOGIN</button>
        </form>
  )
}
