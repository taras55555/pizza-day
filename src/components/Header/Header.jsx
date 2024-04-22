import './Header.css';
import Input from "../Input/Input";

const Header = () =>
    <header className="header">
        <a className='logo' href="/" >Pizza Day</a>
        <form>
            <Input type="text" placeholder="Search for the order #" />
        </form>
    </header>

export default Header;