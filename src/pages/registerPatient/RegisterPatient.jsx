import React,{useState,useEffect} from 'react';
import axios from "axios";
import moment from "moment";
import Footer from "../../components/footer/Footer"
import{useNavigate,Link} from "react-router-dom";
const RegisterPatient =({patients,fetchPatients,setPatients})=>{
    const navigate = useNavigate()
    const [inputValue,setIntputValue] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        identificationNum: "",
    })
    
    
    const handleOnChangereg = (e)=>{
        const {name,value} = e.target
        // format date
        const formattedValue = name === "dateOfBirth" ?moment(value).format("YYYY-MM-DD"):value
        setIntputValue({... inputValue,[name]:formattedValue})
    }
    const handleGenderChange = (e)=>{
        // handle gender change separately because the onChange event for a <select> does not provide the 'name' attribute like it does for an <input>
        setIntputValue({...inputValue,gender:e.target.value})
    }
    const handleSubmitreg = async(e)=>{
        // prevent default page reload
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:5000/api/v1/register",inputValue);
            console.log(res.data);
            setPatients([...patients,res.data
            ])
            // set all fields to empty
            setIntputValue({firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            identificationNum: "",})
            navigate('/registerVitals')
        } catch (error) {
            console.error("Error",error)
        }
    }



    return (<div className='patientDetails'>
        <p className='loginText ' style={{textAlign:"center",margin:"20px",marginBottom:"20px",fontSize:"35px"}}>Register patient</p>
        <form className='row d-flex flex-column align-items-center align-middle ' onSubmit={handleSubmitreg}>
        <div className='col-6 mb-3'>
        <label style={{fontSize:"20px"}} className='form-label'  htmlFor="identificationNum">Patient Number</label>
            <input className='form-control form-control-lg' name='identificationNum' placeholder='patient number' type="text" value={inputValue.identificationNum} onChange={handleOnChangereg}/>
            </div>
            <div className='col-6 mb-3'>
            <label style={{fontSize:"20px"}} className='form-label'  htmlFor="firstName">First Name</label>
            <input className='form-control form-control-lg' name='firstName' placeholder='first name' type="text" value={inputValue.firstName} onChange={handleOnChangereg} />
            </div>
            <div className='col-6 mb-3'>
            <label style={{fontSize:"20px"}} className='form-label'  htmlFor="lastName">Last Name</label>
            <input className='form-control form-control-lg' name='lastName' placeholder='last name' type="text" value={inputValue.lastName} onChange={handleOnChangereg} />
            </div>
            <div className='col-6 mb-3'>
            <label style={{fontSize:"20px"}} className='form-label'  htmlFor="dateOfBirth">Date of Birth</label>
            <input className='form-control form-control-lg' name='dateOfBirth' placeholder='Date of Birth' type="date" value={inputValue.dateOfBirth} onChange={handleOnChangereg}  />
            </div>
            <div className='col-6 mb-3'>
            <label style={{fontSize:"20px"}} className='form-label'  htmlFor="">Select Gender
            <select value={inputValue.gender} onChange={handleGenderChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </label>
            </div>
            <div className='col-6 d-grid' style={{marginBottom:"10px"}}>{inputValue.firstName && inputValue.lastName && inputValue.dateOfBirth && inputValue.gender &&(<button className='btn btn-lg btn-primary' type='submit'><Link className="link" to={"/registerVitals"}>Submit</Link></button>)}</div>
            
        </form>
        <Footer/>
    </div>

    )
}


export default RegisterPatient;