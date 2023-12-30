import logo from './logo.svg';
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Signup />}
                    />
                    <Route
                        exact
                        path="/Signin"
                        element={<Signin />}
                    />
                </Routes>
            </BrowserRouter>
      
    </div>
   
  );
}

export default App;
