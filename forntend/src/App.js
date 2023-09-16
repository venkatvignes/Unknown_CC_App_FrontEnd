import React, { useState} from 'react'
import {Row,Col,Nav,Navbar} from 'react-bootstrap'
import rcbLogo from '../src/Images/rcb-logo-new.jpeg';
import Carosel from './Component/carosel/carosel';
import ContactUs from './Component/contactUs/ContactUs';
import Home from './Component/Home/home';
import TeamPlayers from './Component/TeamPlayer/teamplayers';
// import useSound from 'use-sound';
import Music from './BGMusic/BgMusic.mp3'

function App() {
const [page,setPage]=useState("home");



const playAudio = (params)=> { 

  var x = document.getElementById("myAudio"); 
 
  if(params !== 0){
    x.play(); 
  }else{
    x.pause(); 
  }
 
} 

const setupPage = ()=>{
  if(page === "home"){
return <Home/>
  }else if(page === "Photos"){
    return (<>
      <Row className='m-0 justify-content-center'>
        <Col xl="7">
        <Carosel/>
      </Col></Row>
      </>

    ) 
      }else if(page === "Team"){
        return <TeamPlayers />
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
      <Row className="m-0 p-4" style={{backgroundColor:"#000000"}}>
        <Col  className="pt-1 p-0" xl="1">
          <img width='120' height='100' src={rcbLogo} alt='eee'/>
          </Col>
        <Col className="p-0 px-3" xl="11">
          <Row className='m-0 pt-1 pb-3'>
          <Col className="p-0 " xl="12"
          ><h2 className="fw-bold" style={{fontFamily: "cursive",color: '#efb428'}}>UNKNOWN CRICKET CLUB</h2></Col>
           
          </Row>
          <Row className='m-0 '>
           <Col className='p-0' xl='12'>
           <Navbar className="d-block" bg="none" >
          <Nav className='justify-content-between '>
            <Nav.Link  onClick={()=>{
              setPage("home")
              playAudio(0)
            }} className="bg-link pl-0" >HOME</Nav.Link>
            
            <Nav.Link onClick={()=>{
              setPage("Photos")
              playAudio(1)
            }} className="bg-link bg-link" >PHOTOS</Nav.Link>
            <Nav.Link onClick={()=>{
              setPage("Team")
              playAudio(1)
            }}className="bg-link" >TEAM</Nav.Link>
            <Nav.Link onClick={()=>{
              setPage("ContactUs")
              playAudio(0)
            }} className="bg-link " >ContactUs</Nav.Link>
            
          </Nav>
     
     
    </Navbar>
           </Col>
          </Row>
          </Col>
      </Row>
      <Row className='m-0 justify-content-center '>
        <Col xl="12" className='p-0'>
        <audio id="myAudio">
              <source src={Music}/>
         </audio>
        {setupPage()}
        </Col>
    </Row>
    </div>
  )
}

export default App
