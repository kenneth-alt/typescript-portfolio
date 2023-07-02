import React, { forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import AboutImg from "../../../assets/img/boy1.png";

const AboutMeContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-20
    pb-4
    pr-4
    pl-3
    md:pl-0
    md:pr-0
    bg-transparent
  `};
  z-index: 9;
`;

const ImgContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.div`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
    text-justify
  `};

    p {
      margin-bottom: 1em;
    }
`;

export const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <AboutMeContainer ref={ref}>
      <ImgContainer>
        <img src={AboutImg} />
      </ImgContainer>
      <InfoContainer>
        <Title>My Story: Innovating Bits and Bytes</Title>
        <InfoText>
          <p>After 4 years of experience working on engineering projects, I made a career transition to Software development, DevOps and cloud computing in 2019, giving me the opportunity to finally explore my deeply-rooted interest in technology that had remained latent until then. I am super passionate about technology and problem-solving, and have a lifelong learning attitude as a personal culture.</p>
      
          <p>My programming expertise includes JavaScript, Node.js, React, Express, MongoDB, Python, Flask, and MySQL. I have hands-on DevOps experience working with CI/CD pielines, cloud services, Docker, Kubernetes, and RESTful APIs. Additionally, I have a strong understanding of AWS and Azure cloud ecosystems, and I am proficient in infrastructure as code using Terraform and CloudFormation, configuration management with Ansible and scripting and automation using Bash and Python.</p>

          <p>I am committed to continuous learning to stay updated with the latest technology and industry standards. With my helpful personality, self-driven approach to problem-solving, and team spirit, I would be a valuable addition to any team seeking a skilled Software/DevOps Engineer.</p>
        </InfoText>
      </InfoContainer>
    </AboutMeContainer>
  );
});