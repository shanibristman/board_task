import { createContext } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {

    const logIn = async(user) =>{
        try {
            let res = await fetch('http://localhost:5008/api/users/logIn', 
            {
              method: 'POST',
              body: JSON.stringify({...user}),
              headers: { 'Content-Type': 'application/json' },
            });
      
            if (res.ok) {
              const { token } = await res.json();
      
              localStorage.setItem('token', token);

            } else {
              console.error(res.status);
            }
          } catch (error) {
            console.error(error);
          }
    }

    const values = {
        logIn
    }

    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}
