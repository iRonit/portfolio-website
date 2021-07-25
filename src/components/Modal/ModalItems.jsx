import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import { motion } from "framer-motion";

export const CardContainer = styled.div`
    display: block;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

export const Card = styled(motion.div).attrs(({ x, y }) => ({
    initial: { x: x, y: y, scale: 0.1 },
    animate: { x: 0, y: 0, scale: 1 },
    exit: { x: x, y: y, scale: 0, duration: 0.25 },
    transition: { duration: 0.5 }
}))`
    margin: 5% auto;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    max-height: 85%;
    left: auto;
    right: auto;
    z-index: 1000;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
    background: ${props => props.bgColor};
    overflow: auto;

    @media screen and (max-height: 700px) {
      margin: 10% auto;
    }

    @media screen and (max-height: 500px), screen and (max-width: 460px) {
      margin: 15% auto;
    }

    @media screen and (max-height: 360px), screen and (max-width: 460px) {
      margin: 25% auto;
      width: 95%;
    }
`;

export const CardRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding-top: 30px;

    @media screen and (max-width: 768px) {
        grid-template-columns: none;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 1.8;
    color: black;
    grid-area: ${(gridArea) => gridArea};
    padding: 30px;

    h3 {
        font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 200;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: none;
        padding: 0;
    }
`;

export const SkillSection = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 10px;
    width: 100%;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: white;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);

    &:hover {
        div::before, div::after{
            opacity: 1;
        }
    }
    
`;

export const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    width: 100%;
`;

export const Bar = styled.div`
    background-color: #f0f0f0;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.05),
                      0px 1px rgba(255,255,255,0.8);
	border-radius: 20px;
	position: relative;
	height: 10px;
	width: 100%;
    margin-bottom: 5px;
`;

export const BarComplete = styled.div`
    background: ${props => props.bgColor};
	border-radius: 20px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
    position: absolute;

    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 200;

    & {
        ::before {
            position: absolute;
            content: "";
            right: 0;
            top: -10px;
            height: 0;
            width: 0;
            border: 7px solid transparent;
            border-bottom-width: 0px;
            border-right-width: 0px;
            border-top-color: #000;
            opacity: 0;
         }

        ::after {
            position: absolute;
            content: "${props => props.rate}%";
            right: 0;
            top: -28px;
            color: #fff;
            font-size: 12px;
            font-weight: 500;
            background: #000;
            padding: 1px 8px;
            border-radius: 3px;
            opacity: 0;
        }
    }
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    color: black;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 1001;
`;
