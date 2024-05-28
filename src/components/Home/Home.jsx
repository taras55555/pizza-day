import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="centered-element">
            <div className="content">
                <Link className="button-link" to={`order/new`}>Landing Page</Link>
            </div>
        </div>
    )
}

export default Home;