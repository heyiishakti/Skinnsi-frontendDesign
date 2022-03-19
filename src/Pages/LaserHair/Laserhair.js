import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Cards from './Cards/Cards'
import FirstSection from './Firstsection/FirstSection'
import Sectionfour from './SectionFour/Sectionfour'
import Secondsection from './Secondsection/Secondsection'
import Sectionthree from './SectionThree/Sectionthree'
import Accordian from './Accordian/Accordian'
import Lastsection from './Lastsection/Lastsection'

const Laserhair = () => {
  return (
      <>
          <Navbar/>
          <FirstSection />
          <Secondsection />
          <Sectionthree/>
          <Sectionfour/>
      <Cards />
      <Accordian />
      <Lastsection/>
      <Footer />
          
      </>
  )
}

export default Laserhair