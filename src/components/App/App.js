import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import {
  register,
  login,
  getUserInfo,
  updateUserInfo,
  likeMovie,
  getSavedMovies,
  disLikeMovie,
} from "../../utils/MainApi";

import { getAllMovies } from "../../utils/MoviesApi";

function App() {
  const { pathname } = useLocation();
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const [filmsToShow, setFilmsToShow] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedFilmsToShow, setSavedFilmsToShow] = useState([]);
  const [savedSearchedErr, setSavedSearchedErr] = useState("");
  const [filtredArrByInput, setFiltredArrByInput] = useState(
    JSON.parse(localStorage.getItem("sortedArrByInput")) || []
  );
  const [sortedArr, setSortedArr] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [userInfo, setUserInfo] = useState({});
  const [searchErr, setSearchErr] = useState("");
  const [searchedErr, setSearchedErr] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [popupIsopen, setPopupIsopen] = useState(false);
  const [popupIsOk, setPopupIsOk] = useState(true);
  const [popupMessage, setPopupMessage] = useState("");
  const hasWindow = typeof window !== "undefined";
  let isSaved = pathname === "/saved-movies";

  function handleToggleBurger() {
    setIsBurgerActive(!isBurgerActive);
  }

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const moviesArr = pathname === "/saved-movies" ? savedMovies : sortedArr;

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    history("/");
    setFiltredArrByInput({});
    setSortedArr([]);
    setFilmsToShow([]);
    localStorage.removeItem("movies");
    localStorage.removeItem("token");
    localStorage.removeItem("sortedArrByInput");
    localStorage.clear();
    setUserInfo(null);
  }, [history]);

  const handleGetMe = useCallback(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      getUserInfo(token)
        .then((res) => {
          setUserInfo(res.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = useCallback(
    ({ email, password }) => {
      setIsLoading(true);
      login(email, password)
        .then((res) => {
          if (res.jwt) {
            localStorage.setItem("token", res.jwt);
            setIsLoggedIn(true);
            handleGetMe();
            setSearchErr("");
            history("/movies");
          }
        })
        .catch((err) => {
          console.log(err);
          setSearchErr(err);
          setPopupIsopen(true);
          setPopupMessage(err);
          setPopupIsOk(false);
          setTimeout(() => setPopupIsopen(false), 2000);
          setTimeout(() => setPopupMessage(""), 3000);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [history, handleGetMe]
  );

  const handleRegister = useCallback(
    ({ email, password, name }) => {
      setIsLoading(true);
      register(email, password, name)
        .then((res) => {
          console.log(res);
          handleLogin({ email, password });
          setSearchErr("");
        })
        .catch((err) => {
          console.log(err);
          setSearchErr(err);
          setPopupIsopen(true);
          setPopupMessage(err);
          setPopupIsOk(false);
          setTimeout(() => setPopupIsopen(false), 2000);
          setTimeout(() => setPopupMessage(""), 3000);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [handleLogin]
  );

  const handleGetAllMovies = useCallback(() => {
    setIsLoading(true);
    return getAllMovies()
      .then((res) => {
        console.log(res);
        setSearchErr("");
        setSearchedErr("");
        localStorage.setItem("allMovies", JSON.stringify(res));
        return res;
      })
      .catch((err) => {
        setSearchedErr(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleGetSavedMovies = useCallback(() => {
    setIsLoading(true);
    getSavedMovies()
      .then((res) => {
        setSavedMovies(res.data);
        setSavedFilmsToShow(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleFilmsToShow = useCallback(
    (arr) => {
      if (arr) {
        if (width > 769) {
          const newFilms = arr.slice(0, 16);
          setFilmsToShow(newFilms);
        }
        if (500 < width && width < 769) {
          const newFilms = arr.slice(0, 8);
          setFilmsToShow(newFilms);
        }
        if (width < 500) {
          const newFilms = arr.slice(0, 5);
          setFilmsToShow(newFilms);
        }
      }
    },
    [width]
  );

  const filterByInput = useCallback(
    (arr, value) => {
      const newArr = arr.filter((movie) => {
        const ruName = movie.nameRU.toLowerCase();
        const enName = movie.nameEN.toLowerCase();
        const inputValue = value.toLowerCase();
        return ruName.includes(inputValue) || enName.includes(inputValue);
      });
      if (!isSaved) {
        localStorage.setItem("sortedArrByInput", JSON.stringify(newArr));
        setFiltredArrByInput(newArr);
        setSortedArr(newArr);
      }
      return newArr;
    },
    [isSaved]
  );

  const filterByCheckBox = useCallback((arr, checked) => {
    localStorage.setItem("checked", checked);
    if (checked) {
      const newArr = arr.filter((movie) => movie.duration <= 40);
      setSortedArr(newArr);
      localStorage.setItem("movies", JSON.stringify(newArr));

      if (!newArr.length > 0) {
        setSearchedErr("Ничего не найдено");
      } else {
        setSearchedErr("");
      }
      return newArr;
    } else {
      const sortedByInput = JSON.parse(
        localStorage.getItem("sortedArrByInput")
      );
      setSortedArr(sortedByInput);
      localStorage.setItem("movies", JSON.stringify(sortedByInput));
      if (!sortedByInput.length > 0) {
        setSearchedErr("Ничего не найдено");
      } else {
        setSearchedErr("");
      }
      return arr;
    }
  }, []);

  const filterAllMovies = useCallback(
    (value, checked, arr) => {
      let filtredArr = filterByInput(arr, value);
      setSortedArr(filtredArr);
      if (checked) {
        filtredArr = filterByCheckBox(filtredArr, checked);
        setSortedArr(filtredArr);
      }
      handleFilmsToShow(filtredArr);
      if (!filtredArr.length > 0) {
        setSearchedErr("Ничего не найдено");
      } else {
        setSearchedErr("");
      }
      localStorage.setItem("input", value);
      localStorage.setItem("movies", JSON.stringify(filtredArr));
    },
    [filterByCheckBox, handleFilmsToShow, filterByInput]
  );

  const handleCheckBoxClick = useCallback(
    (checked) => {
      const sortedByInput = JSON.parse(
        localStorage.getItem("sortedArrByInput")
      );
      if (sortedByInput) {
        const newArr = filterByCheckBox(filtredArrByInput, !checked);
        handleFilmsToShow(newArr);
      }
    },
    [filterByCheckBox, filtredArrByInput, handleFilmsToShow]
  );

  const searchAndFilterAllMovies = useCallback(
    (value, checked) => {
      const allMoviesFromLocal = JSON.parse(localStorage.getItem("allMovies"));
      if (!allMoviesFromLocal) {
        handleGetAllMovies().then((res) => {
          console.log(res);
          if (res) {
            filterAllMovies(value, checked, res);
          }
        });
      } else if (allMoviesFromLocal) {
        filterAllMovies(value, checked, allMoviesFromLocal);
      }
    },
    [handleGetAllMovies, filterAllMovies]
  );

  function handleMoreFilms() {
    const arr = filtredArrByInput;
    let moreMoviesToShow = [];
    const showMoviesLength = filmsToShow.length;

    if (width > 769) {
      moreMoviesToShow = arr.slice(showMoviesLength, showMoviesLength + 4);
    } else {
      moreMoviesToShow = arr.slice(showMoviesLength, showMoviesLength + 2);
    }

    setFilmsToShow([...filmsToShow, ...moreMoviesToShow]);
  }

  const handleFilterByCheckBoxSavedMovies = useCallback((arr, checked) => {
    localStorage.setItem("savedChecked", checked);
    if (checked) {
      const newArr = arr.filter((movie) => movie.duration <= 40);
      setSavedFilmsToShow(newArr);
      if (!newArr.length > 0) {
        setSavedSearchedErr("Ничего не найдено");
      } else {
        setSavedSearchedErr("");
      }
      return;
    } else {
      return arr;
    }
  }, []);

  const handleFilterSavedMovies = useCallback(
    (value, checked) => {
      const filtredArr = filterByInput(savedMovies, value);
      if (checked) {
        return handleFilterByCheckBoxSavedMovies(filtredArr, checked);
      }
      setSavedFilmsToShow(filtredArr);

      if (!filtredArr.length > 0) {
        setSavedSearchedErr("Ничего не найдено");
      } else {
        setSavedSearchedErr("");
      }
    },
    [filterByInput, savedMovies, handleFilterByCheckBoxSavedMovies]
  );

  const handleSavedCheckBoxClick = useCallback(
    (checked) => {
      if (!checked) {
        handleFilterByCheckBoxSavedMovies(savedMovies, !checked);
      } else {
        setSavedFilmsToShow(savedMovies);
        setSavedSearchedErr("");
      }
    },
    [handleFilterByCheckBoxSavedMovies, savedMovies]
  );

  const handleLikeCard = useCallback((el) => {
    likeMovie(el)
      .then((res) => {
        setSavedMovies((movies) => [...movies, res.data]);
        setSavedFilmsToShow((movies) => [...movies, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDisLikeCard = useCallback(
    (card, inSaved) => {
      const movie = savedMovies.find((el) => el.movieId === card.id);
      const movieId = inSaved ? card._id : movie._id;
      disLikeMovie(movieId)
        .then((res) => {
          console.log(res);
          setSavedMovies((movies) => {
            return movies.filter((el) => el._id !== res.data._id);
          });
          setSavedFilmsToShow((movies) => {
            return movies.filter((el) => el._id !== res.data._id);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [savedMovies]
  );

  const handleCheckLike = useCallback(
    (id) => {
      return savedMovies.find((el) => el.movieId === id);
    },
    [savedMovies]
  );

  const handleEditProfile = useCallback((name, email) => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    updateUserInfo(token, name, email)
      .then((res) => {
        console.log(res);
        setUserInfo(res.data);
        setSearchErr("");
        setPopupIsopen(true);
        setPopupMessage("Профиль отредактирован");
        setPopupIsOk(true);
        setTimeout(() => setPopupIsopen(false), 2000);
        setTimeout(() => setPopupMessage(""), 3000);
      })
      .catch((err) => {
        setSearchErr(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const closePopup = () => {
    setPopupIsopen(false);
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, [hasWindow]);

  useEffect(() => {
    handleGetMe();
  }, [handleGetMe]);

  useEffect(() => {
    if (isLoggedIn) {
      handleGetSavedMovies();
    }
  }, [isLoggedIn, handleGetSavedMovies]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      handleFilmsToShow(movies);
    }
  }, [handleFilmsToShow]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={userInfo}>
        {(pathname === "/movies" ||
          pathname === "/saved-movies" ||
          pathname === "/profile") && (
          <Header
            width={width}
            isBurgerActive={isBurgerActive}
            handleToggleBurger={handleToggleBurger}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                width={width}
                isBurgerActive={isBurgerActive}
                handleToggleBurger={handleToggleBurger}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  isLoading={isLoading}
                  saved={isSaved}
                  handleFilmsToShow={handleFilmsToShow}
                  filmsToShow={filmsToShow}
                  handleMoreFilms={handleMoreFilms}
                  moviesArr={moviesArr}
                  handleGetAllMovies={searchAndFilterAllMovies}
                  searchErr={searchErr}
                  setSearchErr={setSearchErr}
                  searchedErr={searchedErr}
                  handleLikeCard={handleLikeCard}
                  handleDisLikeCard={handleDisLikeCard}
                  onCheckBox={handleCheckBoxClick}
                  handleGetMe={handleGetMe}
                  onCheckLike={handleCheckLike}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  isLoading={isLoading}
                  saved={isSaved}
                  handleFilmsToShow={handleFilmsToShow}
                  filmsToShow={savedFilmsToShow}
                  handleMoreFilms={handleMoreFilms}
                  handleGetAllMovies={handleGetAllMovies}
                  searchErr={searchErr}
                  setSearchErr={setSearchErr}
                  searchedErr={savedSearchedErr}
                  handleGetSavedMovies={handleFilterSavedMovies}
                  moviesArr={moviesArr}
                  handleDisLikeCard={handleDisLikeCard}
                  onCheckBox={handleSavedCheckBoxClick}
                  handleGetMe={handleGetMe}
                  onCheckLike={handleCheckLike}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  handleLogout={handleLogout}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  searchErr={searchErr}
                  handleEditProfile={handleEditProfile}
                  setSearchErr={setSearchErr}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                isLoggedIn={isLoggedIn}
                searchErr={searchErr}
                setSearchErr={setSearchErr}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                handleLogin={handleLogin}
                isLoggedIn={isLoggedIn}
                searchErr={searchErr}
                setSearchErr={setSearchErr}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {(pathname === "/" ||
          pathname === "/movies" ||
          pathname === "/saved-movies") && <Footer />}
        <InfoTooltip
          isOpen={popupIsopen}
          onClose={closePopup}
          isOk={popupIsOk}
          message={popupMessage}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
