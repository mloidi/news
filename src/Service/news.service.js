// const url =
//   process.env.REACT_APP_NEWS_URL +
//   'top-headlines?country=us&category=technology&sortBy=popularity' +
//   '&apiKey=' +
//   process.env.REACT_APP_NEWS_API;

export const NewsService = {
  getTopHeadlines: async category => {
    let res;
    const url =
      process.env.REACT_APP_NEWS_URL +
      'top-headlines?country=us&category=' +
      category +
      '&sortBy=popularity' +
      '&apiKey=' +
      process.env.REACT_APP_NEWS_API;
    const req = new Request(url);
    await fetch(req)
      .then(response => {
        res = response.json();
      })
      .catch(error => {
        throw error;
      });
    return res;
  },
  getCategories: () => {
    const categories = [
      { name: 'entertainment', isActive: false },
      { name: 'business', isActive: false },
      { name: 'general', isActive: false },
      { name: 'health', isActive: false },
      { name: 'science', isActive: false },
      { name: 'sports', isActive: false },
      { name: 'technology', isActive: false }
    ];
    return categories;
  }
};
