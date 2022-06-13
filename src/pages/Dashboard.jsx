import useAuth from '../hooks/useAuth'

function Dashboard() {
    const {token} = useAuth()

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Token : {token}</p>
        </div>
    )
}

export default Dashboard