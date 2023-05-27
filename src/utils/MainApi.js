export const BASE_URL = "https://api.movies.viznyi.nomoredomains.monster";

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
      name: name,
    }),
  }).then(getResponseData);
};

export const login = (email, password, name) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(getResponseData);
};

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(getResponseData);
};

export const updateUserInfo = (token, name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then(getResponseData);
};

export const likeMovie = (el) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: el.country,
      director: el.director,  
      duration: el.duration,
      year: el.year,
      description: el.description,
      image: `https://api.nomoreparties.co${el.image.url}`,
      trailerLink: el.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${el.image.formats.thumbnail.url}`,
      movieId: el.id,
      nameRU: el.nameRU,
      nameEN: el.nameEN,
    }),
  }).then(getResponseData);
};

export const disLikeMovie = (id) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(getResponseData);
};

export const getSavedMovies = () => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(getResponseData);
};
