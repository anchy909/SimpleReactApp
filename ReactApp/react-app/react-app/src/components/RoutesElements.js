import App from 'App';
import React, { Component } from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import News from './News';
import NoMatch from './NotMatch';

// class Home extends Component{
//     render(){
//         return(
//             <div>Home Page</div>
//         )
//     }
// }

// class News extends Component{
//     render(){
//       return(
//         <div>News Feed {this.props.location.pathname}</div>
//       )
//     }
// }

// class NoMatch extends Component{
//     render(){
//         return(
//             <div>404 page</div>
//         )
//     }
// }

class RoutesElements extends Component{
  render(){
    return(
      <div>
        <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/news" element={<News/>} />
               <Route path="/news/techdomain" element={<News/>} />
               <Route path="/unknown" component={<NoMatch/>} />
               {/* <Link to="/">Home page</Link><br/>
               <Link to="/news">News page</Link><br/>
               <Link to="/news/techdomain">News page for techdomain</Link> */}
        </Routes>
      </div>
    )
  }
}

export default RoutesElements;