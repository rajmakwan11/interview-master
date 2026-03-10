import { AuthContext } from "../auth.context.jsx";
import { useContext, useEffect } from "react";
import { login, register, logout, getMe } from "../services/auth.api.js";

export const useAuth = ()=>{

    const context = useContext(AuthContext);
    const {loading, setLoading, user, setUser} = context;

    const handleLogin = async ({email, password})=>{
        
        setLoading(true);
        try{
            const data = await login({email,password})
            setUser(data.user)
        }
        catch(err){
        }
        finally{
            setLoading(false)
        }
    }

    const handleRegister = async ({username, email, password})=>{
        setLoading(true);
        try{
            const data = await register({username, email, password})
            setUser(data.user)
        }
        catch(err){
        }
        finally{
            setLoading(false)
        }
    }

    const handleLogout = async ()=>{
        setLoading(true);
        try{
            const data = await logout()
            setUser(null)
        }
        catch(err){
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        const getAndSetUser = async()=>{
            try{
                const data = await getMe()
                setUser(data.user)
            }
            catch(err){
            }
            finally{
                setLoading(false)
            }
        }
        getAndSetUser()
    },[])

    // const handleGetMe = async ()=>{
    //     setLoading(true);
    //     await getMe();
    //     setLoading(false)
    // }
    
    return {loading,user,handleLogin,handleRegister,handleLogout}
}