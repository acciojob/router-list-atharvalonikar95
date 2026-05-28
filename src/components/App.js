
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<ItemList/>}></Route>
            <Route path={`/items/:id`} element={<ItemDetail/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
