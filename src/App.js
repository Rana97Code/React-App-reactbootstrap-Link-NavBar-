import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './user/Login';
import Register from './user/Register';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Login/>} />
          </Routes>
          
          <Routes>
            <Route path="/Dashboard" element={<Dashboard/>} />
          </Routes>

          <Routes>
            <Route path="/Register" element={<Register/>} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
