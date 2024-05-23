import {Link} from 'react-router-dom';

const Cantfound = () => {
    return (  
        <div className="Notfound-JS">
            <h2>sorry</h2>
            <p>THIS PAGE CANNOT BE FOUND</p>
            <Link to="/">Back to the Homepage.....</Link>
        </div>
    );
}
 
export default Cantfound;