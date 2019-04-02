import React, { Component } from 'react';
import styled from 'styled-components';

import { NewsService } from '../Service/news.service';
import New from '../Components/New';

const NewsContainer = styled.div`
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

const PageTitle = styled.h1`
  font-family: 'Monoton', cursive;
  margin: 3rem;
  padding: 1rem;
  font-size: 4rem;
  color: #ecd018;
  background-color: black;
  @media all and (max-width: 900px) {
    margin: 1rem;
    font-size: 2em;
  }
`;

export default class News extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.getTopHeadlines();
  }

  getTopHeadlines = async () => {
    await NewsService.getTopHeadlines()
      .then(response => {
        this.setState({
          news: response.articles
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <PageTitle>News about technology</PageTitle>
        <NewsContainer>
          {this.state.news &&
            Object.keys(this.state.news).map(key => (
              <New key={key} new={this.state.news[key]} />
            ))}
        </NewsContainer>
      </React.Fragment>
    );
  }
}
