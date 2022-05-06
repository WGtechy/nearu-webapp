import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import LoginPage from './LoginPage';
function App() {
  return (
    <Router>
       <Routes> 
        <Route path="/" element={<Home />} />
        <Route path='/checkout' element={<Checkout />} /> 
        <Route path='/LoginPage' element={<LoginPage />} />        
      </Routes>
    </Router>
  );
}

export default App;