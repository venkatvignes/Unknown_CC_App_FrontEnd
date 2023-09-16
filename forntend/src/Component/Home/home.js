import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import rcbLogo from '../../Images/rcb-logo-new.jpeg';

function home() {
  return (
    <div>
        <Row className='m-0 gradient  fw-bold pt-3  ' style={{ height: "78vh"}}>
        <Col className='p-0 mb-3 ' xl="12">
<Row className='content m-0'> <Col className='p-0 text-center' xl="1"> <img width='120' height='100' src={rcbLogo} 
className='point-img' alt='eee'/></Col> <Col className='p-0 mb-3 ' xl="11">
<i>Unknown Cricket Club was founded on 4th Febuary 2023 by Prithivi Raj kumar, Raj Laxmanan and Hari krishnan </i></Col> </Row>
        </Col>
        <Col className='p-0 mb-3 ' xl="12">
<Row className='content m-0'><Col className='p-0 text-center' xl="1"> 
<img width='120' height='100' src={rcbLogo} className='point-img' alt='eee'/></Col>
 <Col className='p-0 mb-3 ' xl="11">
        <i>The Primary Objective of the team is to ensure the team sprit during the cricket
                 matches across all the multiverse </i></Col></Row>

        </Col>
        <Col className='p-0 ' xl="12">
            <Row className='content m-0'><Col className='p-0 text-center' xl="1">
                 <img width='120' height='100' src={rcbLogo} className='point-img' alt='eee'/></Col>
                  <Col className='p-0 mb-3 ' xl="11">
                        <i>The founders will act as paragon for
                                 Protecting the UNknown CC from the evil vilians</i></Col> </Row>
        </Col>
        <Col className='p-0 text-end my-5 pe-5 ' xl="12" ><i style={{color:"#efb428"}}className="pe-3">To Donate and support our Team for the future endeavours </i> <Button className='donate-Button'>To donate</Button></Col>
        </Row></div>
  )
}

export default home