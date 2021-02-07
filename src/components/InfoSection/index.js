import React from 'react';
import {Button} from "../ButtonElement";
import{
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from  './InfoElements';

const InfoSection = ({lightBg, id, imgStart,topLine,lightText,
  headline,darkText,description,buttonLabel, img,alt, primary, dark, dark2}) => {
  return (
   <>
    <InfoContainer lightBg={lightBg}  id = {id} >
      <InfoWrapper>
        <InfoRow imgStart = {imgStart}>
          <Column1>
            <TextWrapper>
             <TopLine>{topLine}</TopLine>
             <Heading lightText={lightText}>{headline}</Heading>
             <Subtitle darkText={darkText}>{description}</Subtitle>
             <BtnWrap>
{/*this button has some weird props that i've never seen , from react-scroll, smooth,spy etc, research them*/}

               <Button to="Home"
                       smooth ={true}
                       duration ={500}
                       spy={true}
                       exact='true'
                       offset = {-80}
                       primary={primary? 1: 0}
                       dark = {dark ? 1: 0}
                       dark2 = {dark2 ? 1: 0}  //you gotta research this 1:0 stuff for primary
                       >{buttonLabel}</Button>
             </BtnWrap>

            </TextWrapper>
          </Column1>
          <Column2>
           <ImgWrap>
              <Img src ={img} alt = {alt}/>
           </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
   </>

  )
}

export default InfoSection
