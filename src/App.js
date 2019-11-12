import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Axios from "axios";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [characterData, setCharacterData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState({
    value: ""
  });

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rick-api.herokuapp.com/api/character/")
      .then(res => {
        setCharacterData(res.data.results);
      })
      .catch(err => {
        console.log("error:", err);
      });
  }, []);

  return (
    <main>
      {/* <Header />
      <WelcomePage />
      <SearchForm /> */}
      <Route path="/" component={Header} />
      <Route path="/" component={WelcomePage} />
      <Route
        path="/"
        render={() => (
          <SearchForm
            isSearching={isSearching}
            setSearching={setIsSearching}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
        )}
      />
      <Route
        exact
        path="/all"
        render={() => (
          <CharacterList
            data={characterData}
            isSearching={isSearching}
            searchValue={searchValue}
          />
        )}
      />
    </main>
  );
}
