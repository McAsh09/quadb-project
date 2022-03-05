import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import CardList from './components/CardList';
import Summary from './components/Summary';
import Book from './components/Book';

function App() {
  const [data,setData] = useState([]);

  const fetchData = () =>{
    fetch("https://api.tvmaze.com/search/shows?q=all")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
  }

  useEffect(()=> fetchData(), []);

  return (
    <div className="App">      
    <Routes>
        <Route exact path="/" element={<CardList data={data} />} />
        <Route path="/summary/:id" element={<Summary data={data} />} />  
        <Route path="/book/:id" element={<Book data={data}/>} />       
    </Routes>
    </div>
  );
}

export default App;
