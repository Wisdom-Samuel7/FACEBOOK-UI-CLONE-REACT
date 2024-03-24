import Signup from './component/signup';
import Home from './component/home';

import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
         <div className="App">
          
          <Routes>

            <Route path='/signup' Component={Signup}/>
            <Route path='/' Component={Home}/>
            
          </Routes>
          
         </div>
    </BrowserRouter>
  
  );
}

export default App;
