import React, {useState} from 'react';
import Video from '../../videos/video_2.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSection Elements';
import { Button } from '../button Elements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy.</HeroH1>
            <HeroP>Sign up for a new account and recieve #2500 in credit toward your next payment.</HeroP>
        </HeroContent>
        <HeroBtnWrapper>
            <Button to = 'signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Get Started{hover? <ArrowForward/> : <ArrowRight/>}</Button>
        </HeroBtnWrapper>
    </HeroContainer>
  )
}

export default HeroSection