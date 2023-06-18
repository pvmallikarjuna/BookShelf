import React from "react";
import "./styles.css";

const BookCard = ({
  index,
  imageLink,
  title,
  category,
  handleCategoryChange
}) => {
  const handleButtonClick = (newCategory) => {
    handleCategoryChange(newCategory);
  };

  return (
    <div className="card">
      <img src={imageLink} alt="Book" className="card-image" />
      <h3 className="card-title">{title}</h3>
      <div className="dropdown">
        <div className="dropdown-content">
          <button
            style={{
              backgroundColor: category === "Currently Reading" ? "#f94144" : ""
            }}
            onClick={() => handleButtonClick("Currently Reading")}
          >
            Currently
          </button>
          <button
            style={{
              backgroundColor: category === "Want to Read" ? "#fff3b0" : ""
            }}
            onClick={() => handleButtonClick("Want to Read")}
          >
            Want to
          </button>
          <button
            style={{
              backgroundColor: category === "Read" ? "#a7c7e7" : ""
            }}
            onClick={() => handleButtonClick("Read")}
          >
            {" "}
            Read{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
