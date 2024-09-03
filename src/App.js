
import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import MoviePage from "./Pages/MoviePage/MoviePage";
import HomePage from "./Pages/HomePage/HomePage";
import TopPage from "./Pages/TopPage/TopPage";
import UpcomingPage from "./Pages/UpcomingPage/UpcomingPage";
import People from "./Components/People/People";
import PeoplePage from "./Pages/PeoplePage/PeoplePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import TVseriesPage from "./Pages/TVseriesPage/TVseriesPage";
import PersonPage from "./Pages/PersonPage/PersonPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<HomePage/>} />
          <Route path={'/movie/:id'} element={<MoviePage/>} />
          <Route path={"/top"} element={<TopPage/>} />
          <Route path={"/upcoming"} element={<UpcomingPage/>} />
          <Route path={"/popular-people"} element={<PeoplePage/>} />
          <Route path={'/search'} element={<SearchPage/>} />
        <Route path={"/tvseries"} element={<TVseriesPage/>} />
        <Route path={"/person-page/:id"} element={<PersonPage/>} />
      </Routes>
    </div>
  );
}

export default App;
