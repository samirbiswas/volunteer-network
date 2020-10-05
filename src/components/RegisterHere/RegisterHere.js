
import React,{useContext, useEffect, useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import { Controller, useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';


const RegisterHere = () => {
     
  const {id} =useParams();
  const [events , setEvent] =useState([]);
  const [loggesinUser, setLoggedInUser]= useContext(UserContext);
  const history =useHistory();
  useEffect(()=>{
      fetch('http://localhost:5000/fine/'+id)
      .then(res=>res.json())
      .then(data=>{
          setEvent(data);

      })
  }, [id])
  console.log(events);
    
  const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
    const eventDetails ={picture : events.picture, ...data} ;
  
     
    fetch('http://localhost:5000/add',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(eventDetails)
    })
    .then(res=>res.json())
    .then(data=>{
       
        console.log(data)
    })
    history.push('/yourevents');
  }
     
    return (
       
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label >Name</label>
              <input value={loggesinUser.name} id="inputName" name="fullName" className="form-control" ref={register({ required: true })}
                    />

            </div>

            <div className="form-group">
              <label >Email</label>
              <input value={loggesinUser.email} id="email" name="email" className="form-control" ref={register({ required: true })}/>
            </div>

            <div className="form-group">
              <label >Date</label>
              <Controller
                        control={control}
                        name="ReactDatepicker"
                     
                        render={({ onChange, onBlur, value}) => (
                      
                        <ReactDatePicker
                            
                            onChange={onChange}
                            onBlur={onBlur}
                            //selected={value}
                            selected ={value}
                        />
                        )}
                    />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input id="Description" name="Description" className="form-control" ref={register({ required: true })} />    
            </div>
            <div className="form-group">
              <label htmlFor="organization">Orginize books at the library</label>

              <input value={events.name} id="organization" name="organization"  className="form-control" ref={register({ required: true })} />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
                    
    ) 
             
};

export default RegisterHere;





            