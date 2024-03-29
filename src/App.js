import logo from './logo.svg';
import React from 'react';
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Projects";
import Contact from "./routes/Contact";
import Blog from "./routes/Blog"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Project />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </>
  );
}

export default App;
