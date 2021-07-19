import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import Typed from "react-typed";
import heroVideo from "../../assets/videos/video-3.mp4";
import {
  ArrowDown, HeroBg, HeroContainer, HeroContent,
  HeroH1, HeroP, KnowMoreButton, SocialSiteIcon, SocialSiteIcons, SocialSitesContent, VideoBg
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);
  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={heroVideo} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Hello, I'm Ronit!</HeroH1>
          <HeroP>
            <Typed
              className="typed-text"
              strings={[
                "Full Stack Developer",
                "React/Angular Front End Developer",
                "Java Backend Developer"
              ]}
              typeSpeed={40}
              backSpeed={80}
              loop
            />
          </HeroP>
        </HeroContent>
        <KnowMoreButton
          to="about-me"
        >
          Know More About Me
          <motion.div
            initial={{ opacity: 0.7, y: -2 }}
            animate={{ y: 15 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              yoyo: Infinity
            }}
            whileHover={{ opacity: 1 }}>
            <ArrowDown />
          </motion.div>
        </KnowMoreButton>
        <SocialSitesContent>
          <SocialSiteIcons>
            <SocialSiteIcon>
              <a
                href="https://facebook.com/ronit.pradhan"
                target='_blank'
                rel='noreferrer'
                aria-label='Facebook'
              >
                <FaFacebook color="white" size="1.8rem" />
              </a>
            </SocialSiteIcon>
            <SocialSiteIcon>
              <a
                href="https://instagram.com/ronitpradhan"
                target='_blank'
                rel='noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram color="white" size="1.8rem" />
              </a>
            </SocialSiteIcon>
            <SocialSiteIcon>
              <a
                href="https://github.com/iRonit"
                target='_blank'
                rel='noreferrer'
                aria-label='Github'
              >
                <FaGithub color="white" size="1.8rem" />
              </a>
            </SocialSiteIcon>
            <SocialSiteIcon>
              <a
                href="https://stackoverflow.com/users/8229716/ronit-pradhan"
                target='_blank'
                rel='noreferrer'
                aria-label='StackOverflow'
              >
                <FaStackOverflow color="white" size="1.8rem" />
              </a>
            </SocialSiteIcon>
            <SocialSiteIcon>
              <a
                href="https://linkedin.com/in/ronitpradhan"
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin color="white" size="1.8rem" />
              </a>
            </SocialSiteIcon>
          </SocialSiteIcons>
        </SocialSitesContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
