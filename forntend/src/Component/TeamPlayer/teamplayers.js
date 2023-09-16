import { useState,useEffect } from 'react';
import { Button, Card, Col, Image, Row,Modal } from 'react-bootstrap';

 

function TeamPlayers() {
  const [teamPlayers, setTeamPlayers] = useState([])
  const [specPlayer, setSpecPlayer] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setSpecPlayer([])
    setShow(false);
  }
    


const handlePlayerid = (teamPlayers,pID)=>{
  if(teamPlayers !== undefined ){
    let viewlPlayers = teamPlayers.filter(function (team) {
      return team.pid === pID;
  }).map(function (student) {
      return student;
  })
if(viewlPlayers !== undefined && viewlPlayers.length !== 0)
  setSpecPlayer(viewlPlayers);
  }
  
  if(specPlayer !== undefined){
    setShow(true);
  }
}

  useEffect(() => {
    fetch("https://unknowncc-backend.onrender.com/teamplayers")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setTeamPlayers(data)
      })
  }, [])
  
  return (
    <div>
      {specPlayer?.map((item,index)=>(
      <div key={index}> 
       <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    
    <Modal.Header closeButton>
      <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Row className="m-0 py-1">
          <Col className='small' xl="7"> Batting : {item.Batting}</Col>
          <Col  className='small' xl="5"> Age : {item.Age}</Col>

        </Row>
        <Row className="m-0 pb-1">
          <Col  className='small ' xl="7"> Bowling : {item.Bowling}</Col>
          <Col className='small ' xl="5"> JerseyNo : {item.JerseyNo}</Col>
        </Row>
      <Row className="m-0 py-1">
          <Col className='small' xl="7"> role : {item.role}</Col>
          <Col className='small' xl="7"> Matches : {item.Matches}</Col>
          <Col  className='small' xl="5"> Runs : {item.Runs}</Col>
        </Row>
        <Row className="m-0 pb-1">
          <Col  className='small ' xl="7"> HighScore : {item.HighScore}</Col>
          <Col className='small ' xl="5"> JerseyNo : {item.JerseyNo}</Col>
        </Row>
      <Row className="m-0 py-1">
          <Col className='small' xl="7"> Average : {item.Average.$numberDecimal}</Col>
          <Col  className='small' xl="5"> wickets : {item.wickets}</Col>

        </Row>
        <Row className="m-0 pb-1">
          <Col  className='small ' xl="7"> catches : {item.catches}</Col>
          <Col className='small ' xl="5"> Economy : {item.Economy}</Col>
        </Row>
  
    
    
  </Modal>
  </div>))}
      <div  className='d-flex justify-content-center flex-wrap'> 
      {teamPlayers?.map((item,index)=>(
      <div key={index}> 
      <Card key={index} className='my-3 mx-3 ' style={{ width: '18rem' }}>

      <Image  src={`${item.img}`} alt="imgS" />
      <Row className='m-0 justify-content-center py-3'>Name : {item.name} </Row>
      <Card.Body className="p-0 ">
        <Row className="m-0 py-2">
          <Col className='small' xl="7"> Batting : {item.Batting}</Col>
          <Col  className='small' xl="5"> Age : {item.Age}</Col>

        </Row>
        <Row className="m-0 pb-3">
          <Col  className='small ' xl="7"> Bowling : {item.Bowling}</Col>
          <Col className='small ' xl="5"> JerseyNo : {item.JerseyNo}</Col>
        </Row>
        <Row className='m-0 justify-content-center'>
        <Button variant="dark" onClick={()=> handlePlayerid(teamPlayers,item.pid)}>View</Button></Row>
      </Card.Body>
    </Card></div>))}
    </div>
     
</div>

  )
}

export default TeamPlayers