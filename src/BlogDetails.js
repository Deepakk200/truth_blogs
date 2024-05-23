import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


const BlogDetails = () => {

  const {id} = useParams();
  const history = useHistory();

  const {data : blogs , ispending ,error} = useFetch("http://localhost:8000/blogs/" + id);
  const handleclick = () =>{
    fetch('http://localhost:8000/blogs/' +blogs.id,{
      method: 'DELETE'
    }).then(() =>
    {
      history.push('/');
    })
  }
    return (  

        <div className="blog-previews">
          {error &&<div> {error}</div>}
          {ispending && <div>loading....</div>}
         {blogs && (
          <article>
               <div className="block">
                  <p>  <h2>{ blogs.title}</h2> </p>
                  <p> written by  {blogs.author}</p>
                </div>  
            <div>
                {blogs.body}
            </div>
            <button onClick={handleclick}>
              DELETE 
            </button>
          </article>
          )}
        </div>
    );
}
 
export default BlogDetails;