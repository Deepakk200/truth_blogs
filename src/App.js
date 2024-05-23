// import logo from './logo.svg';
import './App.css';
import Head from './Header';
import Home from './Home';
// import {Switch ,Route ,BrowserRouter as Router} from 'react-router-dom';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import  Newcollection  from './newBlog';
import BlogDetails from './BlogDetails';
import Cantfound from './cantfind';



function App() {
  return (
    <Router>
      <div>
        <div>
          <Head />
        </div>       
        <Switch>
             <Route  exact path="/">
                 <Home></Home>
             </Route>
             <Route path="/newlogs">
               < Newcollection/>
             </Route>
             <Route path = "/blogs/:id">
                <BlogDetails></BlogDetails>  
             </Route>
             <Route>
                <Cantfound/>
             </Route>
             {/* <Route path="slides">
                <SlideExample/>
             </Route> */}
                  
        </Switch>
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <NewBlog />
          </Route>
        </Switch> */}
       
      </div>
    </Router>
  );

  
}

export default App;