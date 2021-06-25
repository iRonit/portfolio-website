import React, { useState } from "react";
import { Button } from "../Button";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Typed from "react-typed";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  SocialSitesContent,
  SocialSiteIcons,
  SocialSiteIcon
} from "./HeroElements";
import heroVideo from "../../assets/videos/video-3.mp4";

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
                "Java Backend Developer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="about-me"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="btns btn--outline btn--large"
              primary={true}
              big={true}
            >
              Know More
            </Button>
            <Button
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Hire Me {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
        <SocialSitesContent>
          <SocialSiteIcons>
            <SocialSiteIcon>
              <a
                class='social-icon-link'
                href="https://facebook.com/ronit.pradhan"
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </a>
            </SocialSiteIcon>
            <SocialSiteIcon>
              <a
                class='social-icon-link'
                href="https://instagram.com/ronitpradhan"
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
            </SocialSiteIcon>
            <SocialSiteIcon>
              <a
                class='social-icon-link'
                href="https://github.com/iRonit"
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </a>
            </SocialSiteIcon>
            <SocialSiteIcon>
              <a
                class='social-icon-link'
                href="https://twitter.com"
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </a>
            </SocialSiteIcon>
            <SocialSiteIcon>
              <a
                class='social-icon-link'
                href="https://linkedin.com/in/ronitpradhan"
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
            </SocialSiteIcon>
          </SocialSiteIcons>
        </SocialSitesContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
