import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        We are growth<br />
        partners who care about you and your success
        </SectionTitle>
        <SectionText>
        AspireWebFX was founded on the conviction that businesses can successfully outshine their competitors with a strong website and an effective online marketing strategy. We provide businesses with expert online marketing and proven results.
        </SectionText>
        <Button onClick={props.handleClick}><a href="https://discord.com/invite/7HgnA8BNUu"><font color="white">Contact US!</font></a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;