
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
const App = () => {
      const items = [
        {
            id: 1,
            name: "Item 1",
            description: "Description for Item 1",
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2",
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3",
        },
    ];
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<ItemList items={items}/>}></Route>
            <Route path={`/items/:id`} element={<ItemDetail items={items} />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
