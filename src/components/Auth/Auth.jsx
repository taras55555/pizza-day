import './Auth.css';
import LoginForm from '../Form/LoginForm';

function Title() {
    return <h1 className='title'>
        The best pizza.<br /><span className='text-yellow'>Straight out of the oven, straight to you.</span>
    </h1>
}

function SubTitle() {
    return <p className='sub-title'>
        👋 Welcome! Please start by telling us your name:
    </p>
}

function Main() {
    return (
        <div className="centered-element">
            <main className='content'>
                <Title />
                <SubTitle />
                <LoginForm />
            </main>
        </div>
    );
}

export default Main;