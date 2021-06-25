import React from 'react';
import '../App.css';
import Cards from '../components/Card';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { aboutMe, services } from '../components/InfoSection/Data';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection {...aboutMe}/>
      <InfoSection {...services}/>
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
