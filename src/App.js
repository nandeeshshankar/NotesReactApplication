import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Notes from './Components/Notes';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
        <Route path="/notes" element={<Notes />} ></Route>
        <Route path="*" element={<Login />} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;