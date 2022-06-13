import { useState } from "react"
import AuthContext from "./AuthContext"
import fakeAuth from "../utils/fakeAuth"

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)

    const handleLogin = async () => {
        const token = await fakeAuth()
        console.log(token)
        setToken(token)
      }
    
      const handleLogout = () => {
        setToken(null)
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