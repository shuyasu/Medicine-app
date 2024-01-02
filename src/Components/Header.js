import React, {useState} from 'react';
import medicine from '../Assets/medicine.png';
import { Link, useLocation } from 'react-router-dom';
export default function Header() {

  const location = useLocation();

  const [isHovered, setIsHovered] = useState(false);

  const handelMouseEnter = () =>{
    setIsHovered(true);
  };

  const handelMouseLeave = () =>{
    setIsHovered(false);
  };
  const HeaderComp = () =>{
    if (location.pathname==="/Details"){
      return (
      <Link to="/">
      <p style={{color:"white"}}>Back</p>
      </Link>
      )
    }
    else{
      return(
        <>
         <Link to="/Details">
         <p style={{color:"white"}}>Details</p>
         </Link>
         <p style={{color:"white",marginLeft:"10px",marginRight:"5px"}}>Profile</p>
        

        </>
      )
    }
  }
  
  return (
    
    <div style={{backgroundColor:"#BA68C8",height:"80px",display:"flex",justifyContent:"space-between"}}>

        <div style={{marginRight:"0%",margin:"1%"}}>
        <img style={{height:"60px",width:"60px"}} src={medicine} alt="Image no found"/>
        </div>

        <div style={{display:"flex",justifyContent:"center"}}>
          <h1 style={{
            color:isHovered ?"blue" : "white", 
            cursor:"pointer",
          }}
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
          >PARAMEDICIAN
          </h1>
        </div>

        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",width:"10%"}}>        
        
        {HeaderComp()}
         
        </div>

        {/* </div> */}


     </div>
  
  )
}
