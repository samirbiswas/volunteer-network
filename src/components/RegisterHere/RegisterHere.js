
import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Data from '../../fakeData';
import { UserContext } from '../../App';


const RegisterHere = () => {
     
    const history=useHistory();
    const [loggesinUser] = useContext(UserContext);
    //console.log(loggesinUser);
    const [froms, setForms]=useState({eventName:loggesinUser.e?.name, email:loggesinUser.email,  img:loggesinUser.e?.img,date:new Date().toDateString()});
    
    const fromHandel =(e)=>{
      e.preventDefault()
        fetch('http://localhost:5000/addVolunteer',{
            method:'POST', 
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(froms)
        })
        .then(res=>res.text())
        .then(data=>{
          if(data === 'true'){ 
            history.push('/yourevents')
        }
        })
    }

    const cccc = ()=>{
      
    }
    
    const {id} =useParams();
    const datas = Data.find(dt=> dt.id == id );
    const aaa = datas.title;
    console.log(aaa);
    
     
    return (
        <div className="container">
          <form onSubmit={fromHandel}>
            <div className="form-group">
              <label >Name</label>
              <input onBlur={(e)=>setForms({...froms,name:e.target.value})} type="name" className="form-control" id="name" placeholder="name" value={loggesinUser?.name}/>

            </div>

            <div className="form-group">
              <label >Email</label>
              <input onChange={(e)=>setForms({...froms,email:e.target.value})} type="email" className="form-control" id="email" placeholder="email" value={loggesinUser?.email}/>
            </div>

            <div className="form-group">
              <label >Date</label>
              <input onChange={(e)=>setForms({...froms,date:e.target.value})} type="none" className="form-control" id="date" placeholder="date" value={new Date().toDateString()}/>
            </div>

            <div className="form-group">
              <label >Description</label>
              <input onChange={(e)=>setForms({...froms,description:e.target.value})} type="description" className="form-control" id="description" placeholder="Description"/>
            </div>
            <div className="form-group">
              <label >Orginize books at the library</label>
              <input onChange={(e)=>setForms({...froms,eventName:e.target.value})} type="eventName" className="form-control" id="eventName" placeholder="eventName" />
            </div>
            
            <button onClick={cccc} type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>              
    ) 
             
        
     
};

export default RegisterHere;




