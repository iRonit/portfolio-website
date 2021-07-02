import React from 'react';
import Cards from '../../components/Card';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { aboutMe, services } from '../../components/InfoSection/Data';
import TimeLine from '../../components/TimeLine';
import Header from '../../functional/Header';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InfoSection {...aboutMe} />
      <InfoSection {...services} />
      <TimeLine />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
