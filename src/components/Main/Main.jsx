import './Main.css';
import Input from '../Input/Input';

function Title() {
    return <h1 className='title'>
        The best pizza.<br /><span className='text-yellow'>Straight out of the oven, straight to you.</span>
    </h1>
}

const SubTitle = () =>
    <p className='sub-title'>
        👋 Welcome! Please start by telling us your name:
    </p>

const LoginForm = () =>
    <form className='login-form'>
        <Input type='text' placeholder='Your full name' />
        <button>Login</button>
    </form>

function Main() {
    return (
        <main className='content'>
            <Title />
            <SubTitle />
            <LoginForm />
        </main>
    );
}

export default Main;