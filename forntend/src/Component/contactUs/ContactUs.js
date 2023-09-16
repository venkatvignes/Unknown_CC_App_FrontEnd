import React, { useEffect, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Card, Modal,Button,Form } from 'react-bootstrap';

function ContactUs() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [nameerror, setNameError] = useState("")
    const [ageerror, setAgeError] = useState("")
    const [emailerror, setEmailError] = useState("")
    const [mobileerror, setMobileError] = useState("")
    const [boolState,setBoolState] = useState(false)
    const[show,setShow]=useState(false)
    const[msgg,setMsgg]=useState("")



useEffect(() => {
  var json ={
    name:name,
    age:age,
    emailId:email,
    mobileNo:mobile,

}
  if(boolState === true){
insertUser(json)
 }
}, [boolState,age,email,name,mobile])

useEffect(() => {
  if(msgg !== "" && msgg !== undefined){
   setShow(true)
  }

}, [msgg])


    const handleClose =()=>{
      setBoolState(false)
      setShow(false)
      setName("")
      setAge("")
      setEmail("")
      setMobile("")
    }
    
    const handleSubmit = (event) =>{
    event.preventDefault();
    if(name === ""){
      setNameError("Name is Required")
}else if(age === "" ){
  setAgeError("Age is Required")
}else if(age.length !== 2 ){
    setAgeError("your age is between 10 to 50")
}else if(email === ""){
    setEmailError("Email is Required")
}else if(mobile === "" || mobile === undefined){
    setMobileError("Mobile No is Required")
}else{
    setBoolState(true)
    
}

}

const insertUser =  (json)=>{
  setBoolState(false)
  fetch("https://unknowncc-backend.onrender.com/users/add", {
  method: "POST",
  body: JSON.stringify(json),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}).then((response) => response.json())
.then((msg) => (setMsgg(msg)))
}


  return (
    <div>
        <Card>
      <Card.Header className='text-light bg-danger'>Contact US</Card.Header>
      <Card.Body>
      <Form onSubmit={(e)=>{
handleSubmit(e)
      }}>
    <Form.Group className="mb-1" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{
             setEmailError("")
             setMobileError("")
             setAgeError("")
             setNameError("")
            setName(e.target.value)}} placeholder="Enter Name" />
             <div style={{height: "5vh"}}>{nameerror !== "" &&  nameerror !== undefined ? <div  className='small text-danger'>{nameerror}*</div> : <></>}</div>

      </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} maxLength={2} onChange={(e)=>{setAge(e.target.value)
         setEmailError("")
         setMobileError("")
         setAgeError("")
         setNameError("")}} type="number" placeholder="Enter Age" />
               <div style={{height: "5vh"}}>{ageerror !== "" &&  ageerror !== undefined ? <div  className='small text-danger'>{ageerror}*</div> : <></>}</div>

      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)
        setEmailError("")
        setMobileError("")
        setAgeError("")
        setNameError("")}} type="email" placeholder="Enter email" />
               <div style={{height: "5vh"}}>{emailerror !== "" &&  emailerror !== undefined ? <div  className='small text-danger'>{emailerror}*</div> : <></>}</div>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobile">
      <Form.Label>Enter Mobile Number</Form.Label>
      <PhoneInput
      defaultCountry="IN"
      placeholder="Enter Mobile number"
      value={mobile}
      
      onChange={(e)=>{
        setMobile(e) 
        setEmailError("")
        setMobileError("")
        setAgeError("")
        setNameError("")}}/>
       <div style={{height: "5vh"}}>{mobileerror !== "" &&  mobileerror !== undefined ? <div  className='small text-danger'>{mobileerror}*</div> : <></>}</div>
      </Form.Group>
            <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
    {msgg !== "" && msgg !== undefined ? <Modal show={show} centered >
        <Modal.Header >
          <Modal.Title>{msgg}</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>:<></>}
    </div>
  )
}

export default ContactUs