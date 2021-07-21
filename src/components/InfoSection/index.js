import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  isImg,
  img,
  alt }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TopLine lightText={lightText}>{topLine}</TopLine>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>
                  <i className="fa fa-quote-left fa-pull-left"></i>
                  {headLine}
                  <i className="fa fa-quote-right fa-pull-right"></i>
                </Heading>
                {
                  description.map(desc => {
                    return (
                      <Subtitle darkText={darkText}>{desc}</Subtitle>
                    );
                  })
                }
              </TextWrapper>
            </Column1>
            <Column2>
              {
                isImg ?
                  <ImgWrap>
                    <Img src={img} alt={alt} />
                  </ImgWrap>
                  :
                  img
              }
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
