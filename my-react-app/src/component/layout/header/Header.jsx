import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <header>
                <Link to='/'><h1>Omnix</h1></Link>
                <div className='bt'>
                    <Link to='/'>Home</Link>
                    <Link to='/Catalogue'>Catalogue</Link>
                    <a href="#About">About</a>
                    <Link className='sign-in' to='/signin'>Sign in</Link>
                </div>
            </header>
        </>
    )
}

export default Header