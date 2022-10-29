import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      </LinkList>
        <CompanyContainer>
          <Slogan>Copyright © AspireWebFX</Slogan>
        </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;
