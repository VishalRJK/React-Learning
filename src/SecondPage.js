import React from 'react';
import{Link} from 'react-router-dom'

const SecondPage = () =>{
    return(   
        <div>     
            <h1>Second Page</h1> 
            <Link to="/">Index</Link>         
            </div>
    );
};

export default SecondPage;