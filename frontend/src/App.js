import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;