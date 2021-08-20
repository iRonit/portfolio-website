import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import Typed from "react-typed";
import heroVideo from "../../assets/videos/video-3.mp4";
import {
  ArrowDown, HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, KnowMoreButtonContainer,
  KnowMoreButton, SocialSiteIcon, SocialSiteIcons, SocialSitesContent, VideoBg
} from "./HeroElements";
import Parallax from 'react-rellax';

const HeroSection = () => {
  // Scroll Up Disappear
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(true);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = (yPos < lastYPos + 1) && (window.scrollY <= 0.3 * document.getElementById('home').clientHeight);
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={heroVideo} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <Parallax speed={-5}>
            <HeroH1>Hello, I'm Ronit :)</HeroH1>
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
          </Parallax>

        </HeroContent>
      </HeroContainer>

      <KnowMoreButtonContainer shouldShowActions={shouldShowActions}>
        <KnowMoreButton
          to="about-me"
        >
          Know More About Me
          <motion.div
            animate={{ y: [0, 15] }}
            transition={{
              ease: "easeIn",
              duration: 0.7,
              yoyo: Infinity
            }}
          >
            <ArrowDown />
          </motion.div>
        </KnowMoreButton>
      </KnowMoreButtonContainer>

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
    </>
  );
};

export default HeroSection;
