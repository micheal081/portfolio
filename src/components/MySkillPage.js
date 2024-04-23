import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    margin-left: 2rem;
  }
`;

const MySkillPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Backend Engineer
          </Title>
          <Description>
            <strong>Skills</strong>
            <p>
              Node.Js, PHP, Python, NestJs, Express, Typescript, PostgresSql,
              MySql, MongoDB, DynamoDB, Prisma, TypeORM, Amazon AWS, ETL, Redis,
              Kafka, RabbitMQ, Azure, GCP, Apache, Nginx, Husky, Serverless,
              GraphQL, Terraform, CI/CD Pipelines, DigitalOcean
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, GitLaab, Codepen etc.</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend, Blockchain & AI
          </Title>
          <Description>
            <strong>Skills</strong>
            <p>
              ReactJs, Redux, JavaScript, TypeScript, TailwindCSS, React Native,
              NextJs, openAI, meta AI, gemini AI, Python, Solidity, TensorFlow, Moralis etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Make, VScode, Remix, Cloud Computing, Microsoft Excel etc.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillPage;
