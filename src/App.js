import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login-Register/Login';
import Register from './views/Login-Register/Register';
//import Layout from './components/Layout/Layout';
import Home from './views/Home/Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;

