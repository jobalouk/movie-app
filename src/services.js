export const getTv = (url) => {
  return fetch(url)
  .then((res) => {
    return res.json();
  }).catch((err) =>  {
      console.log(err);
  });
}

export const getMovie = (url) => {
  return fetch(url)
  .then((res) => {
    return res.json();
  }).catch((err) => {
      console.log(err);
  })
}
