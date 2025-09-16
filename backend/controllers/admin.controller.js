




// API for adding doctors
const addDoctor = async (req, res)=>{
    try {
        const {name, email, password, speciality, degree, experience, about, fee, address} = req.body
    } catch (error) {
        
    }
} 

export {addDoctor}