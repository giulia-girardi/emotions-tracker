import { createContext, useEffect, useState } from "react";


const UserAuthContext = createContext();

function UserAuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    const storeToken = (token) => {
        localStorage.setItem('userAuthToken', token)
    }
    
    const storedToken = localStorage.getItem('userAuthToken')

    const authenticateUser = async() => {
        if (storedToken) {
            const response = await fetch('http://localhost:5005/verify', {
                headers: {
                    Authorization: `Bearer ${storedToken}`,
                }
            })
            const parsed = await response.json()
            setIsLoggedIn(true)
            setIsLoading(false)
            setUser(parsed)
        } else {
            setIsLoading(false);
            setIsLoggedIn(false);
            setUser(null)
        }
    }

    const removeToken = () => {
        localStorage.removeItem('userAuthToken')
    }

    const logoutUser = () => {
        removeToken();
        authenticateUser()
    }

    useEffect(() => {
        authenticateUser()
    }, [])
    

    return(
        <UserAuthContext.Provider value={{
            isLoggedIn, 
            isLoading, 
            user, 
            storeToken, 
            storedToken, 
            authenticateUser, 
            setIsLoggedIn, 
            logoutUser
        }} >
            {props.children}
        </UserAuthContext.Provider>
    )
}

export {UserAuthContext, UserAuthProviderWrapper}