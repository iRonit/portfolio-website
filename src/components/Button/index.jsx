import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const ButtonS = styled(LinkS).attrs({
    smooth: true,
    duration: 500,
    spy: true,
    exact: "true",
    offset: -80
})`
    border-radius: 50 px;
    background: ${({ primary }) => (primary ? 'transparent' : '#000')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#000' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: ${({ primary }) => (primary ? '1px solid #fff' : 'none')};
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 600ms;
    margin: 1px;

    &:hover {
        transition: 600ms;
        background: ${({ primary }) => (primary ? '#fff' : '#000')};
        color: ${({ primary }) => (primary ? '#000' : '#fff')};
        font-size: ${({ primary }) => (primary ? '20px' : '20px')};
    }
`;

export const ButtonR = styled(LinkR).attrs({
    smooth: true,
    duration: 500,
    spy: true,
    exact: "true",
    offset: -80
})`
    border-radius: 50 px;
    background: ${({ primary }) => (primary ? 'transparent' : '#000')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#000' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: ${({ primary }) => (primary ? '1px solid #fff' : 'none')};
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 600ms;
    margin: 1px;

    &:hover {
        transition: 600ms;
        background: ${({ primary }) => (primary ? '#fff' : '#000')};
        color: ${({ primary }) => (primary ? '#000' : '#fff')};
        font-size: ${({ primary }) => (primary ? '20px' : '20px')};
    }
`;