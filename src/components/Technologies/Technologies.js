import React from 'react';
import { DiFirebase, DiReact, DiZend , DiCodeigniter, DiGoogleAnalytics} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>SKILLS</SectionTitle>
    <SectionText>
      02/2019 - 10/2022 <br />
      Achievements/Tasks
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Senior Front-End Developer</ListTitle>
          <ListParagraph>
            Experiece with Minting Dapp <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodeigniter size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Marketing Manager</ListTitle>
          <ListParagraph>
            Controls all the promotional and market research/study activity of the company
            experiece with leading of an internal team.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Senior Back-End Developer</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX Designer for a game on-chain</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGoogleAnalytics size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Staking/Contract</ListTitle>
          <ListParagraph>
            Experience with <br />
            Deploying contract from $Aptos/Solana/ETH blockchain.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
