import styled from "styled-components";

export const MarkerMenuContent = styled.div`
  align-items: center;
  margin: 0;
`;

export const MarkerMenuIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 15px 10px;
  z-index: 2;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  border-radius: 15px 15px 15px 15px;
  object-fit: contain;
  position: absolute;
  right: 5px;
  bottom: 25px;
  transition: 600ms;

  &:hover {
    div {
        transition: 600ms;
        padding-top: 5px;
        padding-bottom: 5px;
    }
  }
`;

export const MarkerMenuIcon = styled.div`
  transition: 600ms;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    transition: 500ms;
    transform: scale(1.5);
  }
`;