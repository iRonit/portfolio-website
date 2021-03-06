import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
    padding: 50px 0;
    position: relative;
    display: flex;

    @media screen and (max-width: 768px) {
        padding: 25px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860 px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ col1Start }) => (col1Start ? `'col1 col2'` : `'col2 col1'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ col1Start }) => (col1Start ? `'col1 col1' 'col2 col2'` : `'col1' 'col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.p`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 30px;
`;

export const Heading = styled.h1`
    font-size: 38px;
    line-height: 1.1;
    font-weight: 600;
    padding-bottom: 20px;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    margin-top: 35px;
    margin-bottom: 35px;
    font-family: 'Satisfy', cursive;
    font-size: 24px;
    line-height: 33px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
