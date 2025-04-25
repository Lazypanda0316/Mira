import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { Carousel } from './pages/carousel/Carousel';
import { BestSelling } from './pages/bestSelling/BestSelling';
import Catering from './pages/catering/Catering';


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
        <Routes>
        <Route path='/header' element={<Header />}/>

        <Route path='/home' element={<Home/>}/>
        <Route path='/carou' element={<Carousel/>}/>
        <Route path='/best-selling' element={<BestSelling/>} />
        <Route path='/cater' element={<Catering/>}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
