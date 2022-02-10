import React from 'react';
// import blushtuch from "public/images/blushtuch.png";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      
          <BlogCard style = {{paddingBottom: '20px'}}>
          <Img src= "images/blushtuch.png"/>
            <TitleContent>
              <HeaderThree title>Blushtuch</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">A Client is able to look for artists in their area and book appointments through the app for the services of Nails, Hair Removal, Makeup, Hairstyle, & Lashes. Providing the following features: reviews, rating,  filtering, calendar booking, messaging, and a stripe API for a payment system.</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
              React &nbsp; Material UI &nbsp; Google APIs &nbsp; Firebase
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href= "https://www.blushtuch.com">Source</ExternalLinks>
            </UtilityList>
          </BlogCard>

          <BlogCard style = {{paddingBottom: '20px'}}>
          <Img src= "images/mario.png"/>
            <TitleContent>
              <HeaderThree title>Simple Mario Game</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info"> a Simple Mario that shows the power of HTML5 Canvas in combination with JavaScript. It focuses on JavaScript positioning on the screen while utilizing constructors and classes. a player is able to win when reaching a certain position on the screen.</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
              HTML 5 Canvas &nbsp; JavaScript
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href= "https://www.blushtuch.com">Source</ExternalLinks>
            </UtilityList>
          </BlogCard>

          <BlogCard style = {{paddingBottom: '20px'}}>
          <Img src= "images/MWST.png" style= {{height: "200px"}}/>
            <TitleContent>
              <HeaderThree title>Minimum Weight Spanning Tree</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">In this program, implementation of a Graph ADT and associated algorithms Minimum Weight Spanning Trees in C. The adjacency list representation of a graph consists of an array of Lists. Each List corresponds to a vertex in the graph and gives the neighbors of that vertex.</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                C &nbsp; C++ &nbsp; Makefile
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href= "https://github.com/ahmadhawamdah/MWST.git">Code</ExternalLinks>
            </UtilityList>
          </BlogCard>


          <BlogCard style = {{paddingBottom: '20px'}}>
          <Img src= "images/BFSDFS.png"/>
            <TitleContent>
              <HeaderThree title>BFS and DFS</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">In both of these programs, implementation of a Graph ADT and associated algorithms Depth First Search and Breadth First Search in C. The adjacency list representation of a graph consists of an array of Lists. Each List corresponds to a vertex in the graph and gives the neighbors of that vertex.</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                C &nbsp; C++ &nbsp; Makefile
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href= "https://github.com/ahmadhawamdah/BFS">BFS</ExternalLinks>
              <ExternalLinks href= "https://github.com/ahmadhawamdah/DFS">DFS</ExternalLinks>
            </UtilityList>
          </BlogCard>

          <BlogCard style = {{paddingBottom: '20px'}}>
          <Img src= "images/mailbox.png"/>
            <TitleContent>
              <HeaderThree title>Mailbox (Gmail Clone)</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info"> This is an end to end full stack and a fully responsive web application. a user name Authentication is implemented utilizing JSON tokens and local storage. Swagger UI is used to show communication with PostgreSQL Database and Docker for container deployement. </CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                JavaScript &nbsp; Material UI &nbsp; Express.js Middleware &nbsp; PostgreSQL &nbsp; Docker
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href= "https://youtu.be/K5IYgt2tUyY">Preview</ExternalLinks>
              <ExternalLinks href= "https://github.com/ahmadhawamdah/Mailbox.git">Code</ExternalLinks>
            </UtilityList>
          </BlogCard>

          <BlogCard style = {{paddingBottom: '20px'}}>
          <Img src= "images/airbnb.png"/>
            <TitleContent>
              <HeaderThree title>Airbnb Clone</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info"> This is an Airbnb replica done using React.js with the power of the highest end technologies such as TailwindCSS and the server side rendering  Next JS. Next.js is a super efficient web development framework, built on React. It handles both client-side and server-side code, making it a great tool for most web apps.</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                React.js &nbsp; TailwindCSS &nbsp; Next.js
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href= "https://airbnb-replica.vercel.app/">Preview</ExternalLinks>
              <ExternalLinks href= "https://github.com/ahmadhawamdah/airbnb-replica">Code</ExternalLinks>
            </UtilityList>
          </BlogCard>

          
    </GridContainer>
  </Section>
);

export default Projects;