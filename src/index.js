import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ShareData } from "./Components/ShareData";
import { FindData } from './Components/FindData';
import { Home } from "./Components/Home";
import { CreateStudy } from './Components/CreateStudy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/share-data" element={<ShareData />}></Route>
            <Route path="/find-data" element={<FindData />}></Route>
            <Route path="/find-data/create-study" element={<CreateStudy />}></Route>
        </Routes>
      </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
