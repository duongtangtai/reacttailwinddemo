
export const callSearchAPI = (searchInput, pageNum) => {
    const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=28774bb3&s=${searchInput}&page=${pageNum}`;
    //call api
    return fetch(API_URL)
      .then(resp => resp.json())
      .then(data => {
        return data.Search ?? [];
      })
      .catch(error => alert(error))
}