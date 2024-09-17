import { React} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';
import Home  from "./Pages/Home";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Create from './Pages/Create';
import ArticleContent from './Pages/ArticleContent'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/ArticleContent' element={<ArticleContent/>} />
      </Routes>
    </Router>
  )
}

export default App
