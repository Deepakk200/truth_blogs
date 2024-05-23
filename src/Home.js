import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  
  const {data : blogs , ispending ,error }  = useFetch("http://localhost:8000/blogs");
  
    return (
  
      <div id="con">
        {error && <div>{error}</div>}
        {ispending && <h2>loading...</h2>}
   
        {blogs && <h1 className="tent">HOME PAGE</h1>}
        {blogs && <Bloglist blogs={blogs} title="ALL COLLECTIONS " />}
        <br></br>
      </div>
    ); 
  }
  export default Home;