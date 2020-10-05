
import React, { useEffect, useState } from 'react';


const YourEvents = () => {

    const [volunteerInfo, setVolunteerInfo ] =useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/showVolunteer')
        .then(res=>res.json())
        .then(result=>{
            setVolunteerInfo(result)
        })

    },[])

    const deleteVolunteer = (event,id)=>{
        //console.log("clicked", id)
        var a = event.target.parentNode;
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'

        } )
        .then(res=>res.json())
        .then(result=>{
            if(result && a){
             a.style.display='none';

            }
        })
        
    }
    
    return (
        <div className='container'>
            <div className="row ml-5 p-3">
            
            {
                volunteerInfo.map(vt=>
                    
                    <div className="col-md-6">

                        <img style={{height:'250px'}} src={vt.picture} alt=""/>
                            <h5>{vt.organization} </h5>
                            <p>{vt.ReactDatepicker}</p>
                            
                            <button onClick={(event)=>{deleteVolunteer(event,`${vt._id}`)}} style={{border:'1px solid skyblue', padding:'5px'}}>Delete</button>

                               
                         </div>
                    
                    
                    )
            }
                   
        </div> 
        </div>
    );
};

export default YourEvents;