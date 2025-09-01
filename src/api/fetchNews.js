const NEWS_API = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNews(pageCards) {
  const response = await fetch(
    `https://nepi.org/v2/everything?q=weather&pageSize=4&page=${pageCards}&apiKey=${NEWS_API}`
  );
  const data = await response.json();
  return [...data.articles] || [];
}
