import React from 'react';
import styled from 'styled-components';

import { formatDate } from '../Common/Util';

const Container = styled.article`
  width: 80%;
  background-color: white;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2),
    0 0.5rem 1rem 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2),
      0 1rem 2rem 0 rgba(0, 0, 0, 0.19);
  }
  @media all and (max-width: 900px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  text-shadow: 3px 2px #ecd018;
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

const goTo = (url) => {
  window.open(url, '_blank');
};


export const Article = ({ article }) => (
  <Container onClick={() => goTo(article.url)}>
    <Image src={article.image} />
    <Title>{article.title}</Title>
    <Details>
      {(article.source) ? (
        <Author>from {article.source.name}</Author>
      ) : (
        <div />
      )}
      <PublishedAt>{formatDate(article.publishedAt)}</PublishedAt>
    </Details>
    {(article.description) ? (
      <Description>{article.description}</Description>
    ) : (
      <div />
    )}
  </Container>
);
