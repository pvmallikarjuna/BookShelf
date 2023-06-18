import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const [newArr, setNewArr] = useState([]);

  const filteredData = details.filter((bookObj) => {
    return bookObj.bookname.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    setNewArr(filteredData);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredData={newArr} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your Books</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search Books"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
