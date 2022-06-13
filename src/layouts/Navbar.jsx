import {NavLink} from 'react-router-dom'

function Navbar({token, onLogout}) {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>

            {token && (
                <button type='button' onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </nav>
    )
}

export default Navbar