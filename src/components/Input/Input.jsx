import './Input.css';

function Input({ type, placeholder, classname }) {
    return <input type={type} placeholder={placeholder} className={classname} />
}

export default Input;