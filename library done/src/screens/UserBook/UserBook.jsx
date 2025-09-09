// // // // import React, { useEffect, useState } from "react";
// // // // import booksData from "../../../db.json"; // apna JSON import karo
// // // // // import "./UserBook.css";

// // // // export default function UserBook() {
// // // //   const [books, setBooks] = useState([]);
// // // //   const [search, setSearch] = useState("");
// // // //   const [sortOrder, setSortOrder] = useState(""); // "high" | "low"
// // // //   const [wishlist, setWishlist] = useState([]);

// // // //   // initial load
// // // //   useEffect(() => {
// // // //     setBooks(booksData.books);
// // // //     const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// // // //     setWishlist(savedWishlist);
// // // //   }, []);

// // // //   // wishlist update -> localStorage
// // // //   useEffect(() => {
// // // //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// // // //   }, [wishlist]);

// // // //   // filter + sort
// // // //   const filteredBooks = books
// // // //     .filter(
// // // //       (b) =>
// // // //         b.Title.toLowerCase().includes(search.toLowerCase()) ||
// // // //         b.author.toLowerCase().includes(search.toLowerCase()) ||
// // // //         b.genre.toLowerCase().includes(search.toLowerCase())
// // // //     )
// // // //     .sort((a, b) => {
// // // //       if (sortOrder === "high") return b.rent - a.rent;
// // // //       if (sortOrder === "low") return a.rent - b.rent;
// // // //       return 0;
// // // //     });

// // // //   // like / wishlist
// // // //   const toggleWishlist = (book) => {
// // // //     if (wishlist.find((w) => w.id === book.id)) {
// // // //       setWishlist(wishlist.filter((w) => w.id !== book.id));
// // // //     } else {
// // // //       setWishlist([...wishlist, book]);
// // // //     }
// // // //   };

// // // //   const isInWishlist = (id) => wishlist.some((w) => w.id === id);

// // // //   return (
// // // //     <div className="books-page">
// // // //       {/* ---- Controls ---- */}
// // // //       <div className="controls">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="🔍 Search by title, author, genre..."
// // // //           value={search}
// // // //           onChange={(e) => setSearch(e.target.value)}
// // // //         />

// // // //         <select
// // // //           value={sortOrder}
// // // //           onChange={(e) => setSortOrder(e.target.value)}
// // // //         >
// // // //           <option value="">Sort by Rent</option>
// // // //           <option value="high">High → Low</option>
// // // //           <option value="low">Low → High</option>
// // // //         </select>
// // // //       </div>

// // // //       {/* ---- Book Grid ---- */}
// // // //       <div className="books-grid">
// // // //         {filteredBooks.map((book) => (
// // // //           <div key={book.id} className="book-card">
// // // //             <img src={book.cover} alt={book.Title} />
// // // //             <h3>{book.Title}</h3>
// // // //             <p className="author">{book.author}</p>
// // // //             <p className="genre">{book.genre}</p>
// // // //             <p className="rent">₹{book.rent} / rent</p>
// // // //             <p className="rating">⭐ {book.rating}</p>
// // // //             <button
// // // //               className={`like-btn ${isInWishlist(book.id) ? "liked" : ""}`}
// // // //               onClick={() => toggleWishlist(book)}
// // // //             >
// // // //               {isInWishlist(book.id) ? "❤️ Liked" : "🤍 Like"}
// // // //             </button>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* ---- Wishlist ---- */}
// // // //       <div className="wishlist">
// // // //         <h2>❤️ My Wishlist</h2>
// // // //         {wishlist.length === 0 ? (
// // // //           <p>No books liked yet</p>
// // // //         ) : (
// // // //           <div className="wishlist-grid">
// // // //             {wishlist.map((book) => (
// // // //               <div key={book.id} className="wishlist-card">
// // // //                 <img src={book.cover} alt={book.Title} />
// // // //                 <h4>{book.Title}</h4>
// // // //                 <p>{book.author}</p>
// // // //                 <p className="rent">₹{book.rent}</p>
// // // //                 <button onClick={() => toggleWishlist(book)}>❌ Remove</button>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useEffect, useState } from "react";
// // // import booksData from "../../../db.json";
// // // import "./UseBook.css";

// // // export default function UserBook() {
// // //   const [books, setBooks] = useState([]);
// // //   const [search, setSearch] = useState("");
// // //   const [category, setCategory] = useState("");
// // //   const [sortOrder, setSortOrder] = useState("");
// // //   const [wishlist, setWishlist] = useState([]);
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [modalBook, setModalBook] = useState(null); // book to show in modal
// // //   const booksPerPage = 8;

// // //   useEffect(() => {
// // //     setBooks(booksData.books);
// // //     const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// // //     setWishlist(savedWishlist);
// // //   }, []);

// // //   useEffect(() => {
// // //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// // //   }, [wishlist]);

// // //   const filteredBooks = books
// // //     .filter(
// // //       (b) =>
// // //         (b.Title.toLowerCase().includes(search.toLowerCase()) ||
// // //           b.author.toLowerCase().includes(search.toLowerCase())) &&
// // //         (category ? b.genre.toLowerCase() === category.toLowerCase() : true)
// // //     )
// // //     .sort((a, b) => {
// // //       if (sortOrder === "high") return b.rent - a.rent;
// // //       if (sortOrder === "low") return a.rent - b.rent;
// // //       return 0;
// // //     });

// // //   // Pagination
// // //   const indexOfLastBook = currentPage * booksPerPage;
// // //   const indexOfFirstBook = indexOfLastBook - booksPerPage;
// // //   const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
// // //   const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

// // //   const handlePageChange = (page) => setCurrentPage(page);
// // //   useEffect(() => setCurrentPage(1), [search, category]);

// // //   const toggleWishlist = (book) => {
// // //     if (wishlist.find((w) => w.id === book.id)) {
// // //       setWishlist(wishlist.filter((w) => w.id !== book.id));
// // //     } else {
// // //       setWishlist([...wishlist, book]);
// // //     }
// // //   };

// // //   const isInWishlist = (id) => wishlist.some((w) => w.id === id);

// // //   const categories = [...new Set(books.map((b) => b.genre))];

// // //   return (
// // //     <div className="books-page">
// // //       {/* ---- Controls ---- */}
// // //       <div className="controls">
// // //         <input
// // //           type="text"
// // //           placeholder="🔍 Search by title or author..."
// // //           value={search}
// // //           onChange={(e) => setSearch(e.target.value)}
// // //         />

// // //         <select value={category} onChange={(e) => setCategory(e.target.value)}>
// // //           <option value="">All Categories</option>
// // //           {categories.map((cat, i) => (
// // //             <option key={i} value={cat}>
// // //               {cat}
// // //             </option>
// // //           ))}
// // //         </select>

// // //         <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
// // //           <option value="">Sort by Rent</option>
// // //           <option value="high">High → Low</option>
// // //           <option value="low">Low → High</option>
// // //         </select>
// // //       </div>

// // //       {/* ---- Book Grid ---- */}
// // //       <div className="books-grid">
// // //         {currentBooks.map((book) => (
// // //           <div key={book.id} className="book-card">
// // //             <img
// // //               src={book.cover}
// // //               alt={book.Title}
// // //               onClick={() => setModalBook(book)}
// // //             />
// // //             <h3>{book.Title}</h3>
// // //             <p className="author">{book.author}</p>
// // //             <p className="genre">{book.genre}</p>
// // //             <p className="rent">₹{book.rent}</p>
// // //             <button
// // //               className={`like-btn ${isInWishlist(book.id) ? "liked" : ""}`}
// // //               onClick={() => toggleWishlist(book)}
// // //             >
// // //               {isInWishlist(book.id) ? "❤️ Liked" : "🤍 Like"}
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* ---- Pagination ---- */}
// // //       <div className="pagination">
// // //         {Array.from({ length: totalPages }, (_, i) => (
// // //           <button
// // //             key={i + 1}
// // //             className={currentPage === i + 1 ? "active" : ""}
// // //             onClick={() => handlePageChange(i + 1)}
// // //           >
// // //             {i + 1}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* ---- Wishlist ---- */}
// // //       <div className="wishlist">
// // //         <h2>❤️ My Wishlist</h2>
// // //         {wishlist.length === 0 ? (
// // //           <p>No books liked yet</p>
// // //         ) : (
// // //           <div className="wishlist-grid">
// // //             {wishlist.map((book) => (
// // //               <div key={book.id} className="wishlist-card">
// // //                 <img src={book.cover} alt={book.Title} />
// // //                 <h4>{book.Title}</h4>
// // //                 <p>{book.author}</p>
// // //                 <p className="rent">₹{book.rent}</p>
// // //                 <button onClick={() => setModalBook(book)}>View</button>
// // //                 <button onClick={() => toggleWishlist(book)}> Remove</button>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* ---- Modal ---- */}
// // //       {modalBook && (
// // //         <div className="modal-backdrop" onClick={() => setModalBook(null)}>
// // //           <div
// // //             className="modal-content"
// // //             onClick={(e) => e.stopPropagation()}
// // //           >
// // //             <span className="close-btn" onClick={() => setModalBook(null)}>
// // //               &times;
// // //             </span>
// // //             <img src={modalBook.cover} alt={modalBook.Title} />
// // //             <h2>{modalBook.Title}</h2>
// // //             <p><strong>Author:</strong> {modalBook.author}</p>
// // //             <p><strong>Genre:</strong> {modalBook.genre}</p>
// // //             <p><strong>Rent:</strong> ₹{modalBook.rent}</p>
// // //             <p><strong>Rating:</strong> ⭐ {modalBook.rating}</p>
// // //             <p className="description">{modalBook.description}</p>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import booksData from "../../../db.json"; // Load data from db.json
// // import "./UseBook.css";

// // export default function UserBook() {
// //   const [books, setBooks] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [sortOrder, setSortOrder] = useState("");
// //   const [wishlist, setWishlist] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [modalBook, setModalBook] = useState(null);
// //   const booksPerPage = 8;

// //   // Load books and wishlist
// //   useEffect(() => {
// //     setBooks(booksData.books || []);
// //     const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// //     setWishlist(savedWishlist);
// //   }, []);

// //   // Save wishlist to localStorage
// //   useEffect(() => {
// //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// //   }, [wishlist]);

// //   // Filtered + sorted books
// //   const filteredBooks = books
// //     .filter((b) => {
// //       const title = b.title || b.Title || "";
// //       const author = b.author || "";
// //       const genre = b.genre || "";

// //       const matchesSearch =
// //         title.toLowerCase().includes(search.toLowerCase()) ||
// //         author.toLowerCase().includes(search.toLowerCase());

// //       const matchesCategory = category
// //         ? genre.toLowerCase() === category.toLowerCase()
// //         : true;

// //       return matchesSearch && matchesCategory;
// //     })
// //     .sort((a, b) => {
// //       if (sortOrder === "high") return (b.rent || 0) - (a.rent || 0);
// //       if (sortOrder === "low") return (a.rent || 0) - (b.rent || 0);
// //       return 0;
// //     });

// //   // Pagination
// //   const indexOfLastBook = currentPage * booksPerPage;
// //   const indexOfFirstBook = indexOfLastBook - booksPerPage;
// //   const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
// //   const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [search, category]);

// //   const handlePageChange = (page) => setCurrentPage(page);

// //   // Wishlist functions
// //   const toggleWishlist = (book) => {
// //     if (wishlist.find((w) => w.id === book.id)) {
// //       setWishlist(wishlist.filter((w) => w.id !== book.id));
// //     } else {
// //       setWishlist([...wishlist, book]);
// //     }
// //   };

// //   const isInWishlist = (id) => wishlist.some((w) => w.id === id);

// //   const categories = [...new Set(books.map((b) => b.genre || ""))];

// //   return (
// //     <div className="books-page">
// //       {/* Controls */}
// //       <div className="controls">
// //         <input
// //           type="text"
// //           placeholder="🔍 Search by title or author..."
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />
// //         <select value={category} onChange={(e) => setCategory(e.target.value)}>
// //           <option value="">All Categories</option>
// //           {categories.map((cat, i) => (
// //             <option key={i} value={cat}>
// //               {cat}
// //             </option>
// //           ))}
// //         </select>
// //         <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
// //           <option value="">Sort by Rent</option>
// //           <option value="high">High → Low</option>
// //           <option value="low">Low → High</option>
// //         </select>
// //       </div>

// //       {/* Book Grid */}
// //       <div className="books-grid">
// //         {currentBooks.map((book) => (
// //           <div key={book.id} className="book-card">
// //             <img
// //               src={book.cover}
// //               alt={book.Title || book.title || "No Title"}
// //               onClick={() => setModalBook(book)}
// //             />
// //             <h3>{book.Title || book.title || "No Title"}</h3>
// //             <p className="author">{book.author || "Unknown Author"}</p>
// //             <p className="genre">{book.genre || "Unknown Genre"}</p>
// //             <p className="rent">₹{book.rent || 0}</p>
// //             <button
// //               className={`like-btn ${isInWishlist(book.id) ? "liked" : ""}`}
// //               onClick={() => toggleWishlist(book)}
// //             >
// //               {isInWishlist(book.id) ? "❤️ Liked" : "🤍 Like"}
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Pagination */}
// //       <div className="pagination">
// //         {Array.from({ length: totalPages }, (_, i) => (
// //           <button
// //             key={i + 1}
// //             className={currentPage === i + 1 ? "active" : ""}
// //             onClick={() => handlePageChange(i + 1)}
// //           >
// //             {i + 1}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Wishlist */}
// //       <div className="wishlist">
// //         <h2>❤️ My Wishlist</h2>
// //         {wishlist.length === 0 ? (
// //           <p>No books liked yet</p>
// //         ) : (
// //           <div className="wishlist-grid">
// //             {wishlist.map((book) => (
// //               <div key={book.id} className="wishlist-card">
// //                 <img src={book.cover} alt={book.Title || book.title || "No Title"} />
// //                 <h4>{book.Title || book.title || "No Title"}</h4>
// //                 <p>{book.author || "Unknown Author"}</p>
// //                 <p className="rent">₹{book.rent || 0}</p>
// //                 <button onClick={() => setModalBook(book)}>View</button>
// //                 <button onClick={() => toggleWishlist(book)}>❌ Remove</button>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Modal */}
// //       {modalBook && (
// //         <div className="modal-backdrop" onClick={() => setModalBook(null)}>
// //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //             <span className="close-btn" onClick={() => setModalBook(null)}>
// //               &times;
// //             </span>
// //             <img src={modalBook.cover} alt={modalBook.Title || modalBook.title || "No Title"} />
// //             <h2>{modalBook.Title || modalBook.title || "No Title"}</h2>
// //             <p><strong>Author:</strong> {modalBook.author || "Unknown"}</p>
// //             <p><strong>Genre:</strong> {modalBook.genre || "Unknown"}</p>
// //             <p><strong>Rent:</strong> ₹{modalBook.rent || 0}</p>
// //             <p><strong>Rating:</strong> ⭐ {modalBook.rating || "N/A"}</p>
// //             <p className="description">{modalBook.description || "No description available."}</p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import booksData from "../../../db.json"; // Load data from db.json
// import "./UseBook.css";
// import { useNavigate } from "react-router-dom";

// export default function UserBook() {
//   const [books, setBooks] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const booksPerPage = 8;
//   const navigate = useNavigate();

//   // Load books and wishlist
//   useEffect(() => {
//     setBooks(booksData.books || []);
//     const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(savedWishlist);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // Filter + Sort
//   const filteredBooks = books
//     .filter((b) => {
//       const title = b.title || b.Title || "";
//       const author = b.author || "";
//       const genre = b.genre || "";

//       const matchesSearch =
//         title.toLowerCase().includes(search.toLowerCase()) ||
//         author.toLowerCase().includes(search.toLowerCase());

//       const matchesCategory = category
//         ? genre.toLowerCase() === category.toLowerCase()
//         : true;

//       return matchesSearch && matchesCategory;
//     })
//     .sort((a, b) => {
//       if (sortOrder === "high") return (b.rent || 0) - (a.rent || 0);
//       if (sortOrder === "low") return (a.rent || 0) - (b.rent || 0);
//       return 0;
//     });

//   // Pagination
//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;
//   const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
//   const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

//   useEffect(() => setCurrentPage(1), [search, category]);
//   const handlePageChange = (page) => setCurrentPage(page);

//   // Wishlist functions
//   const toggleWishlist = (book) => {
//     if (wishlist.find((w) => w.id === book.id)) {
//       setWishlist(wishlist.filter((w) => w.id !== book.id));
//     } else {
//       setWishlist([...wishlist, book]);
//     }
//   };
//   const isInWishlist = (id) => wishlist.some((w) => w.id === id);

//   const categories = [...new Set(books.map((b) => b.genre || ""))];

//   return (
//     <div className="books-page">
//       {/* Controls */}
//       <div className="controls">
//         <input
//           type="text"
//           placeholder="🔍 Search by title or author..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="">All Categories</option>
//           {categories.map((cat, i) => (
//             <option key={i} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//         <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//           <option value="">Sort by Rent</option>
//           <option value="high">High → Low</option>
//           <option value="low">Low → High</option>
//         </select>
//       </div>

//       {/* Book Grid */}
//       <div className="books-grid">
//         {currentBooks.map((book) => (
//           <div key={book.id} className="book-card">
//             <img
//               src={book.cover}
//               alt={book.Title || book.title || "No Title"}
//               onClick={() => navigate(`/description/${book.id}`)}
//             />
//             <h3>{book.Title || book.title || "No Title"}</h3>
//             <p className="author">{book.author || "Unknown Author"}</p>
//             <p className="genre">{book.genre || "Unknown Genre"}</p>
//             <p className="rent">₹{book.rent || 0}</p>
//             <button
//               className={`like-btn ${isInWishlist(book.id) ? "liked" : ""}`}
//               onClick={() => toggleWishlist(book)}
//             >
//               {isInWishlist(book.id) ? "❤️ Liked" : "🤍 Like"}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i + 1}
//             className={currentPage === i + 1 ? "active" : ""}
//             onClick={() => handlePageChange(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>

//       {/* Wishlist */}
//       <div className="wishlist">
//         <h2>❤️ My Wishlist</h2>
//         {wishlist.length === 0 ? (
//           <p>No books liked yet</p>
//         ) : (
//           <div className="wishlist-grid">
//             {wishlist.map((book) => (
//               <div key={book.id} className="wishlist-card">
//                 <img
//                   src={book.cover}
//                   alt={book.Title || book.title || "No Title"}
//                   onClick={() => navigate(`/description/${book.id}`)}
//                 />
//                 <h4>{book.Title || book.title || "No Title"}</h4>
//                 <p>{book.author || "Unknown Author"}</p>
//                 <p className="rent">₹{book.rent || 0}</p>
//                 <button onClick={() => toggleWishlist(book)}>❌ Remove</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import booksData from "../../../db.json"; // Load data from db.json
import "./UseBook.css";
import { useNavigate } from "react-router-dom";

export default function UserBook() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;
  const navigate = useNavigate();

  // Load books and wishlist
  useEffect(() => {
    setBooks(booksData.books || []);
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Filter + Sort
  const filteredBooks = books
    .filter((b) => {
      const title = b.title || b.Title || "";
      const author = b.author || "";
      const genre = b.genre || "";

      const matchesSearch =
        title.toLowerCase().includes(search.toLowerCase()) ||
        author.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category
        ? genre.toLowerCase() === category.toLowerCase()
        : true;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "high") return (b.rent || 0) - (a.rent || 0);
      if (sortOrder === "low") return (a.rent || 0) - (b.rent || 0);
      return 0;
    });

  // Pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  useEffect(() => setCurrentPage(1), [search, category]);
  const handlePageChange = (page) => setCurrentPage(page);

  // Wishlist functions
  const toggleWishlist = (book) => {
    if (wishlist.find((w) => w.id === book.id)) {
      setWishlist(wishlist.filter((w) => w.id !== book.id));
    } else {
      setWishlist([...wishlist, book]);
    }
  };
  const isInWishlist = (id) => wishlist.some((w) => w.id === id);

  const categories = [...new Set(books.map((b) => b.genre || ""))];

  return (
    <div className="books-page">
      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by Rent</option>
          <option value="high">High → Low</option>
          <option value="low">Low → High</option>
        </select>
      </div>

      {/* Book Grid */}
      <div className="books-grid">
        {currentBooks.map((book) => (
          <div key={book.id} className="book-card" style={{height
            :"400px",width:"2000px"
          }}>
            <img
              src={book.cover}
              alt={book.Title || book.title || "No Title"}
              onClick={() => navigate(`/description/${book.id}`)}
            />
            <h3>{book.Title || book.title || "No Title"}</h3>
            <p className="author">{book.author || "Unknown Author"}</p>
            <p className="genre">{book.genre || "Unknown Genre"}</p>
            <p className="rent">₹{book.rent || 0}</p>
            <button
              className={`like-btn ${isInWishlist(book.id) ? "liked" : ""}`}
              onClick={() => toggleWishlist(book)}
            >
              {isInWishlist(book.id) ? "❤️ Liked" : "🤍 Like"}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Wishlist */}
      <div className="wishlist">
        <h2>❤️ My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>No books liked yet</p>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((book) => (
              <div key={book.id} className="wishlist-card">
                <img
                  src={book.cover}
                  alt={book.Title || book.title || "No Title"}
                  onClick={() => navigate(`/description/${book.id}`)}
                />
                <h4>{book.Title || book.title || "No Title"}</h4>
                <p>{book.author || "Unknown Author"}</p>
                <p className="rent">₹{book.rent || 0}</p>
                <button onClick={() => toggleWishlist(book)}>❌ Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
