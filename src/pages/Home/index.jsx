import React from 'react';
import Cards from '../../components/Card';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { aboutMe, services } from '../../data/InfoSectionItems';
import TimeLine from '../../components/TimeLine';
import { timeLineItems } from '../../data/TimeLineItems';
import Header from '../../functional/Header';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InfoSection {...aboutMe} />
      <TimeLine timeLineItems={timeLineItems} id="experience" />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
