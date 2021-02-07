import React from 'react';
import {SidebarContainer,
   CloseIcon ,
   Icon,
   SidebarWrapper,
   SidebarMenu,
   SidebarLink,
   SideBtnWrap,
   SidebarRoute} from './SidebarElements';



const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
       <CloseIcon/>
      </Icon>

  {/*this is a replication of the navbar menu , so you can pick options when the sidebar drops down*/}
      <SidebarWrapper>
       <SidebarMenu>

{/*this is a react scroll link to about section on the page*/}
       <SidebarLink to= "about" onClick = {toggle}>
        About
       </SidebarLink>

{/*this is a react scroll link to discover section on the page*/}
       <SidebarLink to= "discover" onClick = {toggle}>
        Discover
       </SidebarLink>

{/*this is a react scroll link to services section on the page*/}
       <SidebarLink to= "services" onClick = {toggle}>
        Services
       </SidebarLink>

{/*this is a react scroll link to signup section on the page*/}
       <SidebarLink to= "signup" onClick = {toggle}>
        Sign Up
       </SidebarLink>

       </SidebarMenu>

{/*this button is for ... signing in when the side bar drops down*/}
      <SideBtnWrap>
      <SidebarRoute to =  "signin"> Sign in </SidebarRoute>
      </SideBtnWrap>

      </SidebarWrapper>


    </SidebarContainer>
  )
}

export default Sidebar
