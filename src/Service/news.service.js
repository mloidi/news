const url =
  process.env.REACT_APP_NEWS_URL +
  'top-headlines?country=us&category=technology&sortBy=popularity' +
  '&apiKey=' +
  process.env.REACT_APP_NEWS_API;

export const NewsService = {
  getTopHeadlines: async () => {
    let res;
    const req = new Request(url);
    await fetch(req)
      .then(response => {
        res = response.json();
      })
      .catch(error => {
        throw error;
      });
    return res;
  }
};
