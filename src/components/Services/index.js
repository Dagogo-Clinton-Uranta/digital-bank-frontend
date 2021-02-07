import React from 'react';

import Icon1 from '../../images/svg-4.svg'; 
import Icon2 from '../../images/svg-5.svg';  
import Icon3 from '../../images/svg-6.svg';


import  {ServicesContainer,
         ServicesH1,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         ServicesH2,
         ServicesP,


      } from './ServicesElements';

const Services = () => {

 return (
  <ServicesContainer id = "Services">
   <ServicesH1>Our Services</ServicesH1>
   <ServicesWrapper>

   <ServicesCard>
   <ServicesIcon src={Icon1} />
   {/*apparently this src = icon1 is a neat trick to putting pictures, find out wht he said that*/}
   <ServicesH2>Reduce expenses</ServicesH2>
   <ServicesP> We help reduce your fees and increase your overall revenue.</ServicesP>
   </ServicesCard>

   <ServicesCard>
   <ServicesIcon  src={Icon2}/>
   {/*apparently this src = icon1 is a neat trick to putting pictures, find out wht he said that*/}
   <ServicesH2>Virtual Offices</ServicesH2>
   <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
   </ServicesCard>

   <ServicesCard>
   <ServicesIcon  src={Icon3}/>
   {/*apparently this src = icon1 is a neat trick to putting pictures, find out why he said that*/}
   <ServicesH2>Reduce expenses</ServicesH2>
   <ServicesP> We help reduce your fees and increase your overall revenue.</ServicesP>
   </ServicesCard>

   </ServicesWrapper>
  </ServicesContainer>
 )
}


export default Services
