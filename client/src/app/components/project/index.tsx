import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { faEye, faExternalLinkAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IProject } from "../../../typings/project";

interface IProjectProps extends IProject {}

const ProjectContainer = styled.div`
  width: 16.5em;
  min-height: 20em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    bg-white
    rounded-md
    m-3
  `};
  > * {
    flex: 1;
  }
`;

const ProjectThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const DetailsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-between
    p-2
  `};
`;

const NameDescriptionContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-between
  `};
`;

const ProjectName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `};
`;

const DescriptionText = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const LinksContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-start
  `};
`;

const LinksDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const LinksDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const LinksInfo = styled.p`
  ${tw`
    text-gray-400
    inline-flex
    text-xs
    font-thin
  `};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;


export function Project(props: IProjectProps) {
  const {
    imgSrc,
    name,
    summary,
    description,
    websiteLink,
    githubLink,
  } = props;

  return (
    <ProjectContainer>
      <ProjectThumbnail>
        <img src={imgSrc} />
      </ProjectThumbnail>

      <DetailsContainer>

        <NameDescriptionContainer>
          <ProjectName>{name}</ProjectName>
          <DescriptionText>
            <SmallText>{summary}</SmallText>
          </DescriptionText>
        </NameDescriptionContainer>
        
        <LinksContainer>
          <Seperator />
          <LinksDetailsContainer>

            <LinksDetail>
              <SmallIcon>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </SmallIcon>
            </LinksDetail>

            <LinksDetail>
              <SmallIcon>
                <FontAwesomeIcon icon={faGithub} />
              </SmallIcon>
              <LinksInfo><a href={githubLink} target="blank" rel="noopener noreferrer">github repo</a></LinksInfo>
            </LinksDetail>

          </LinksDetailsContainer>

        </LinksContainer>
      </DetailsContainer>
    </ProjectContainer>
  );
}
