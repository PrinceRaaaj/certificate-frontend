export const certificateValidation = certificate => {
    let errObj = {}
    if(!certificate?.receipentName){
        errObj.receipentName = "Required"
    }
    if(!certificate?.courseName){
        errObj.courseName = "Required"
    }
    if(!certificate?.issuerName){
        errObj.issuerName = "Required"
    }
    if(!certificate?.dateOfIssue){
        errObj.dateOfIssue = "Required"
    }

    if(Object.keys(errObj)?.length){
        return {error: true, errObj}
    } else {
        return {error: false}
    }
}

export const certificateVerifyValidation = certificate => {
    let errObj = {}
    if(!certificate?.id){
        errObj.id = "Required"
    }

    if(Object.keys(errObj)?.length){
        return {error: true, errObj}
    } else {
        return {error: false}
    }
}