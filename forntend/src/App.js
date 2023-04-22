import React, { useState } from 'react'
import {Row,Col,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import rcbLogo from '../src/Images/rcb-logo-new.jpeg';
import Carosel from './Component/carosel/carosel';
import ContactUs from './Component/contactUs/ContactUs';
import Home from './Component/Home/home';


function App() {
const [page,setPage]=useState("home")
const setupPage = ()=>{
  if(page === "home"){
return <Home/>
  }else if(page === "Photos"){
    return <Carosel/>
      }else if(page === "Team"){
        return <div className='fw-bold content'><i>Will Update Soon.....</i></div>
          }else if(page === "ContactUs"){
    return (<>
    <Row className='m-0 justify-content-center'>
      <Col xl="7">
    <ContactUs/>
    </Col></Row>
    </>
    )
      }
}
  return (
    <div>
      <Row className="m-0 px-4" style={{backgroundColor:"#000000"}}>
        <Col  className="text-center pt-1 p-0" xl="1">
          <img width='120' height='100' src={rcbLogo} alt='eee'/>
          <span className='text-white fw-bold small'>#MAKE HISTORY</span></Col>
        <Col className="p-0 px-3" xl="11">
          <Row className='m-0 pt-1 pb-3'>
          <Col className="p-0 text-center" xl="9"><h2 class="fw-bold text-light" style={{fontFamily: "fangsong"}}>UNKNOWN CRICKET CLUB</h2></Col>
            <Col  className="p-0" xl="3">internet icons</Col>
          </Row>
          <Row className='m-0 '>
           <Col className='p-0' xl='12'>
           <Navbar className="d-block" bg="none" >
          <Nav className='justify-content-between '>
            <Nav.Link  onClick={()=>{
              setPage("home")
            }} className="bg-link pl-0" >HOME</Nav.Link>
            
            <Nav.Link onClick={()=>{
              setPage("Photos")
            }} className="bg-link px-4 bg-link" >PHOTOS</Nav.Link>
            <Nav.Link onClick={()=>{
              setPage("Team")
            }}className="bg-link px-4" >TEAM</Nav.Link>
            <Nav.Link onClick={()=>{
              setPage("ContactUs")
            }} className="bg-link px-4" >ContactUs</Nav.Link>
            
          </Nav>
     
     
    </Navbar>
           </Col>
          </Row>
          </Col>
      </Row>
      <Row className='m-0 justify-content-center '>
        <Col xl="12" className='mt-3 '>
        {setupPage()}
        </Col>
      <Col></Col></Row>
    </div>
  )
}

export default App
