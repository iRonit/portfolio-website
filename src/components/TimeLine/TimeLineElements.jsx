import styled from 'styled-components';

export const TimeLineContainer = styled.div`
    background: #000;
    padding: 4rem;
    font-size: 150%;
    word-spacing: 5px;
    letter-spacing: 1px;
    margin-top: -20px;

    @media screen and (max-width: 1163px) {
    font-size: 100%;
  }
`;

export const TimeLineTitle = styled.h1`
    color: white;
    text-align: left;
    margin-left: 10%;
    padding-bottom: 15px;
    transition: 0.8s all ease;
    font-size: 3rem;

    @media screen and (max-width: 1163px) {
    transition: 0.8s all ease;
    margin-left: 15px;
  }
`;