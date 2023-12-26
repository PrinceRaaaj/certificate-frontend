import React, { useState } from 'react'
import { certificateVerifyValidation } from '../../validations/validations'
import { BASEURL, verifyCertificates } from '../../utils/apiURL'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Certificate from '../../components/Certificate/Certificate'

const VerifyCertificate = () => {
    const navigate = useNavigate()
    
    const [certificate, setCertificate] = useState()
    const [certificateErr, setCertificateErr] = useState({})

    const handleChange = e => setCertificate({...certificate, [e.target.name]: e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        const validation = certificateVerifyValidation(certificate)
        if(validation?.error){
            setCertificateErr(validation?.errObj)
        } else {
            verifyCertificate(certificate)
        }
    }

    const verifyCertificate = async () => {
        try{
            const res = await axios.get(BASEURL + verifyCertificates + "/" + certificate?.id)
            if(res?.data?.data){
                toast.success("Certificate Verified: " + res?.data?.id,  {
                    position: "top-right",
                    autoClose: 2000
                })
                setCertificate(res?.data?.data)
            } else {
                toast.error("ID Not Found",  {
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
                <span className="h1">Verify Certificate</span>
            </div>

            <div className="d-flex justify-content-center ">
                <form className="w-100 card shadow" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="id" onChange={handleChange} className={`form-control mb-3 ${certificateErr?.id ? " border-danger ": ""}`} placeholder="Certificate ID" />
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>

                    <hr />

                    <button type="button" onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
                </form>
            </div> 

            <div className="row justify-content-center">
            {
                certificate?.id && certificate["Receipent Name"]
                ?
                <Certificate
                    key={certificate?.id}
                    id={certificate?.id}
                    receipentName={certificate["Receipent Name"]}
                    courseName={certificate["Course Name"]}
                    issuerName={certificate["Issuer Name"]}
                    dateOfIssue={certificate["Date Of Issue"]}
                />
                :
                ""
            }
            </div>
        </>
    )
}

export default VerifyCertificate
