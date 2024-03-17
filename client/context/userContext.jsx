import axios from 'axios'
import {createContext, useEffect, useState} from 'react'

export const UserContext = createContext({})

export function UserContextProvider({children}){

    const [user, setUser] = useState(null) 
    const [isAuthenticated, setIsAuthenticated] = useState(false) 

    useEffect(() =>{
            axios.get('/profile').then(({data}) =>{ 
            if(data){
                setUser(data)
                setIsAuthenticated(true)
            }else{
                setIsAuthenticated(false) 
            }}).catch(error =>{
                    console.error('failed to fetch user profile', error)
                    setIsAuthenticated(false)
            }) 
    }, [])

    return (

        <UserContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
            {children}
        </UserContext.Provider>

    )
}

