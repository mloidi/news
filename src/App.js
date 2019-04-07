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
  SearchArea,
  SearchTitle,
  SearchBy,
  Footer,
  PageTop,
  CountrySelector,
  Flag
} from './Style/Style';

class App extends Component {
  state = {
    category: null,
    categories: null,
    news: null,
    searchBy: '',
    country: 'us',
    countries: null
  };

  componentDidMount() {
    this.getTopHeadlines();
    this.setState({
      categories: NewsService.getCategories(),
      countries: NewsService.getCountries()
    });
  }

  getTopHeadlines = async (category, searchBy, country) => {
    await NewsService.getTopHeadlines(category, searchBy, country)
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

    const searchBy = this.state.searchBy;
    const country = this.state.country.code;
    this.getTopHeadlines(category, searchBy, country);
  };

  selectCountry = selectedCountryCode => {
    const countries = this.state.countries.map(country => {
      if (country.code === selectedCountryCode) {
        country.isActive = true;
      } else {
        country.isActive = false;
      }
      return country;
    });
    const country = countries.filter(country => {
      return country.isActive;
    })[0];
    this.setState({
      countries,
      country
    });
    const searchBy = this.state.searchBy;
    const category = this.state.category;
    this.getTopHeadlines(category, searchBy, country.code);
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    const category = this.state.category;
    const country = this.state.country.code;
    this.getTopHeadlines(category, value, country);
  };

  getActiveCountry = () => {
    if (this.state.countries) {
      const selectedCountry = this.state.countries.filter(country => {
        return country.isActive;
      });
      return selectedCountry.code;
    } else {
      return 'us';
    }
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            News about {this.state.category ? this.state.category : '...'}
          </title>
        </Helmet>
        <PageTop>
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
          <CountrySelector>
            News from
            {this.state.countries &&
              this.state.countries.map(country => (
                <div
                  key={country.code}
                  onClick={() => this.selectCountry(country.code)}
                >
                  <Flag
                    selected={country.isActive}
                    src={country.flag}
                    alt={country.code}
                  />
                </div>
              ))}
          </CountrySelector>
        </PageTop>
        <PageTitle>
          News about{' '}
          {this.state.category ? (
            <Link color="#ecd018" href={process.env.REACT_APP_HOME_URL}>
              {this.state.category}
            </Link>
          ) : (
            '...'
          )}
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
        <SearchArea>
          <SearchTitle>Or search</SearchTitle>
          <SearchBy
            type="text"
            id="searchBy"
            name="searchBy"
            value={this.state.searchBy}
            onChange={this.handleInputChange}
          />
        </SearchArea>
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
