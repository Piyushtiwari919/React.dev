import { useRouteError } from "react-router-dom";

const Error = () =>{
    const error = useRouteError(); // Gives all error details.
    console.log(error);
    
    return(
        <div>
            <h1>Oops!!</h1>
            <br/>
            <h2>Something went wrong!!</h2>
            <br/>
            <h3>{error.status} : {error.statusText}</h3>
        </div>
    )
}

export default Error;