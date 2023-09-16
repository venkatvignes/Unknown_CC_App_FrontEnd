import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Carosel() {
  const [users, setUsers] = useState([])
  useEffect(() => {

    fetch("https://unknowncc-backend.onrender.com/users")
    .then(response => {
      return response.json()
    })
    .then(data => {
          setUsers(data)
      })
  }, [])
  
  
 
  
  return (
    <div>
      <Carousel  interval={1000}>
      {users?.map((e)=>e.img?.img?.map((e)=>{
        return(  
          <Carousel.Item>
          <img style={{height:"28em"}}
          className="d-block w-100"
          src={`${e}`}  alt="First slide"
        />
       
     
        </Carousel.Item>
        )
        
      }))}
 </Carousel>
    </div>
  )
}

export default Carosel