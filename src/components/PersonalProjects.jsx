import React from 'react';
import { CiLink } from "react-icons/ci";
import styled from 'styled-components';

const Card = styled.div`
  height: 250px;
  width: 380px;
  padding: 20px;
  margin: 20px;
  position: relative;
  overflow: hidden;
  text-align: center;
  background: black;
  box-shadow: 
    15px 30px 40px rgba(255, 0, 0, 0.3),
    inset -20px -20px 25px rgba(255, 255, 255, 10); 
  border-radius: 100% 70% 37% 63% / 48% 42% 58% 52%;
  transition: 0.5s ease-in-out;
  &:hover {
    border: 2px solid black;
  }
`;

const Upper = styled.div`
  margin: -35px;
  padding-bottom: 10px;
  padding-top: 10px;
  background: black;
`;

const Pra = styled.div`
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 25px;
`;

const TechnologyBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap-x: 1.5px;
  padding: 1.5px 3px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background-color: black;
  color: black;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 6px;
  color: #4a5568;
  font-weight: 500;
  &:hover {
    color: #e53e3e;
  }
`;

function Project({ title, description, technologies, link, github }) {
  return (
    <Card>
      <Upper className="orange">
        <div className="flex gap-2 overflow-x-scroll py-2">
          {technologies.split(",").map((tech, index) => (
            <TechnologyBadge key={index}>
              {tech}
            </TechnologyBadge>
          ))}
        </div>
      </Upper>
      <Pra>
        <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4">
          {title}
        </h3>
        <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
          {description}
        </p>
        <LinkContainer>
          <a href={link} className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300">
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">
              View Project
            </span>
          </a>
          <a href={github} className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300">
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">
              View Github
            </span>
          </a>
        </LinkContainer>
      </Pra>
    </Card>
  );
}

export default Project;
