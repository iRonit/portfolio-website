import styled from "styled-components";

export const ContactContainer = styled.div`
    padding: 4rem;
    background: #0c0c0c;
    padding: 80px 0;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Card = styled.div`
background: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    display: flex;
    z-index: 1;
    height: 860 px;
    width: 70%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    margin: 0;

    p {
        color: #010606;
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        margin: 16px;
    }

    @media screen and (max-width: 768px) {
        p {
            text-align: center;
        }
    }
`;

export const FormWrap = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${`'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${`'col1 col1' 'col2 col2'`};
    }
`;

export const Col1 = styled.div`
    grid-area: col1;
    padding: 10px;

    input {
        outline: none;
        width: 100%;
        height: 48px;
        border: none;
        padding: 10px;
        left:0;
        right:0;
        margin-top: 10px;
        margin-bottom: 10px;
        
        box-shadow: 0 6px 20px rgb(0 0 0 / 5%);
        -webkit-filter: drop-shadow(0 6px 20px rgb(0 0 0 / 5%));
        filter: drop-shadow(0 6px 20px rgb(0 0 0 / 5%));
    }

    span {
        color: grey;
        font-size: 1.1rem;
    }
`;

export const Col2 = styled.div`
    grid-area: col2;
    padding: 10px;
    margin: 0;

    textarea {
        padding: 1rem 1.5rem;
        outline: none;
        width: 100%;
        height: 180px;
        border: none;
        resize: none;
        margin-top: 10px;
        margin-bottom: 10px;

        box-shadow: 0 6px 20px rgb(0 0 0 / 5%);
        -webkit-filter: drop-shadow(0 6px 20px rgb(0 0 0 / 5%));
        filter: drop-shadow(0 6px 20px rgb(0 0 0 / 5%));
        
    }

    span {
        color: grey;
        font-size: 1.1rem;
    }

    button {
        border-radius: 10px;
        background: #000;
        padding: 14px 48px;
        color: #fff;
        font-size: 16px;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 600ms;
        margin: 1px;

        &:hover {
            transition: 500ms;
            padding: 14px 90px;
        }
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Result = styled.div`
    color: green;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 1.1px;
    margin: 16px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;