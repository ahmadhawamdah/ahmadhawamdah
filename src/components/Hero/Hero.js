import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Development Cave
        </SectionTitle>
        <SectionText>
      
        My experience in the industry revolves around bootstrapping and building projects from the ground up. In addition to, empowering, delegating, cross-training, and leading software development teams. 
        Furthermore, I maintained, tested, improved, and scaled existing agile projects. 
     
        </SectionText>

       
        <Button onClick={()=> window.open("https://docs.google.com/document/d/1ZorFFBn_s3qh9xmdMnCdBz_KKDgEjn_JUcOkCXIg2W4/edit?usp=sharing", "_blank")}> Learn More</Button>
 
      </LeftSection>
    </Section>
  </>
);

export default Hero;