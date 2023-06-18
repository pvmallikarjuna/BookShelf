// src/components/SearchList.js

import React from "react";
import BookCard from "./BookCard.js";

function SearchList({ filteredData }) {
  const filtered = filteredData.map((data) => (
    <BookCard
      key={data._id}
      imageLink={data.imageLink}
      title={data.bookname}
      category={data.category}
    />
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
