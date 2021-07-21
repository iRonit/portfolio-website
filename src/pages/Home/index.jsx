import React from 'react';
import Cards from '../../components/Card';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import TimeLine from '../../components/TimeLine';
import { aboutMe, skills } from '../../data/InfoSectionItems';
import { timeLineItems } from '../../data/TimeLineItems';
import Header from '../../functional/Header';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InfoSection {...aboutMe} />
      <InfoSection {...skills} />
      <TimeLine timeLineItems={timeLineItems} id="experience" />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
