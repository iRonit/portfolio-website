import { motion } from 'framer-motion';
import { BiChevronsDown } from "react-icons/bi";
import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.5 }
})`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: -1;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  object-fit: contain;

  &::before {
    content: '';
    position: abosolute;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.6;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%
      );
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 100px;
  text-align: center;
  font-size: 100px;
  margin-top: -100px;
  font-family: "Over the Rainbow", cursive;

  @media screen and (max-width: 960px) {
    font-size: 70px;
    margin-top: -150px;
  }

  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-top: -100px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 40px;
  text-align: center;
  max-width: 600px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SocialSitesContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 30px 30px 30px 30px;
  z-index: 2;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  position: absolute;
  bottom: 100px;
  right: 100px;
  transition: 600ms;

  &:hover {
    transition: 600ms;
    padding: 30px 40px 30px 40px;
    right: 90px;
  }

  @media screen and (max-width: 768px), screen and (max-height: 620px) {
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
`;

export const SocialSiteIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const SocialSiteIcon = styled.div`
  transition: 600ms;

  &:hover {
    transition: 500ms;
    transform: scale(1.5);
  }
`;

export const KnowMoreButtonContainer = styled(motion.div).attrs((props) => {
  return {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: props.shouldShowActions ? 1 : 0,
      y: props.shouldShowActions ? 0 : -100
    },
    transition: { opacity: { duration: 0.2 } }
  }
})`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px), screen and (max-height: 620px) {
    bottom: 20%;
    right: auto;
    left: auto;
  }
`;

export const KnowMoreButton = styled(LinkS).attrs({
  smooth: true,
  duration: 500,
  spy: true,
  exact: "true",
  offset: -80
})`
  z-index: 1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 20px;
  transition: 600ms;

  &:hover {
      transition: 600ms;
      transform: scale(1.2);
    }
`;

export const ArrowDown = styled(BiChevronsDown)`
  font-size: 30px;
`;