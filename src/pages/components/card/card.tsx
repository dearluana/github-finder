import React from "react";
import {
  About,
  CardBox,
  CardContainer,
  Column,
  GitInfoContainer,
  InfoContainer,
  Line,
  Name,
  ProfileHeader,
  ProfileImage,
  StatsContainer,
  Total,
  Username,
} from "./card.styled";
import { useHomeContext } from "pages/home";
import { GrBusinessService, GrContact, GrGithub, GrLocation } from "react-icons/gr";

const Card: React.FC = () => {
  const { github } = useHomeContext();
  return (
    <CardContainer>
      <CardBox>
        <ProfileHeader>
          <ProfileImage src={github?.avatar_url} alt="github-image" />
          <Column>
            <Name>{github?.name}</Name>
            <Username>@{github?.login}</Username>
            <About>{github?.bio}</About>
          </Column>
        </ProfileHeader>
        <InfoContainer>
          <About>
            <GrLocation />
            {github?.location || "Em algum lugar do mundo"}
          </About>
          <About>
          <GrBusinessService />
            {github?.company || "Sem empresa :("}
          </About>
          <About>
  <a href={github?.blog} target="_blank" rel="noopener noreferrer">
    <GrContact />
    <span title={github?.blog || "Sem blog :("}>Personal Blog</span>
  </a>
</About>
<About>
  <a href={github?.html_url} target="_blank" rel="noopener noreferrer">
  <GrGithub />
    <span title={github?.html_url || "Sem GitHub :("}>GitHub</span>
  </a>
</About>

        </InfoContainer>
        <Line />
        <GitInfoContainer>
          <StatsContainer>
            <Total>{github?.public_repos}</Total>
            <About>Repos</About>
          </StatsContainer>
          <StatsContainer>
            <Total>{github?.followers}</Total>
            <About>Followers</About>
          </StatsContainer>
          <StatsContainer>
            <Total>{github?.following}</Total>
            <About>Following</About>
          </StatsContainer>
        </GitInfoContainer>
      </CardBox>
    </CardContainer>
  );
};

export default Card;
