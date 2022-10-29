import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 25, text: 'Projects'},
  { number: 5, text: 'Minting Dapp', },
  { number: 6, text: 'Website', },
  { number: 2, text: 'Staking/Contract', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>WORK EXPERIENCE</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
