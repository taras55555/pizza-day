import { useRouteError, Link} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div className="centered-element" id="error-page">
                <h1>Sorry, an error occurred</h1>
                <p>
                    To return to the homepage, <Link to={`/pizza-day`}>click here</Link>.
                </p>
            </div>
        </>
    );
}