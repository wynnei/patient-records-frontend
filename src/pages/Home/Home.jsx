import React, { useEffect ,useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import {ToastContainer,toast} from 'react-toastify';
import axios from 'axios';
import './Home.css'
import Footer from "../../components/footer/Footer"

const Home = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    //cookies is an object that holds cookie values, and removeCookie is a function to remove cookies. username is a state variable initialized using useState.
    const [cookies,removeCookie]= useCookies([])
    const [userName,setUserName] = useState("")
    useEffect(()=>{
        const verifyCookie = async()=>{
            try {
                    // if no token navigate to home page
            if(!cookies.token){
                navigate("/")
            }
             //it's an empty object ({}), indicating that the POST request doesn't include any data in the body.
             const res = await axios.post("http://localhost:5000/api/v1",{},{withCredentials:true})
             const {status,user} = res.data;
             setUserName(user);
             if(status){
                toast(`Hello ${user}`,{position:"top-right"})
             }
             else{
                removeCookie("token");navigate("/");
             }
            } catch (error) {
            console.log("Error in verifyCookie:",error);
            removeCookie("token");
            navigate("/")
            }
            
        };
        verifyCookie();
    },[cookies,navigate,removeCookie])
    const Logout = ()=>{
        removeCookie("token");
        navigate("/")
    }
  
    useEffect(() => {
      // Trigger animation on mount
      setVisible(true);
    }, []);
  
    return (
        <div>  
          <div className={`position-relative animation animated-text-container ${visible && 'fade-in'}`} >
        {userName && (<button style={{margin:"10px",color:"blue", background:"white"}} className=' position-absolute top-0 end-0 btn btn-secondary' onClick={Logout}>LOGOUT</button>)}
        
    
      <div >
      
        <div className="container">
        
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="content">
                <h1 style={{color:"white"}} className=" animated-text text-uppercase welcome">Welcome for healthcare services</h1>
                <h2 style={{color:"white"}}  className="animated-text text-uppercase protect">we protect and value patient data</h2>
                <div className='d-flex justify-content-center align-items-center '>
                <button className="btn btn-lg btn-light animated-text col-3"><Link className='link' to={"/loginUser"}>Login</Link></button>
                <button className="btn btn-lg btn-primary animated-text col-3 m-3"><Link className='link' to={"/registerUser"}>Register</Link></button>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    <Footer/>
      </div>

    );
  };
  
  export default Home;