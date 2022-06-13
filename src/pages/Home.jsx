import useAuth from "../hooks/useAuth"

function Home({error}) {
    const {onLogin} = useAuth()

    return (
        <div>
            <h1>Home</h1>
            {error && (
                <p>{error}</p>
            )}
            <button type="button" onClick={onLogin}>
                Sign In
            </button>
        </div>
    )
}

export default Home