import { useState } from "react"
import AuthContext from "./AuthContext"
import fakeAuth from "../utils/fakeAuth"
import { useLocation, useNavigate } from "react-router-dom"

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = async () => {
        const token = await fakeAuth()
        console.log(token)
        setToken(token)

        const origin = location.state?.from?.pathname || '/dashboard'
        navigate(origin)
      }
      
      const handleLogout = () => {
        setToken(null)
        navigate('/')
      }

      const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout
      }

      return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
      )
}

export default AuthProvider