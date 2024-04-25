import './Header.css';
import FromSearchOrder from '../Form/FromSearchOrder';

const Header = () =>
    <header className="header">
        <a className='logo' href="/" >Pizza Day</a>
        <FromSearchOrder />
        <div>TARAS</div>
    </header>

export default Header;