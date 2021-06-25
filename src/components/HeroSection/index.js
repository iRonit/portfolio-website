import React, { useState } from "react";
import { Button } from "../Button";
import { Link } from 'react-router-dom';
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
                <Link
                  class='social-icon-link facebook'
                  to={{ pathname: "https://facebook.com/ronit.pradhan" }}
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebook />
                </Link>
              </SocialSiteIcon>
              <SocialSiteIcon>
                <Link
                  class='social-icon-link instagram'
                  to={{ pathname: "https://instagram.com/ronitpradhan" }}
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </Link>
              </SocialSiteIcon>
              <SocialSiteIcon>
                <Link
                  class='social-icon-link youtube'
                  to={{ pathname: "https://github.com" }}
                  target='_blank'
                  aria-label='Github'
                >
                  <FaGithub />
                </Link>
              </SocialSiteIcon>
              <SocialSiteIcon>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <i class='fab fa-twitter' />
                </Link>
              </SocialSiteIcon>
              <SocialSiteIcon>
                <Link
                  class='social-icon-link twitter'
                  to={{ pathname: "https://linkedin.com/in/ronitpradhan" }}
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin />
                </Link>
              </SocialSiteIcon>
            </SocialSiteIcons>
          </SocialSitesContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
