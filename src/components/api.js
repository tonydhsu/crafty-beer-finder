const fetchApi = (city) => {
  return fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
  .then(res => res.json())
}

export {fetchApi}