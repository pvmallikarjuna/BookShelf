import "./styles.css";
import { bookList } from "./BookDetails.js";
import { useState } from "react";
import BookCard from "./BookCard.js";
import Search from "./Search";

export default function App() {
  const [bookArr, setBookList] = useState(bookList);

  const handleCategoryChange = (_id, newCategory) => {
    const updatedBookList = [...bookArr];
    const newBookList = updatedBookList.map((book) => {
      if (book._id === _id) {
        return {
          ...book,
          category: newCategory
        };
      }
      return book;
    });
    console.log("> ", newBookList);
    setBookList(newBookList);
  };

  return (
    <div className="App">
      <Search details={bookArr} />
      <h1>Arjun's Book Shelf</h1>

      <div className="currently-reading shelf">
        <h2> Currently Reading </h2>
        <div className="book-list">
          {bookArr
            .filter((book) => book.category === "Currently Reading")
            .map((data, index) => (
              <div key={index}>
                <BookCard
                  key={data._id}
                  imageLink={data.imageLink}
                  title={data.bookname}
                  category={data.category}
                  handleCategoryChange={(newCategory) =>
                    handleCategoryChange(data._id, newCategory)
                  }
                />{" "}
              </div>
            ))}
        </div>
      </div>
      <div className="want-read shelf">
        <h2> Want to Read </h2>
        <div className="book-list">
          {bookArr
            .filter((book) => book.category === "Want to Read")
            .map((data, index) => (
              <div key={index}>
                <BookCard
                  key={data._id}
                  imageLink={data.imageLink}
                  title={data.bookname}
                  category={data.category}
                  handleCategoryChange={(newCategory) =>
                    handleCategoryChange(data._id, newCategory)
                  }
                />{" "}
              </div>
            ))}
        </div>
      </div>
      <div className="currently-reading shelf">
        <h2> Read </h2>
        <div className="book-list">
          {bookArr
            .filter((book) => book.category === "Read")
            .map((data, index) => (
              <div key={index}>
                <BookCard
                  key={data._id}
                  imageLink={data.imageLink}
                  title={data.bookname}
                  category={data.category}
                  handleCategoryChange={(newCategory) =>
                    handleCategoryChange(data._id, newCategory)
                  }
                />{" "}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
