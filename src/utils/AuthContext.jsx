import { useContext, useState, useEffect, createContext } from "react";

import {account} from '../appwriteConfig'
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({childern}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser()
    }, [])

    const loginUser = async(userInfo) => {
        setLoading(true)
        console.log('userInfo', userInfo)
        try {
           await account.createEmailPasswordSession(ID.unique(), userInfo.email, userInfo.password)
            let accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }
    const logout = async () => {
        await account.deleteSession('current')
        setUser(null)
    }
    const registerUser = async (userInfo) => {
        setLoading(true)
        try {
             await account.createEmailPasswordUser(userInfo.email, userInfo.password, userInfo.name)
            let accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/')

        }catch(error){
            console.error(error)
        }
        setLoading(false)
    }
    const checkUser = async () => {
        try {
            let accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }
    

    const contextData = {
        user, 
        loginUser,
        logout,
        registerUser,
        checkUser
    }
    return(
   <AuthContext.Provider value={contextData}>
    {loading ? <p>loading....</p> : childern }
   </AuthContext.Provider>
      )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {return useContext(AuthContext)}
export default AuthContext