export const NewsService = {
  getTopHeadlines: async (category, searchBy, country) => {
    let res;
    const url =
      process.env.REACT_APP_NEWS_URL +
      'top-headlines?country=' +
      (country ? country : 'us') +
      (category ? '&category=' + category : '') +
      (searchBy ? '&q=' + searchBy : '') +
      '&pageSize=100' +
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
    return [
      { name: 'entertainment', isActive: false },
      { name: 'business', isActive: false },
      { name: 'general', isActive: false },
      { name: 'health', isActive: false },
      { name: 'science', isActive: false },
      { name: 'sports', isActive: false },
      { name: 'technology', isActive: false }
    ];
  },
  getCountries: () => {
    return [
      {
        code: 'us',
        isActive: true,
        flag:
          'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_50/v1554644169/mloidi/us.png'
      },
      {
        code: 'ca',
        isActive: false,
        flag:
          'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_50/v1554644169/mloidi/ca.png'
      }
    ];
  }
};
