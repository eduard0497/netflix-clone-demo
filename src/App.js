import React from "react";
import links from "./links";
import "./App.css";
import Banner from "./Banner";
import CategoryRow from "./CategoryRow";

function App() {
  return (
    <div className="app">
      <Banner />
      <CategoryRow link={links.trending} title="Trending" isLargeRow />
      <CategoryRow link={links.popular} title="Popular" />
      <CategoryRow link={links.topRated} title="Top Rated" />
      <CategoryRow link={links.upcoming} title="Upcoming" />
    </div>
  );
}

export default App;
