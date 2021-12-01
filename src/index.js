import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Meals from './components/Meals/Meals';
import AddMeal from './components/AddMeal/AddMeal';
import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="meals" element={<Meals/>}/>
              <Route path="add-meal" element={<AddMeal/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
