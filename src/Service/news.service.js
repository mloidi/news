export const NewsService = {
  getTopHeadlines: async (queryParams) => {
    try {
      const showNewsBy = queryParams.search
        ? 'search'
        : queryParams.topic
        ? `topics/${queryParams.topic}`
        : 'top-news';

      const url =
        process.env.REACT_APP_NEWS_URL +
        showNewsBy +
        '?country=' +
        (queryParams.country ? queryParams.country : 'us') +
        (queryParams.search ? '&q=' + queryParams.search : '') +
        '&token=' +
        process.env.REACT_APP_NEWS_API;

      const response = await fetch(url);
      const res = await response.json();
      return res;
    } catch (e) {
      throw e;
    }
  },
};
