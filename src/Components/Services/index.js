import React from 'react';
import { ServiceContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './Services Elements';
import icon1 from '../../images/img-4.svg';
import icon2 from '../../images/img-3.svg';
import icon3 from '../../images/img-5.svg';

const Services = () => {
  return (
    <ServiceContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon1}/>
                <ServicesH2>Reduce Expences</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon2}/>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>You can access our platform online from anywhere in the world.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServiceContainer>
  )
}

export default Services;