
import React,{useContext, useEffect, useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import { Controller, useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Data from '../../fakeData';
import './RegisterHere.css'
const RegisterHere = () => {
     
  const {id} =useParams();
  const valur = Data.find(dt => dt.id && dt.id.toString() === id.toString());

  const [loggesinUser, setLoggedInUser]= useContext(UserContext);
  const history =useHistory();
  
   
  console.log(valur);
    
  const { register, handleSubmit,  control } = useForm();
    const onSubmit = allData => {
    const fullDetails ={picture: valur.picture, ...allData};
  
     
    fetch('http://localhost:5000/addVolunteer',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(fullDetails)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      
    })
    history.push('/yourevents');
  }
     
    return (
       <div className="design">
         <h2>Regitration Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label >Name</label>
              <input value={loggesinUser.name} id="inputName" name="name" className="form-control" ref={register({ required: true })}
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
              <label htmlFor="organization">Title of work</label>

              <input value={valur.title} id="organization" name="organization"  className="form-control" ref={register({ required: true })} />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>        
    ) 
             
};

export default RegisterHere;





            