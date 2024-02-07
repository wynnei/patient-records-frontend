import React ,{useState,useEffect} from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom';
import Footer from "../../components/footer/Footer"

const PatientDetailList = ()=>{
    const navigate = useNavigate();
    const [patientReportList, setPatientReportList] = useState([])
    const [filterDate,setFilterDate] = useState("")
    useEffect(()=>{
        fetchPatientReportList()
    },[])
    const fetchPatientReportList = async()=>{
        try {
            const res = await axios.get('http://localhost:5000/api/v1/reportList')
            setPatientReportList(res.data)
        } catch (error) {
            console.error("Error fetching patient report list:",error);
        }
    }

    return(<div>
        <h5 className="display-6" style={{textAlign:"center",margin:"20px",marginBottom:"20px",fontSize:"35px"}}>Patient Report List</h5>
        <table style={{margin:"40px" }} className="table table-hover ">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>BMI Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    patientReportList.length > 0 ?(patientReportList.map((report)=>(
                        <tr key={Math.random().toString()}>
                            <td>{report.fullName}</td>
                            <td>{report.age}</td>
                            <td>{report.bmiStatus}</td>
                        </tr>)
                    )
                    )
                    :(
                        <tr colSpan="3">No Reports available</tr>
                    )
                }
            </tbody>
        </table>
        <Footer/>
    </div>)
}

export default PatientDetailList;