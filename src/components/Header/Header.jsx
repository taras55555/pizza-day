import { useContext } from 'react';
import './Header.css';
import FromSearchOrder from '../Form/FromSearchOrder';
import { Link } from 'react-router-dom';
import { UserNameContext } from '../../contexts/UserName';

const Header = () => {
    const { userName } = useContext(UserNameContext);
    return (
        <header className="header">
            <Link className='logo' href="/" >Pizza Day</Link>
            <FromSearchOrder />
            <nav className='nav-bar'>
                <Link to={`menu`} className='nav-bar-button'>MENU</Link>
                {userName
                    ? (<div className='nav-bar-button'>{userName}</div>)
                    : (<Link to={`auth`} className='nav-bar-button'>LOGIN</Link>)}
            </nav>
        </header >
    )
}

export default Header;