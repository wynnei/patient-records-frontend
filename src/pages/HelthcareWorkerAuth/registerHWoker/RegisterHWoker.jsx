import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';

const RegisterHWoker =()=>{
    const navigate = useNavigate();
    const [inputValue,setInputValue] = useState({
        userName:"",
        email:"",
        password:""
    })
    const handleOnChange =(e)=>{
        const {name,value} = e.target;
        setInputValue({...inputValue,[name]:value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/v1/registerUser",inputValue)
            console.log(res.data);
            setInputValue({...setInputValue ,userName:"",
            email:"",
            password:""})
        } catch (error) {
            console.error("Error",error)
        }
    }
    return(<div>
        <p style={{textAlign:"center",margin:"20px",marginBottom:"20px",fontSize:"35px"}}> Healthcare Worker Sign Up</p>
        <form className='row d-flex flex-column align-items-center align-middle ' onSubmit={handleSubmit}>
        <div className='col-5 mb-3'>
            <label className='form-label' style={{fontSize:"20px"}} htmlFor="userName">User Name</label>
            <input className='form-control form-control-lg' placeholder='user name' name='userName' type="text" value={inputValue.userName} onChange={handleOnChange} />
            </div>

            <div className='col-5 mb-3'>
            <label className='form-label' style={{fontSize:"20px"}} htmlFor="email">email</label>
            <input className='form-control form-control-lg' placeholder='email' name='email' type="email" value={inputValue.email} onChange={handleOnChange} />
            </div>

            <div style={{fontSize:"20px"}} className='col-5 mb-3'>
            <label className='form-label' htmlFor="password">password</label>
            <input className='form-control form-control-lg' name='password' type="password" value={inputValue.password} onChange={handleOnChange} />
            </div>
            <div className='col-5 d-grid' style={{marginBottom:"10px"}}>
            <button className='btn btn-lg btn-primary' type='submit'>Register</button>
            </div>
            
        </form>
        </div>)
}
export default RegisterHWoker