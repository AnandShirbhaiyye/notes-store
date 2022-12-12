import Home from './views/Home/Home';
import AddNote from './views/AddNote/AddNote'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnote" element={<AddNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
