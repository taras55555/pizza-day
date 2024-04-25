import './Form.css';
import Input from "../Input/Input";
import Button from '../Button/Button';

function LoginForm() {
    return (
        <form className='login-form'>
            <Input type='text' placeholder='Your full name' />
            <Button text='Login' />
        </form>
    )
}

export default LoginForm;