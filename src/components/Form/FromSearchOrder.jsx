import './Form.css';
import Input from "../Input/Input";

function FromSearchOrder() {
    return (
        <form>
            <Input classname="input-order" type="text" placeholder="Search for the order #" />
        </form>
    )
}

export default FromSearchOrder;