import React from 'react';
import styled from 'styled-components';

import { formatDate } from '../Common/Util';

const Polaroid = styled.div`
  width: 80%;
  background-color: white;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2),
  0 0.5rem 1rem 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 1rem;
  @media all and (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.div`
  text-align: center;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Author = styled.div`
  text-align: center;
  padding: 0 1.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const PublishedAt = styled.div`
  text-align: center;
  padding: 0 1.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const Description = styled.p`
  text-align: center;
  padding: 1rem 1.5rem;
  color: gray;
  word-wrap: break-word;
`;

const Image = styled.img`
  width: 100%;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  border-bottom: 2px solid #ecd018;
`;

const New = props => (
  <Polaroid>
    <Image src={props.new.urlToImage} />
    <Title>
      {props.new.url ? (
        <Link target="_blank" rel="noopener noreferrer" href={props.new.url}>
          {props.new.title}
        </Link>
      ) : (
        <React.Fragment>{props.item.title}</React.Fragment>
      )}
    </Title>
    <Details>
      {props.new.author ? <Author>By {props.new.author}</Author> : <div />}
      <PublishedAt>{formatDate(props.new.publishedAt)}</PublishedAt>
    </Details>
    <Description>{props.new.description}</Description>
  </Polaroid>
);

export default New;
