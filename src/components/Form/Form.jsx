import './Form.css';

function Form({ attributes, elements }) {
    const { className } = attributes;

    const Elements = elements.map((element, index) => <element.type key={index} {...element.props} />)

    return (
        <form className={className}>
            {Elements}
        </form>)
}

export default Form;