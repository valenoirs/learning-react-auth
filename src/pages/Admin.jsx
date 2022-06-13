import useAuth from '../hooks/useAuth'

function Admin() {
    const {token} = useAuth()

    return (
        <div>
            <h1>Admin</h1>
            <p>Token : {token}</p>
        </div>
    )
}

export default Admin