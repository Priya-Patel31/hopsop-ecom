import { useAuth } from "../../../context/auth/authContext"


export const PrivateRoute = ({children}) =>{
    const {isUserloggedIn} = useAuth();
   return isUserloggedIn ? children : <Navigate to="/auth/login"/>
}