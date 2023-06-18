import { createContext } from "react";
import jwt_decode from 'jwt-decode';



export const UserContext = createContext();

export default function UserContextProvider(props) {

    const logIn = async(user) =>{

            let res = await fetch(`http://localhost:5008/api/users/logIn`, 
            {
              method: 'POST',
              body: JSON.stringify({email : user.email, password : user.password}),
              headers: { 'Content-Type': 'application/json' },
            });
            
            if (res.ok) {
              const { token } = await res.json();
      
              localStorage.setItem('token', token);
              return true;

            } else {
              console.error(res.status);
              return false;
            }
    }

    const isAuthenticated  = () =>{

        const token = localStorage.getItem('token');
        if(token){
          const decodedToken = jwt_decode(token);
          console.log(token)
          const currentTime = Date.now() / 1000;
          return decodedToken.exp > currentTime;
        }
        return false;
    }

    const logOut =() =>{
      localStorage.removeItem('token');
    }

    const values = {
        logIn,
        isAuthenticated,
        logOut
    }

    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}