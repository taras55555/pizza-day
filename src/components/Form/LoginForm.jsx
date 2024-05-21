import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import { UserNameContext } from '../../contexts/UserName';

function LoginForm() {
    const { setFullName } = useContext(UserNameContext);

    const [nameState, setNameState] = useState('')
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        nameState.trim().split(' ').length > 1
            ? (setFullName(nameState), navigate('/pizza-day/menu', { state: { fullName: nameState } }))
            : (alert(`Please enter a valid full name`));
    }

    return (
        <form className='login-form' onSubmit={handleLogin}>
            <input
                type='text'
                placeholder='Your full name'
                onChange={e => setNameState(e.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm;