import { useRouteError } from "react-router-dom";

const Error = () => {
   
    const err = useRouteError();
    console.log(err);

    return (

        <div className="error-container">
            <h1>Oops!!!</h1>
            <h2>Something went wrong!</h2>
            <img src="https://www.shutterstock.com/image-photo/studio-portrait-pembroke-welsh-corgi-600nw-2274955933.jpg" alt="Error-mage"/>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;