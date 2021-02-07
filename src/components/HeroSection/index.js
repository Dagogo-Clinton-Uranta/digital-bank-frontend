import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement';
/*all components are styled in a different file and then the styles are imported here,
 to make up the hero element*/

import {HeroContainer ,
     HeroBg,
     VideoBg,
     HeroContent,
     HeroH1,
     HeroP,
     HeroBtnWrapper,
     ArrowRight,
     ArrowForward } from './HeroElements';

const HeroSection = () => {
 const [hover, setHover] = useState(false)

    const onHover = () => {setHover(!hover)}



  return (
    <HeroContainer id = "Home">

     {/*this section is what holds the video and it is surrounded by the container*/}
      <HeroBg>
        <VideoBg autoPlay loop muted src= {Video} type='video/mp4'/>
      </HeroBg>

     {/*this is where the actual words go, i anticipate the z-index to be high*/}
       <HeroContent>

        <HeroH1>Virtual Banking Made Easy </HeroH1>

        <HeroP>
          Sign up for a new account today and recieve $250
           in credit towards your next payment.
        </HeroP>

        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter = {onHover}
          onMouseLeave = {onHover}
           primary ="true"
           dark= "true"
          smooth= "true"
          duration = {500}
          spy = {true}
          exact = 'true'
          offset = {-80}>
            Get Started! {hover ? <ArrowForward/> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>

       </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection
