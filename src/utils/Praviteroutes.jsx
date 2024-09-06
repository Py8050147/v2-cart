import { Outlet, Navigate } from "react-router-dom";
import {useAuth} from './AuthContext'

const Praviteroutes = () => {
    const {user} = useAuth()
    // const user = false

    return user ? <Outlet /> : <Navigate to='/login' />
}

export default Praviteroutes

