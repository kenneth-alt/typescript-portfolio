import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { IProject } from "../../../typings/project";
import { Project } from "../../components/project";


const TopProjectsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pt-20
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const ProjectsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const DotsContainer = styled.div`
  ${tw`
    mt-4
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;


export const TopProjects = forwardRef<HTMLDivElement>((props, ref) => {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const testProject1: IProject = {
    imgSrc: "https://media.istockphoto.com/id/481574937/photo/calgary-skyline.jpg?s=1024x1024&w=is&k=20&c=41AF5Hlf3a5YkINowR0dv13Oj-YdbVulKOtYcdPxTDg=", 
    name: "Project 1", 
    summary: "Responsive fullstack business website using React.js, GraphQL, Typescript, Tailwindcss, Node.js, Express.js, Nest.js, TypeORM, Docker and VPS.", 
    description: "",
    websiteLink: "https://github.com/kenneth-alt", 
    githubLink: "https://github.com/kenneth-alt",
  };

  const testProject2: IProject = {
    imgSrc: "https://media.istockphoto.com/id/481574937/photo/calgary-skyline.jpg?s=1024x1024&w=is&k=20&c=41AF5Hlf3a5YkINowR0dv13Oj-YdbVulKOtYcdPxTDg=", 
    name: "Project 2", 
    summary: "Responsive fullstack business website using React.js, GraphQL, Typescript, Tailwindcss, Node.js, Express.js, Nest.js, TypeORM, Docker and VPS.", 
    description: "",
    websiteLink: "https://github.com/kenneth-alt", 
    githubLink: "https://github.com/kenneth-alt",
  };

  const projects = [
    <Project {...testProject1} />,
    <Project {...testProject2} />,
    <Project {...testProject1} />, 
    <Project {...testProject2} />,
    <Project {...testProject1} />, 
  ];

  const numberOfDots = isMobile ? projects.length : Math.ceil(projects.length / 3);

  return (
    <TopProjectsContainer ref={ref}>
      <Title>Explore My Latest Projects</Title>
      <ProjectsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={projects}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <DotsContainer>
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </DotsContainer>
        
      </ProjectsContainer>
    </TopProjectsContainer>
  )
});
