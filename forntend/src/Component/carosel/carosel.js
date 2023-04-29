import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Carosel() {
  const [users, setUsers] = useState([])
console.log(users);
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
          <img
          className="d-block w-100"
          src={`data:image/jpeg;base64,${e}`}  alt="First slide"
        />
       
     
        </Carousel.Item>
        )
        
      }))}
 </Carousel>
    </div>
  )
}

export default Carosel