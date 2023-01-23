import './App.css';
import Menu from './Components/Menu/Menu.js';
import Navbar from './Components/NavBar/Navbar.js';
import Home from './Components/Home/Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './Components/Video/Video';
import VideoCard from './Components/VideoCard/Videocard';




function App() {
  return (
    <BrowserRouter>
    <div className='App-container'>
      
      <Menu/>
      <div className='App-Main'>
      <Navbar/>
        <div className='App-Wrapper'>
          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/video/:id' element={<Video/>}/>
            

          </Routes>

          
        </div>
      </div>
    
  </div>
  </BrowserRouter>
      
    
  );
}

export default App;
