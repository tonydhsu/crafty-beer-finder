const fetchApi = (city) => {
  return fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
  .then(res => res.json())
}

const fetchDetail = (brewyId) => {
  return fetch(`https://api.openbrewerydb.org/breweries/${brewyId}`)
  .then(res => res.json())
}

export {fetchApi, fetchDetail}