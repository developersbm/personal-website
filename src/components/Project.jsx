import React from 'react';
import { CiLink } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import styled from 'styled-components';

const Card = styled.div`
  height: auto;
  max-height: 450px;
  width: 93%;
  max-width: 600px;
  padding: 20px;
  margin: 20px;
  position: relative;
  overflow: hidden;
  background: black;
  box-shadow: 
    15px 15px 20px rgba(255, 0, 0, 0.3),
    inset -20px -20px 25px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    box-shadow: 0 0 15px 1px rgba(255, 0, 0, 0.5);
  }
`;

const Upper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 10px;
  padding-top: 10px;
  background: black;
`;

const Title = styled.h3`
  font-size: 24px;
  color: white;
  text-align: left;
  margin: 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0;
`;

const Pra = styled.div`
  font-size: 17px;
  line-height: 24px;
  color: white;
  margin-bottom: 25px;
  text-align: left;
`;

const TechnologyBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap-x: 1.5px;
  padding: 3px 7px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background-color: black;
  color: white;
  box-shadow: 0 0 15px 1px rgba(255, 0, 0, 0.5);
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

function Project({ title, description, image, technologies, link, github }) {
  return (
    <Card>
    <Upper>
      <div className="flex gap-2 overflow-x-scroll py-2">
        {technologies.split(",").map((tech, index) => (
          <TechnologyBadge key={index}>
            {tech}
          </TechnologyBadge>
        ))}
      </div>
    </Upper>
    <Pra>
      <Title>{title}</Title>
      <br/>
      <img className="opacity-90 rounded-lg" src={image} alt={title} />
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>
      <div className='flex'>
      {link !== "NA" && (
          <LinkContainer>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex gap-2 mt-4 mr-5 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
              <span className="text-xs self-center">
                Website
              </span>
            </a>
          </LinkContainer>
        )}
        {github !== "NA" && (
        <LinkContainer>
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300">
        <SiGithub className="text-2xl self-center" />
            <span className="text-xs self-center">
              Github
            </span>
          </a>
        </LinkContainer>
        )}
      </div>
    </Pra>
  </Card>
  );
}

export default Project;
