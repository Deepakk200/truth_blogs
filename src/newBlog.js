import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Newcollection = () => {
   
    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState(' ');
    const [author, setAuthor] = useState(' mario');
    const [isPending , setisPending] = useState(false);
    const history = useHistory();


   const handlesubmit = (e) =>{
       e.preventDefault();
       const blog = {title, author , body}
       console.log(blog);
       setisPending(true);
       fetch('http://localhost:8000/blogs' , {
        method :'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(blog) 
    }).then(()=>{
        console.log("new blog added ")
        setisPending(false);
        // history.go(-1);
        history.push(`/`);
    })
   }

    return ( 
        <div className="create">
            <nav>
            <h2>
                CREATE COLLECTION
            </h2>
            </nav>
            <form onSubmit = {handlesubmit} >
                <label>Collection title : </label>
                    <input  className = "hdhd" atype="text"
                    required
                    value = {title}
                    onChange = {((e) => setTitle(e.target.value))} 
                    />
                   <label>Collection body : </label>
                   <textarea
                   required
                   value={body}
                   onChange = {((e) => setBody(e.target.value))}
                   />
                   <label>Collection author: </label>
                   <select
                   value = {author}
                   onChange={((e) => setAuthor(e.target.value))}>
                    <option value="deepak">deepak</option>
                    <option value="deepak123">deepak123</option>
                   </select>
                  {!isPending && <button>ADD COLLECTION</button>}
                  {isPending && <button disabled>ADDING COLLECTION.....</button>}
                   <p> {title}</p>
                   <p> {body}</p>
                   <p> {author}</p>
            </form>
        </div>

     );
}
 
export default Newcollection;