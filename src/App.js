import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { NewsService } from './Service/news.service';
import { Articles } from './Components/Articles';
import { Countries } from './Components/Countries';
import { Categories } from './Components/Categories';
import Loading from './Components/Loading';
import {
  Page,
  PageTitle,
  Link,
  // SearchArea,
  // SearchTitle,
  // SearchBy,
  PageTop,
} from './Style/Style';

const App = () => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState(null);
  const [searchBy, setSearchBy] = useState('');

  const [clearCategory, setClearCategory] = useState(false);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const queryParams = {
      topic: category,
      search: searchBy,
      country,
    };
    if (
      (!queryParams.topic && queryParams.search !== '') ||
      (queryParams.topic && queryParams.search === '') ||
      (!queryParams.topic && queryParams.search === '')
    ) {
      setLoading(true);
      NewsService.getTopHeadlines(queryParams)
        .then((response) => {
          setLoading(false);
          setArticles(response.articles);
        })
        .catch((error) => {
          console.error(error);
        });
      if (queryParams.topic) {
        setSearchBy('');
      }
      // if (searchBy !== '') {
      //   setCategory(null);
      //   setClearCategory(true);
      // }
    } else {
      console.log('dont search');
    }
  }, [country, searchBy, category]);

  return (
    // <Page loading={loading}>
    <Page>
      <Helmet>
        <title>News about {category ? category : '...'}</title>
      </Helmet>
      {loading && <Loading />}
      <PageTop>
        <Countries selectCountry={setCountry} />
      </PageTop>
      <PageTitle>
        News about{' '}
        {category ? (
          <Link
            color='#ecd018'
            onClick={() => {
              setCategory(null);
              setClearCategory(true);
            }}
          >
            {category}
          </Link>
        ) : (
          '...'
        )}
      </PageTitle>
      <Categories
        selectCategory={setCategory}
        clearCategory={clearCategory}
        setClearCategory={setClearCategory}
      />
      {/* <SearchArea>
        <SearchTitle>Or search</SearchTitle>
        <SearchBy
          type='text'
          id='searchBy'
          name='searchBy'
          value={searchBy}
          onChange={(event) => {
            setSearchBy(event.target.value);
          }}
        />
      </SearchArea> */}
      <Articles articles={articles} />
    </Page>
  );
};

export default App;
