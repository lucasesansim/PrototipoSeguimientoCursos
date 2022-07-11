import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

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