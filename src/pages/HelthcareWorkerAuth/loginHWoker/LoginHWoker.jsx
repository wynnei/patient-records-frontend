import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./login.css"

const LoginHWoker =()=>{
    const navigate = useNavigate()
    const [inputValue,setInputValue] = useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setInputValue({...inputValue,[name]:value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/v1/login",{...inputValue,},{withCredentials:true})
            console.log(res.data);
            if(res.data.success){
                console.log("Login Successful");
            }else{
                console.error("Login failed:" ,res.data.message)
            }
            // spread operator, which is used to create a shallow copy of the inputValue object. 
            setInputValue({...inputValue,email:"",
            password:""})
        } catch (error) {
            console.error("Error",error)
        }
    }
    return(<div className='login '>
        <div>
        <p className='loginText ' style={{textAlign:"center",margin:"20px",marginBottom:"20px",fontSize:"35px"}}>Login </p>
        <form  className='row d-flex flex-column align-items-center align-middle ' onSubmit={handleSubmit}>
            <div className='col-6 mb-3'>
            <label style={{fontSize:"20px"}} className='form-label' htmlFor="email">email</label>
            <input className='form-control form-control-lg' type="email" name='email' placeholder='email' value={inputValue.email} onChange={handleChange} />
            </div>
            
            <div className='col-6 mb-3'>
            <label style={{fontSize:"20px"}} className='form-label' htmlFor="password">password</label>
            <input className='form-control form-control-lg' type="password" name='password' value={inputValue.password} onChange={handleChange} />
            </div>
            <div className='col-6 d-grid' style={{marginBottom:"10px"}}>
            <button className='btn btn-lg btn-primary' type='submit'>Login</button>
            </div>
            
        </form>
    </div>
    </div>
    )


}

export default LoginHWoker;