import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"

export const PrivateRouter = ({children}) => {

    const {logged} = useContext(AuthContext)
    const { pathname, search } = useLocation()

    localStorage.setItem('lastPath', pathname + search)

    return (logged)
        ? children
        : <Navigate to="/login"/>
}
