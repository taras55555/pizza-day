import './Header.css';
import FromSearchOrder from '../Form/FromSearchOrder';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const fullName = location.state?.fullName;

    return (
        <header className="header">
            <a className='logo' href="/" >Pizza Day</a>
            <FromSearchOrder />
            <nav className='nav-bar'>
                <Link to={`menu`} className='nav-bar-button'>MENU</Link>
                {fullName
                    ? (<div className='nav-bar-button'>{fullName}</div>)
                    : (<Link to={`auth`} className='nav-bar-button'>LOGIN</Link>)}
            </nav>
        </header >
    )
}

export default Header;