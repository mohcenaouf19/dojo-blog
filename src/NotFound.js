import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 

        <div className="not-found">
           <h2>Sorry</h2>
           <p> sorry this page does not exist </p>
           <Link to="/" > back to home page </Link>
           
        </div>
     );
}
 
export default NotFound;