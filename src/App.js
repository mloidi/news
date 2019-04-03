import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { NewsService } from './Service/news.service';
import New from './Components/New';
import Button from './Components/Button';
import {
  NewsContainer,
  PageTitle,
  CategoryTitle,
  Link,
  Category,
  Footer
} from './Style/Style';

class App extends Component {
  state = {
    category: null,
    categories: null,
    news: null
  };

  componentDidMount() {
    this.setState({
      categories: NewsService.getCategories()
    });
  }

  getTopHeadlines = async category => {
    await NewsService.getTopHeadlines(category)
      .then(response => {
        this.setState({
          news: response.articles
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  selectCategory = e => {
    const category = e.target.id;
    let categories = this.state.categories;
    categories.forEach(category => (category.isActive = false));

    const index = categories.findIndex(
      category => category.name === e.target.id
    );
    categories[index].isActive = true;
    this.setState({
      category
    });
    this.getTopHeadlines(category);
  };
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            News about {this.state.category ? this.state.category : '...'}
          </title>
        </Helmet>
        <PageTitle>
          News about {this.state.category ? this.state.category : '...'}
        </PageTitle>
        <CategoryTitle>Select a category</CategoryTitle>
        <Category>
          {this.state.categories &&
            this.state.categories.map(category => (
              <Button
                key={category.name}
                category={category}
                selectCategory={this.selectCategory}
              />
            ))}
        </Category>
        <NewsContainer>
          {this.state.news
            ? Object.keys(this.state.news).map(key => (
                <New key={key} new={this.state.news[key]} />
              ))
            : 'Select a category to see the news'}
        </NewsContainer>
        <Footer>
          <div>
            Powered by{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://newsapi.org"
            >
              NewsApi.org
            </Link>
          </div>
        </Footer>
      </React.Fragment>
    );
  }
}

export default App;
