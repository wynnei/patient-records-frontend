import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./topbar.css";
import logoImg from "../../images/logo.jpg"

const Topbar =()=>{
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
    return(

<nav class="navbar navbar-expand-lg navbar-dark sticky-top " style={{backgroundColor:"gray"}}>
        <div class="container-fluid">
            <a class="navbar-brand " href=""><img src={logoImg} alt="logo" className='img-thumbnail' style={{width:"50px"}} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
                
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${isNavbarOpen ? "show":" "}`} id="navbarNav">
               <ul class="navbar-nav ms-auto">
               
               <li className='nav-item '><Link style={{color:"white",fontSize:"20px"}} className='link nav-link active' to="/">Home <span className="sr-only">(current)</span></Link></li>
            <li className='nav-item'><Link style={{color:"white",fontSize:"20px"}}  className='link nav-link' to="/registerPatient">Register Patient</Link></li>
            <li className='nav-item'><Link style={{color:"white",fontSize:"20px"}} className='link nav-link' to="/registerVitals">Vitals</Link></li>
            <li><Link style={{color:"white",fontSize:"20px"}} className='link nav-link' to="/reportList">Report List</Link></li>
            <li className='nav-item'><Link style={{color:"white",fontSize:"20px"}} className='link nav-link' to="/registerUser">SignUp</Link></li>
            <li className='nav-item'><Link style={{color:"white",fontSize:"20px"}} className='link nav-link' to="/loginUser">Login</Link></li>
               </ul>
            </div>
         </div>
      </nav>
  
    )
}
export default Topbar;