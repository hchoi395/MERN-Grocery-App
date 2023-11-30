import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Header from './pages/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='list' element={<List />} />
      </Routes>
    </div>
  )
}

export default App;