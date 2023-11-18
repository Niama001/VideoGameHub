import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forum from "./Forum";
import PostDetails from "./PostDetails"; 
import Detail from "./Detail";



const AppRouter = () => {
    return (
        
      <Router>
        <Routes>
          <Route path="/" element={<Forum/>} />
          <Route path="/post/:postId" element={<PostDetails/>} />
          <Route path="/post/:postId" element={<Detail/>} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;
  
  