
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Artists from './Components/artists';
import NotFound from './Components/notFound';
import ArtistDetails from './Components/artistDetails';
import Home from './Components/home';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/artists/:id'element={<ArtistDetails/>}/>
     <Route path='/artists'element={<Artists/>}/>
     <Route path=''element={<Home/>}/>
     <Route path='/home'element={<Home/>}/>
     
     
     <Route path='*'element={<NotFound/>}/>

     </Routes>
     
     </BrowserRouter>
     
      
    </div>
  );
}

export default App;
