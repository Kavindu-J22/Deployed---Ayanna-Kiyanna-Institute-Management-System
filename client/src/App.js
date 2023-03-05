import React, { useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import MainPages from './components/mainpages/Pages'
import './app.css'
import { Link } from 'react-router-dom';
import GoToTop from './components/mainpages/utils/GoToTop'



function App() {

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <MainPages />
          <div className='newthinkMenu'><Link to="/Header/NewHeader"><i class="fa-solid fa-bars"></i></Link></div>
          <GoToTop />
        </div>

      </Router>
    </DataProvider>
  );
}

export default App;
