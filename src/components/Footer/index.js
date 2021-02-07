import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube } from "react-icons/fa"

import {
  FooterLink,
  FooterWrap,
  FooterContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLinksContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialLogo
} from "./FooterElements";

const Footer = () => {
 
  const toggleHome = ()=> {
    scroll.scrollToTop();
  }

   return (
<FooterContainer>
       <FooterWrap>
         <FooterLinksContainer>
            <FooterLinksWrapper>

 {/*about us column*/}
              <FooterLinkItems>

                <FooterLinkTitle> About us</FooterLinkTitle>

                   <FooterLink to= "">How it works</FooterLink>
                   <FooterLink to= "">Testimonials</FooterLink>
                   <FooterLink to= "">Careers</FooterLink>
                   <FooterLink to= "">Investors</FooterLink>
                   <FooterLink to= "">Terms of Service</FooterLink>

              </FooterLinkItems>

{/*another column for..something in the footer sha*/}
              <FooterLinkItems>

                <FooterLinkTitle> Videos</FooterLinkTitle>

                   <FooterLink to= "">Submit Videos</FooterLink>
                   <FooterLink to= "">Ambassadors</FooterLink>
                   <FooterLink to= "">Agency</FooterLink>
                   <FooterLink to= "">Influencer</FooterLink>


              </FooterLinkItems>


            </FooterLinksWrapper>
{/* a second footer links wrapper column*/}

<FooterLinksWrapper>

{/*about us column*/}
  <FooterLinkItems>

    <FooterLinkTitle> Contact us</FooterLinkTitle>

       <FooterLink to= "">Contact</FooterLink>
       <FooterLink to= "">Support</FooterLink>
       <FooterLink to= "">Destinations</FooterLink>
       <FooterLink to= "">Sponsorships</FooterLink>
       <FooterLink to= "">Terms of Service</FooterLink>

  </FooterLinkItems>

{/*another column for..something in the footer sha*/}
  <FooterLinkItems>

    <FooterLinkTitle> Social Media</FooterLinkTitle>

       <FooterLink to= "">Instagram</FooterLink>
       <FooterLink to= "">Facebook</FooterLink>
       <FooterLink to= "">Youtube</FooterLink>
       <FooterLink to= "">Twitter</FooterLink>


  </FooterLinkItems>


</FooterLinksWrapper>

         </FooterLinksContainer>

   <SocialMedia>
     <SocialMediaWrap>
       <SocialLogo to ="/" onClick ={toggleHome}>
         Cinnamon
       </SocialLogo>
       {/*come back here and remember to use the right copyright sign*/}
       <WebsiteRights>
       Cinnamon© {new Date().getFullYear()} All rights reserved.
       </WebsiteRights>
         <SocialIcons>
          {/*icon for facebook*/}
            <SocialIconLink href="www.facebook" target="_blank" aria-label="Facebook">
              <FaFacebook/>
            </SocialIconLink>

        {/*icon for instagram*/}
            <SocialIconLink href="www.instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram/>
            </SocialIconLink>

        {/*icon for twitter*/}
        <SocialIconLink href="www.twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter/>
        </SocialIconLink>

        {/*icon for youtube*/}
        <SocialIconLink href="www.youtube.com" target="_blank" aria-label="Youtube">
          <FaYoutube/>
        </SocialIconLink>

        {/*icon for LinkedIn , note , the this href link if you want to link the others to external websites*/}
        <SocialIconLink href="www.linkedin.com" target="_blank" aria-label="LinkedIn">
          <FaLinkedin/>
        </SocialIconLink>

         </SocialIcons>

      </SocialMediaWrap>
   </SocialMedia>

       </FooterWrap>
</FooterContainer>
   )
};

export default Footer;
