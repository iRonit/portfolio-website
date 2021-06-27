import styled from "styled-components";

export const SocialSitesContent = styled.div`
  align-items: center;
  margin: 0;
`;

export const SocialSiteIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 20px;
  z-index: 2;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  border-radius: 15px 15px 15px 15px;
  object-fit: contain;
  position: absolute;
  right: 0;
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

export const SocialSiteIcon = styled.div`
  transition: 600ms;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    transition: 500ms;
    transform: scale(1.5);
  }
`;