import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';


export default function LogIn() {

    const history = useHistory()

    const [Email, SetEmail] = useState();
    const [Password, SetPassword] = useState();
    const {logIn} = useContext(UserContext)

    const logInThisUser = async(e)=>{
        e.preventDefault();
        let user = {
            email : Email,
            password : Password
        }
        let flag = await logIn(user)

        if(flag) {
            history.push('/board');
        }
        else{
            alert("email or password invalid.. :(")
        }

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