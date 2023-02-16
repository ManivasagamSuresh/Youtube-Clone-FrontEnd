import './App.css';
import Menu from './Components/Menu/Menu.js';
import Navbar from './Components/NavBar/Navbar.js';
import Home from './Components/Home/Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './Components/Video/Video';
import VideoCard from './Components/VideoCard/Videocard';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Search from './Components/Search/Search';
import io from 'socket.io-client'

// const socket = io.connect('http://localhost:5000')
const socket = io.connect('https://you-tube-clone.onrender.com/api')



function App() {
  return (
    <BrowserRouter>
    <div className='App-container'>
      
      <Menu/>
      <div className='App-Main'>
      <Navbar/>
        <div className='App-Wrapper'>
          <Routes>

            <Route path='/random' element={<Home type="randomvideos"/>} />
            <Route path='/trendvideo' element={<Home type="trendvideo"/>} />
            <Route path='/subscribedVideo' element={<Home type="subscribedVideo"/>} />
            {/* <Route path='/Search' element={<Home type='search'/>} />  */}
            <Route path='/video/:id' element={<Video socket={socket}/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/> 
            <Route path='/search' element={<Search/>}/> 
                             

          </Routes>

          
        </div>
      </div>
    
  </div>
  </BrowserRouter>
      
    
  );
}

export default App;
