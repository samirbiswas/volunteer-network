
import React, { useEffect, useState } from 'react';

const YourEvents = () => {
    const [event, setEvent] = useState([]);
    
    useEffect(()=>{

        fetch('http://localhost:5000/add')
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [])
    return (
        <div>
            <h1>Lent :{event.length}</h1>
            {
                event.map(events=> <li>{events.date}</li>)
            }
        
                
                    
                
        </div>
    );
};

export default YourEvents;