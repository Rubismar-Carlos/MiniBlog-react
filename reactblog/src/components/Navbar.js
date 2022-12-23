import { NavLink } from 'react-router-dom'

import { useAuthentication } from '../hooks/useAthentication'

import { useAuthValue } from '../context/AuthContext'

import styles from './Navbar.module.css'


const Navbar = () => {

    const  { user } = useAuthValue()
    const {logout} = useAuthentication()

  return (
    <nav className={styles.navbar}>
        <NavLink to="/Home" className={styles.brand}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/Home" className={({ isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to="/Login" className={({ isActive}) => (isActive ? styles.active : '')}>Entrar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Register" className={({ isActive}) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
                    </li>
                </>
            )}
            {/* Usuario logado */}
            {user && (
                <>
                    <li>
                        <NavLink to="/posts/create" className={({ isActive}) => (isActive ? styles.active : '')}>Novo Post</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({ isActive}) => (isActive ? styles.active : '')}>Dashboard</NavLink>
                    </li>    
                </>
            )}
            <li>
                <NavLink to="/about" className={({ isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
            </li>
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul>
    </nav>
  )
}

export default Navbar