import React from 'react';
import { Link } from 'react-router-dom';


const VolunteerDetail = (props) => {
const {id,title, picture}  = props.data;

    return (
       
        <div className="col-md-3">
      
        <Link to={`/register/${id}`}>
        <img style={{height:'200px',marginLeft:'10px'}} src={picture} alt=""/>
        <p style={{marginLeft:'10px',backgroundColor:'blue'}}>{title}</p>
        </Link>
    
        </div>
        
    );
};

export default VolunteerDetail;
