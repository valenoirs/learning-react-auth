import {NavLink} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Navbar() {
    const {token, onLogout} = useAuth()

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/admin'>Admin</NavLink>

            {token && (
                <button type='button' onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </nav>
    )
}

export default Navbar