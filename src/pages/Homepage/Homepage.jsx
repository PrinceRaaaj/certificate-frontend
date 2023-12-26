import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASEURL, getAllCertificates } from '../../utils/apiURL'
import { Link, useNavigate } from 'react-router-dom'
import Certificate from '../../components/Certificate/Certificate'

const Homepage = () => {
    const navigate = useNavigate()

    const [certificates, setCertificates] = useState([])
    const [loader, setLaoder] = useState(false)

    const getCertificates = async () => {
        try{
        setLaoder(true)
        const res = await axios.get(BASEURL + getAllCertificates)
        if(res?.data?.data){
            setCertificates(res?.data?.data)
            setLaoder(false)
        }
        } catch(err){
        console.log(err)
        setLaoder(false)
        }
    }

    useEffect(() => {
        getCertificates()
    }, [])

  return (
    <div>
        <div className="d-flex justify-content-center mb-5">
            <span className="h1">Certificates</span>
        </div>

        <div className="d-flex justify-content-center mb-5">
            <button className="mx-3 btn btn-warning" onClick={() => navigate("/add-certificate")}>Add Certificate</button>
            <button className="mx-3 btn btn-success" onClick={() => navigate("/verify-certificate")}>Verify Certificate</button>
        </div>

        <div className="row justify-content-center">
            {
            loader
            ?
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            :
            certificates?.length
            ?
            certificates?.map(certificate => (
                <Certificate
                    key={certificate?.id}
                    id={certificate?.id}
                    receipentName={certificate["Receipent Name"]}
                    courseName={certificate["Course Name"]}
                    issuerName={certificate["Issuer Name"]}
                    dateOfIssue={certificate["Date Of Issue"]}
                />
            ))
            
            :
            <span>No Certificates Yet</span>
            }
        </div>
    </div>
  )
}

export default Homepage
