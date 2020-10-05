import React from 'react';
import { Link } from 'react-router-dom';


const VolunteerDetail = (props) => {
const {id,title, picture}  = props.data;

    return (
       
        <div className="col-md-3">
      
        <Link to={`/register/${id}`}>
        <img style={{height:'230px',marginLeft:'10px'}} src={picture} alt=""/>
        <p style={{marginLeft:'10px',backgroundColor:'#2C6CE5',color:'white',borderRadius:'5px',padding:'5px'}}>{title}</p>
        </Link>
    
        </div>
        
    );
};

export default VolunteerDetail;
