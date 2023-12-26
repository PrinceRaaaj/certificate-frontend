import React from 'react';
import { Link } from 'react-router-dom';
import { handleCopy } from "../../utils/helper"

const Certificate = ({ id, receipentName, courseName, issuerName, dateOfIssue }) => {
  return (
    <div className="container mt-5">
        <div className="card shadow  border-dark position-relative">
            <span className="position-absolute badge rounded-pill color-dark" style={{top: "5px", left: "5px"}} onClick={() => handleCopy(id)}>
                <span className="text-dark me-2">Id: {id}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-copy" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                </svg>
            </span>
            <div className="card-body">
            <h2 className="card-title">Certificate of Completion</h2>
            <p className="card-text">This is to certify that</p>
            <h3 className="card-subtitle mb-2 text-muted">{receipentName}</h3>
            <p className="card-text">has successfully completed the course</p>
            <h4 className="card-subtitle mb-2 text-muted">{courseName}</h4>
            <p className="card-text">Issued by</p>
            <h5 className="card-subtitle mb-2 text-muted">{issuerName}</h5>
            <p className="card-text">on {dateOfIssue}</p>
            </div>
        </div>
    </div>
  );
};

export default Certificate;
