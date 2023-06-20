import React from 'react';
// import { Route } from 'react-router-dom';
import Blog from './pages/Blog'
import Home from './pages/Home';
import './App.css';


const App= () => {
  return (
    <div>
      {/* <Route path="/" component={Home} />
      <Route path="/blog/:id" component={Blog} /> */}
      <Home/>
    
    </div>
  );
};

export default App;
