import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import {styled} from '@mui/material/styles';
import { Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';


const MainDiv = styled('div')(({theme}) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: '2rem',
  padding: '1rem',
  paddingTop: '2rem',

  [theme.breakpoints.up('sm')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2, 60px)',
    gridColumnGap: '0.5rem',
    gridRowGap: '0.5rem',
  },
}));

const Header = () =>  (
  <MainDiv>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color:"white", marginBottom: "20px" }}>
          <DiCssdeck size="3rem" /> <span>Ahmad Hawamdah</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ahmadhawamdah">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ahmad-hawamdah-587b47105/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/blushtuch/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </Div3>
    </MainDiv>
);

export default Header;
