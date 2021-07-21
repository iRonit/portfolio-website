import styled from "styled-components";

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
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
`;

export const Card = styled.div`
  margin: 5% auto;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 85%;
  left: auto;
  right: auto;
  z-index: 1000;
  border-radius: 15px;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  background: white;
  overflow: auto;

  @media screen and (max-height: 700px) {
    margin: 10% auto;
  }

  @media screen and (max-height: 500px), screen and (max-width: 460px) {
    margin: 15% auto;
  }

  @media screen and (max-height: 360px), screen and (max-width: 460px) {
    margin: 25% auto;
    width: 90%;
  }


`;