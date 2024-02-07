import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Topbar from './components/topbar/Topbar';
import RegisterPatient from './pages/registerPatient/RegisterPatient';
import RegisterVitals from './pages/registerVitals/RegisterVitals';
import ReportList from "./pages/reportList/ReportList"
import NotFoud from "./pages/notFound/NotFound"
import RegisterHWoker from './pages/HelthcareWorkerAuth/registerHWoker/RegisterHWoker';
import LoginHWoker from './pages/HelthcareWorkerAuth/loginHWoker/LoginHWoker';
function App() {
  const[patients,setPatients]=useState([])
  useEffect(() => {
    // Fetch existing patients on component mount
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };
  // routes to ensure navigation through different pages including 404 error page
  return (
    <Router>
      <Topbar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
        <Route  path='/registerPatient' element={<RegisterPatient setPatients={setPatients} patients={patients} fetchPatients={fetchPatients}/>}/>
        <Route path='/registerVitals' element={<RegisterVitals patients={patients} fetchPatients={fetchPatients} />}/>
        <Route path='/reportList' element={<ReportList/>}/>
        <Route path='/registerUser' element={<RegisterHWoker/>}/>
        <Route path='/loginUser' element={<LoginHWoker/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
