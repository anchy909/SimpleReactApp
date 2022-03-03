import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Counter from 'components/Counter';
import { Route, Routes, useRoutes, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from 'containers/SignInPage/SignInPage';
import ProjectPage from 'containers/ProjectsPage/ProjectsPage';
import Home from 'components/Home';
import News from 'components/News';
import NoMatch from 'components/NotMatch';


function App() {
  // const [ counter, setCounter ] = useState(0)
  // console.log(React.version);
  
  const handleSubmit = () => {
    console.log('Saving value')
  }
  
  // const AppWrapper = () => {
  //   let routes = useRoutes([
  //     { path: "/", element: <LoginPage /> },
  //     { path: "component2", element: <ProjectPage /> },
  //     // ...
  //   ]);
  //   return routes;
  // };

  return (
    <div className="App">
      <h1 className="has-text-centered title is-1">Welcome in the personal app</h1>
      <button onClick={handleSubmit} className="link" id="buttonClick">Click1234</button>
      {/* <Router>
        <AppWrapper/>
      </Router> */}
      {/* <h2> This is a counter app </h2>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
      <div id="counter-value" >{counter}</div>  */}
      <Counter></Counter>
      
          {/* <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/projects" element={<ProjectPage/>} />
          </Routes> */}

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
  );
}

export default App;
