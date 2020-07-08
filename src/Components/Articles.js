import React from 'react';
import styled from 'styled-components';

import { Article } from './Article';

const Container = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  align-content: start;
  justify-content: space-around;
  grid-column-gap: 1rem;
  margin: 4rem;
  @media all and (max-width: 900px) {
    grid-template-columns: 100%;
    margin: 1rem;
  }
`;

export const Articles = ({ articles }) => {
  return (
    <Container>
      {articles
        ? Object.keys(articles).map((key) => (
            <Article key={key} article={articles[key]} />
          ))
        : 'Select a category to see the articles'}
    </Container>
  );
};
