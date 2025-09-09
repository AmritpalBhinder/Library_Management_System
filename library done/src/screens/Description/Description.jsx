import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Description.css"; 

const FullDetailDescription = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error("Error fetching book:", err));
  }, [id]);

  if (!book) return <h2>Loading...</h2>;

  return (
    <div className="book-detail">
      <div className="book-top-section">
        <img
          src={book.cover}
          alt={book.Title || book.title}
          className="book-detail-cover"
        />
        <div className="book-title-author">
          <h2>{book.Title || book.title}</h2>
          <h4>by {book.author}</h4>
          <div className="book-rate">₹{book.rent}</div>
        </div>
      </div>

      <div className="book-bottom-section">
        <h3>Book Details</h3>
        <ul className="book-info">
          <li><strong>Year:</strong> {book.Year}</li>
          <li><strong>Genre:</strong> {book.genre}</li>
          <li><strong>Available:</strong> {book.isAvailable ? "Yes" : "No"}</li>
    
          <li><strong>Rent:</strong> ₹{book.rent}</li>
          <li><strong>Rating:</strong> ⭐ {book.rating}</li>
        </ul>

        <h3>Description</h3>
        <p className="book-description">{book.description}</p>
      </div>
    </div>
  );
};

export default FullDetailDescription;
