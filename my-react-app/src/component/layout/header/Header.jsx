import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import logo from '../../../assets/logo.png'
function Header() {
    return (
        <>
            <header>
                <div className='logo-container'><img src={logo} alt="omnix" className='logo'/></div>
                <div className='bt'>
                    <NavLink className='header_nav' to='/'>Home</NavLink>
                    <NavLink className='header_nav' to='/CustomProject'>Custom</NavLink>
                    <NavLink className='header_nav' to='/Catalog'>Catalog</NavLink>
                    <a className='header_nav' href="#About">About</a>
                </div>
            </header>
        </>
    )
}

export default Header