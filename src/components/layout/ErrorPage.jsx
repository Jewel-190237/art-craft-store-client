import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className=" mt-28 text-center justify-center align-middle" id="error-page">
            <h1 className="text-4xl">Oops!!</h1> 
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {
                error.status === 404 && <div>
                    <h2 className="text-3xl">Page not Found</h2>
                    <h2 className="text-2xl">Go Back where you from</h2>
                    <Link to={'/'}>
                        <button className="btn btn-error rounded-xl p-4">Home</button>
                    </Link>
                </div>
            }
        </div>
    );

};

export default ErrorPage;