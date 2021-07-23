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
  col1Start,
  topLine,
  lightText,
  col1,
  headLine,
  darkText,
  description,
  img,
  col2,
  alt }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TopLine lightText={lightText}>{topLine}</TopLine>
          <InfoRow col1Start={col1Start}>
            <Column1>
              {
                col1 == null ?
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
                  :
                  col1
              }
            </Column1>
            <Column2>
              {
                col2 == null ?
                  <ImgWrap>
                    <Img src={img} alt={alt} />
                  </ImgWrap>
                  :
                  col2
              }
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
