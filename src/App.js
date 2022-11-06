import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListProductComponent from './components/ListProductComponent';
/* import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'; */
import CreateProductComponent from './components/CreateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';



function App() {
  return (

    <div>
      <Router>
       
          <div className="container">
          
            <Routes>
              <Route path = '/' exact element = {<ViewProductComponent/>}> </Route>
              <Route path = '/show-bids' element = {<ViewProductComponent/>}> </Route>
              </Routes>
          
          </div>
       
      </Router>
    </div>

  );
}

export default App;
