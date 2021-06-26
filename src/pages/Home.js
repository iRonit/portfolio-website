import React from 'react';
import '../App.css';
import Cards from '../components/Card';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { aboutMe, services } from '../components/InfoSection/Data';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InfoSection {...aboutMe} />
      <InfoSection {...services} />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
