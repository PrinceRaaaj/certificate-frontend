import React, { useState } from 'react'
import { certificateValidation } from '../../validations/validations'
import { BASEURL, addCertificates } from '../../utils/apiURL'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddCertificate = () => {

    const navigate = useNavigate()

    const [certificate, setCertificate] = useState({})
    const [certificateErr, setCertificateErr] = useState({})

    const handleChange = e => setCertificate({...certificate, [e.target.name]: e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        const validation = certificateValidation(certificate)
        if(validation?.error){
            setCertificateErr(validation?.errObj)
        } else {
            addCertificate(certificate)
        }
    }

    const addCertificate = async () => {
        try{
            const res = await axios.post(BASEURL + addCertificates, certificate)
            if(res?.data?.id){
                navigate("/")
                toast.success("Certificate Added: " + res?.data?.id,  {
                    position: "top-right",
                    autoClose: 2000
                })
            }
        } catch(err){
            console.log(err)
        }
    }

  return (
    <>
        <div className="d-flex justify-content-center mb-5">
            <span className="h1">Add Certificates</span>
        </div>

        <div className="d-flex justify-content-center mb-5 ">
            <form className="w-100 card shadow" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="receipentName"  value={certificate?.receipentName} onChange={handleChange} className={`form-control mb-3 ${certificateErr?.receipentName ? " border-danger ": ""}`} placeholder="Receipent Name" />
                </div>
                <div className="form-group">
                    <input type="text" name="courseName"  value={certificate?.courseName} onChange={handleChange} className={`form-control mb-3 ${certificateErr?.courseName ? " border-danger ": ""}`} placeholder="Course Name" />
                </div>
                <div className="form-group">
                    <input type="text" name="issuerName"  value={certificate?.issuerName} onChange={handleChange} className={`form-control mb-3 ${certificateErr?.issuerName ? " border-danger ": ""}`} placeholder="Issuer Name" />
                </div>
                <div className="form-group">
                    <input type="date" name="dateOfIssue"  value={certificate?.dateOfIssue} onChange={handleChange} className={`form-control mb-3 ${certificateErr?.dateOfIssue ? " border-danger ": ""}`} placeholder="Date Of Issue" />
                </div>
                <button type="submit" className="btn btn-warning">Submit</button>

                <hr />

                <button type="button" onClick={() => navigate(-1)} className="btn btn-primary">Back</button>

            </form>
            
        </div>
    </>
    
  )
}

export default AddCertificate
