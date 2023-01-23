import './App.css';
import Menu from './Components/Menu/Menu.js';
import Navbar from './Components/NavBar/Navbar.js';
import Home from './Components/Home/Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './Components/Video/Video';
import VideoCard from './Components/VideoCard/Videocard';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';




function App() {
  return (
    <BrowserRouter>
    <div className='App-container'>
      
      <Menu/>
      <div className='App-Main'>
      <Navbar/>
        <div className='App-Wrapper'>
          <Routes>

            <Route path='/' element={<Home type="randomvideos"/>} />
            <Route path='/trendvideo' element={<Home type="trendvideo"/>} />
            <Route path='/subscribedVideo' element={<Home type="subscribedVideo"/>} />
            <Route path='/video/:id' element={<Video/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>          

          </Routes>

          
        </div>
      </div>
    
  </div>
  </BrowserRouter>
      
    
  );
}

export default App;
