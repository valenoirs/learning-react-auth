function Home({onLogin}) {
    return (
        <div>
            <h1>Home</h1>
            <button type="button" onClick={onLogin}>
                Sign In
            </button>
        </div>
    )
}

export default Home