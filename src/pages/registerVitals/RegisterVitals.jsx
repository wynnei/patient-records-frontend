import React,{useState,useEffect} from 'react';
import axios from "axios";
import moment from "moment";
import Footer from "../../components/footer/Footer"
import {Link,useNavigate} from "react-router-dom"
const RegisterVitals = ({patients,fetchPatients})=>{
    const navigate = useNavigate()
    const [date,setDate]=useState("");
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState(null);
    const [generalHealth,setGeneralHealth]=useState("");
    const [onDiet,setOnDiet]=useState("");
    const [TakingDrugs,setTakingDrugs]=useState("");
    const [comment,setComment]=useState("");

    const recordVitals = async(patientId)=>{
        try {
            const res = await axios.post(`http://localhost:5000/api/v1/vitals/${patientId}`,{weight,height} )
        //update patient list with the vitals
        fetchPatients()
        // display bmi from the response
        if(res.data.vitals.length > 0){
            setBmi(res.data.vitals[res.data.vitals.length - 1].bmi)
        }else{
            setBmi(null) // if there are no vitals, reset BMI to an empty string
        }
        // reset height and weight after recording vitals
        setHeight("")
        setWeight("")
        } catch (error) {
            console.error('Error recording vitals:', error);
        }
        
    }
    const handleGeneralHealthChange = (e)=>{
        setGeneralHealth(e.target.value)
    }
    const handleOndietChange = (e)=>{
        setOnDiet(e.target.value)
    }
    const handleTakingDrugsChange = (e)=>{
        setTakingDrugs(e.target.value)
    }
    const handleCommentsChange = (e)=>{
        setComment(e.target.value)
    }
    const handleOptionsSubmit = async(e)=>{
        e.preventDefault()
        try {
            // send the health information to the backend
            // await axios.post()
            setGeneralHealth("")
            setOnDiet("")
            setTakingDrugs("")
            setComment("")
        } catch (error) {
            console.error('Error submitting health information:', error);
        }
    }
    return (<div>
        <div>
        <h2 className='loginText ' style={{textAlign:"center",margin:"20px",marginBottom:"20px",fontSize:"35px"}}>Record Vitals</h2>
        
        <form  className='row d-flex flex-column align-items-center align-middle ' action="">
        <div className='col-6 mb-3'>
        <label htmlFor='weight' style={{fontSize:"20px"}} className='form-label'>Weight(kg): </label>
        <input className='form-control form-control-lg' type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className='col-6 mb-3'>
        <label htmlFor='height' style={{fontSize:"20px"}} className='form-label'>Height(cm): </label>
        <input className='form-control form-control-lg' type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div className='col-6 mb-3'>
        <select onChange={(e) => recordVitals(e.target.value)}>
          <option value="">Select Patient</option>
          {patients && patients.map((patient) => (
            <option key={patient._id} value={patient._id}>
              {patient.identificationNum}
            </option>
          ))}
        </select>
        </div>
        </form>
        
        <h4 style={{textAlign:"center",margin:"20px",marginBottom:"20px",fontSize:"28px"}}>BMI IS: {bmi}</h4>

      </div>
      {bmi !== ""  && bmi !== null && (
        <div className="bmi">
            <hr />
        <form onSubmit={handleOptionsSubmit}>
            {
                bmi !== "" && bmi<25 &&(
                    <>
                    <div className='d-flex flex-column'>
                    <label style={{margin:"10px"}} htmlFor="">General health
                    <div>
                    <div>
                        <label htmlFor="">
                        <input type="radio" value="good" checked={generalHealth === "good"} onChange={handleGeneralHealthChange} />Good
                        </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <input type="radio" value="poor" checked={generalHealth === "poor"} onChange={handleGeneralHealthChange} />poor
                            </label>
                        </div>
                        </div>
                        </label>
                        <label style={{margin:"10px"}} htmlFor="">Have you ever been on diet to loose weight
                        <div>
                    <div>
                        <label htmlFor="">
                        <input type="radio" value="yes" checked={onDiet === "yes"} onChange={handleOndietChange} />Yes
                        </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <input type="radio" value="no" checked={onDiet === "no"} onChange={handleOndietChange} />No
                            </label>
                        </div>
                        </div>
                        </label>
                        <label className='d-flex' htmlFor="comment">Health care provider comment:
                        <textarea name="comment" id="" cols="60" rows="7" value={comment} onChange={handleCommentsChange}/></label>
                        </div>
                    </>
                )
            }
            {bmi !=="" &&  bmi >= 25 && (<>
            <div className='d-flex flex-column'>
                <label style={{margin:"10px"}} htmlFor="">General health
                <div>
                    <div>
                        <label  htmlFor="">
                        <input type="radio" value="good" checked={generalHealth === "good"} onChange={handleGeneralHealthChange} />Good
                        </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <input type="radio" value="poor" checked={generalHealth === "poor"} onChange={handleGeneralHealthChange} />poor
                            </label>
                        </div>
                        </div>
                        </label>
                        <label style={{margin:"10px"}} htmlFor="">Are you currently taking any drugs
                    <div>
                        <div>
                        <label htmlFor="">
                        <input type="radio" value="yes" checked={TakingDrugs === "yes"} onChange={handleTakingDrugsChange} />Yes
                        </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <input type="radio" value="no" checked={TakingDrugs === "no"} onChange={handleTakingDrugsChange} />No
                            </label>
                        </div>
                        </div>
                        </label>
                        <label className='d-flex' htmlFor="comment">Health care provider comment:
                        <textarea name="comment" id="" cols="60" rows="7" value={comment} onChange={handleCommentsChange}/></label>
                        </div>
            </>) }
            <div style={{margin:"15px"}} className='col-1 d-grid'><button className='btn btn-lg  btn-primary ' type='submit'>Submit</button></div>
            
        </form>
        <hr />
      </div>
      )}
      <Footer/>
    </div>)
}

export default RegisterVitals;