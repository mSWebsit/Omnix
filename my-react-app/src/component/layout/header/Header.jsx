import { NavLink, Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <header>
                <h1 className='logo'>Omnix</h1>
                <div className='bt'>
                    <NavLink className='header_nav' to='/'>Home</NavLink>
                    <NavLink className='header_nav' to='/Catalog'>Catalog</NavLink>
                    <NavLink className='header_nav' to='/Catalog/1'>Product test</NavLink>
                    <a className='header_nav' href="#About">About</a>
                </div>
            </header>
        </>
    )
}

export default Header