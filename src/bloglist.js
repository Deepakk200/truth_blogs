import {Link} from "react-router-dom";

const Bloglist = ({blogs,title}) => {
  
    

    return ( 

       <div >
        <h2 className="blog-preview">{title}</h2>
        <br></br>
        {  
           blogs.map((blog) =>
           
           <div className="blog-preview" key={blog.id}>
            <Link to = {`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>writter by { blog.author}</p>
            </Link>
            
           </div>
            )
        }

       </div>
     );
}
 
export default Bloglist;



