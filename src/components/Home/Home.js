import React, { useState } from 'react';
import Data from '../../fakeData';
import VolunteerDetail from '../VolunteerDetail/VolunteerDetail';

const Home = () => {
    const [data] = useState(Data);
    return (

        <div className="container">
        <div className="row">
        { 
            data.map(dt=> <VolunteerDetail key={dt.id} data={dt}></VolunteerDetail>)
           
        }
         </div>
        </div>
       
    );
};

export default Home;


           