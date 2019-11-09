import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [search, setSearch] = useState();

  const searchData = cv => {
    setSearch(cv);
  };

  console.log("Home page", search);

  return (
    <main>
      {/* <Header />
      <WelcomePage />
      <SearchForm /> */}
      <Route path="/" component={Header} />
      <Route path="/" component={WelcomePage} />
      <Route path="/" render={() => <SearchForm pullSearch={searchData} />} />
      <Route exact path="/all" render={() => <CharacterList data={search} />} />
    </main>
  );
}
