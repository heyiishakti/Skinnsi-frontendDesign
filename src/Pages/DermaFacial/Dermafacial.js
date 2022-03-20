import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Dermafacial.css' 

import Accordian from './Accordian/Accordian';
import Footer from '../../Components/Footer/Footer';
import Dermasectionone from './DermaSectionOne/Dermasectionone';
import Dermasectiontwo from './DermasectionTwo/Dermasectiontwo';
import Dermasectionthree from './DermaSectionThree/Dermasectionthree';
import Dermasectionfour from './DermaSectionFour/Dermasectionfour';
import Dermasectionfive from './DermaSectionFive/Dermasectionfive';
import Dermasectionsix from './DermaSectionSix/Dermasectionsix';
import Dermalastsection from './DermaLastSection/Dermalastsection';

const Dermafacial = () => {
    return (  
      
        <>
            
            <Navbar />
            <Dermasectionone />
            <Dermasectiontwo />
            <Dermasectionthree />
            <Dermasectionfour />
            <Dermasectionfive />
            <Dermasectionsix/>
           
            <Accordian />
            <Dermalastsection/>
            <Footer/>
            </>
  )
}

export default Dermafacial