import axios from 'axios'
import { createContext, useCallback, useEffect, useRef, useState } from "react";

const AuthContext = createContext()

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const parseTokenExpiry = (token)=>{
    const { exp } = JSON.parse(atob(token.split(".")[1]))
    return exp * 1000 - Date.now() - 60_000
}

export function AuthProvider({children}) {
    const [user, setUser] = useState()
    const [accessToken, setAccessToken] = useState()
    const [loading, setLoading] = useState(true)
    const timeRef = useRef()
    const refreshRef = useRef()

    const clearSession = useCallback(()=>{
        setUser(null)
        setAccessToken(null)
        clearTimeout(timeRef.current)
    }, [])

    const setSession = useCallback((token, userData)=>{
        setUser(userData)
        setAccessToken(token)
        timeRef.current = setTimeout(()=>refreshRef.current?.(), parseTokenExpiry(token))
    }, [])

    const refresh = useCallback( async ()=>{
        try{
            const res = await axios.post(`${BACKEND_URL}/user/token`, null, { withCredentials: true })
            setSession(res.data.accessToken, res.data.user)
            return res.data.accessToken
        }
        catch{
            clearSession()
            return null
        }
    }, [clearSession, setSession])

    useEffect(()=>{
        refreshRef.current = refresh
    }, [refresh])

    const login = useCallback( async (username, password)=>{
        const data = {username, password}
        const res = await axios.post(`${BACKEND_URL}/user/login`, data, { withCredentials: true })
        setSession(res.data.accessToken, res.data.user)
    }, [setSession])

    const logout = useCallback( async () =>{
        try{
            await axios.post(`${BACKEND_URL}/user/logout`, null, { withCredentials: true })
        }
        catch(e){
            console.error(e)
        }
        finally{
            clearSession()
        }
    }, [clearSession])

    useEffect(()=>{
        refreshRef.current().finally(()=> setLoading(false))
        return () => clearTimeout(timeRef.current)
    }, [])

    return (
        <AuthContext.Provider value={{user, accessToken, isLoggedIn: !!accessToken, loading, setSession, clearSession, login, logout, refresh}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext