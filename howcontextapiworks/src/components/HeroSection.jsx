import React, { useContext } from 'react' 
// import Footer from './Footer'
import {counterContext} from '../context/context'
let HeroSection =()=>{
    const counter =useContext(counterContext);
    return(<>
    
 
<h1>this is hero section</h1>
{counter}
{/* so here we avoid prop drilling and manage our state easily */}

</>
    );
};
export default HeroSection;

