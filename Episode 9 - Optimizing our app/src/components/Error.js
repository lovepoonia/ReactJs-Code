import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const  error = useRouteError();
    return (
        <div>
            <div>Oops!!!!!!</div>
            <div>Page is not found</div>
            <h1>{error.status}:{error.statusText}</h1>
        </div>
        
    );
}

export default Error;