import {Link} from 'react-router-dom'

const Head = () => {
  return (
    <nav className="navbar">
      <div className="title" >COLLECTIONS</div>
      <div>
        {/* <input type="text" placeholder="search"></input> */}
        {/* <button id="search-btn" ><span class="material-symbols-outlined">search</span></button> */}
      </div>
      <div className="links" >
        
        <Link id="loke" className="li" to="/" >Home</Link>
        <Link className="li" to="##">Topics</Link>
        <Link className="li" to="/newlogs">New Collection</Link>
        <Link className="li" to="slides">New slide</Link>
      </div>
    </nav>

  );


}



export default Head;


