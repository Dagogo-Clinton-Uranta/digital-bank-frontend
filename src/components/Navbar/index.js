import React, {useState, useEffect} from 'react'
import  {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
//import {BrowserRouter as Router} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
  const [scrollNav, setscrollNav] = useState(false)
  const changeNav = () => {
//consider changing 80 to 80px if you get an error
    if(window.scrollY >= 80){
      setscrollNav(true)
    }
    else{ setscrollNav(false)}
  }
 

useEffect(() => {
  window.addEventListener("scroll", changeNav)
}, []);

const toggleHome = ()=> {
  scroll.scrollToTop();
}

 return (
     <IconContext.Provider value = {{color:'#fff'}}>
    <Nav scrollNav= {scrollNav}>
 <NavbarContainer>

{/* the logo for your fake bank cinnamon is here, surrounded by navlogo route and styles*/}
 <NavLogo to ='/' onClick ={toggleHome}>
 Cinnamon
 </NavLogo>

{/*mobile icons are here, fa bars is a self closing tag*/}
 <MobileIcon onClick ={toggle}>
 <FaBars/>
 </MobileIcon>

{/*the menu is here and it has individual items*/}
 <NavMenu>

{/* this is one option in the bar , about*/}
  <NavItem>
  <NavLinks to ='about'
            smooth= "true"
            duration = {500}
            spy = {true}
            exact = 'true'
            offset = {-80}
             >About
             </NavLinks>
  </NavItem>

{/*this is the discover link, in the Navbar*/}
<NavItem>
<NavLinks to ='discover'
    smooth= "true"
    duration = {500}
    spy = {true}
    exact = 'true'
    offset = {-80}
           >Discover</NavLinks>
</NavItem>

{/*this is the services link, in the Navbar*/}
<NavItem>
<NavLinks to ='services'
     smooth= "true"
     duration = {500}
     spy = {true}
     exact = 'true'
     offset = {-80}
    >Services</NavLinks>
</NavItem>

{/*this is the sign up link, in the Navbar*/}
<NavItem>
<NavLinks to ='signup'
    smooth= "true"
    duration = {500}
    spy = {true}
    exact = 'true'
    offset = {-80}
>Sign Up</NavLinks>
</NavItem>



 </NavMenu>

{/*the button for sign in and it's respective link*/}
<NavBtn>
<NavBtnLink to= "/signin">Sign In</NavBtnLink>
</NavBtn>

 {/*navbar container is closed off  here and is closed off by the navs*/}
 </NavbarContainer>
    </Nav>

{/*maybe theres a closing div tag here, idk*/}
    </IconContext.Provider>


 );


}

export default Navbar
