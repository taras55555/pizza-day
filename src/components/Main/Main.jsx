import './Main.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

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
    const { formAttributes, formElements } = {
        formAttributes: { className: 'login-form' },
        formElements: [
            <Input type='text' placeholder='Your full name' />,
            <Button text='Login' />
        ]
    }


    return (
        <main className='content'>
            <Title />
            <SubTitle />
            <Form
                attributes={formAttributes}
                elements={formElements}
            />

        </main>
    );
}

export default Main;