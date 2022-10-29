import Link from 'next/link';
import React from 'react';
import { SiDiscord } from 'react-icons/si';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>AspireWebFX Services</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>PROJECTS</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>SKILLS</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>SERVICES</NavLink>
        </Link>
      </li>    
      <li>
        <a href="https://aspirefx.carrd.co">
          <NavLink>PORTFOLIO</NavLink>
        </a>
      </li>     
    </Div2>
      <Div3>
        <SocialIcons href="https://discord.gg/7HgnA8BNUu">
          <SiDiscord size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
