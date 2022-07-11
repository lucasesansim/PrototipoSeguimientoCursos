import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Card, Nav, NavItem } from 'react-bootstrap';
import {
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;