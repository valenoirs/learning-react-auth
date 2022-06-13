import { useContext } from "react"
import AuthContext from "../context/AuthContext"

function Dashboard(props) {
    const token = useContext(AuthContext)

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Token : {token}</p>
        </div>
    )
}

export default Dashboard