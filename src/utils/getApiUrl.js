export const apiUrlTypes = {
  news: "NEWS",
  global: "GLOBAL",
};

export const getApiUrl = ({ type, category, searchItem }) => {
  if (type === apiUrlTypes.news) {
    return `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.API_KEY}`;
  } else {
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchItem}&api-key=${process.env.API_KEY}`;
  }
};
