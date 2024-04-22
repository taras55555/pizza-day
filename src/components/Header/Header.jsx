import './Header.css';
import Input from "../Input/Input";
import Form from "../Form/Form";

const { formAttributes, formElements } = {
    formAttributes: [],
    formElements: [
        <Input type="text" placeholder="Search for the order #" />
    ]
}

const Header = () =>
    <header className="header">
        <a className='logo' href="/" >Pizza Day</a>
        <Form
            attributes={formAttributes}
            elements={formElements}
        />
    </header>

export default Header;