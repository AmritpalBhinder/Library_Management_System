// // // import "./UserDashboard.css";
// // // import { Search, User } from "lucide-react";

// // // export default function Dashboard() {
// // //   return (
// // //     <div className="dashboard">
// // //       <div className="dashboard-container">
// // //         {/* Header */}
// // //         <div className="dashboard-header">
         
         
// // //         </div>

// // //         {/* Hero Section */}
// // //         <div className="hero">
// // //           <div className="hero-text">
// // //             <h2>
// // //               Discover Your <br /> Next Favorite Book
// // //             </h2>
// // //             <button className="browse-btn">Browse Library</button>
// // //           </div>
// // //           <div className="hero-icon">📖</div>
// // //         </div>

// // //         {/* Popular Books */}
// // //         <div className="section">
// // //           <h3>Popular Books</h3>
// // //           <div className="books-row">
// // //             <div className="book-card green">
// // //               <p className="author">M. J. Borrowed</p>
// // //               <h4>The Great Gatsby</h4>
// // //               <button>Quick View</button>
// // //             </div>
// // //             <div className="book-card yellow">
// // //               <p className="author">Harper Lee</p>
// // //               <h4>To Kill a Mockingbird</h4>
// // //               <button>Quick View</button>
// // //             </div>
// // //             <div className="book-card red">
// // //               <p className="author">George Orwell</p>
// // //               <h4>1984</h4>
// // //               <button>Quick View</button>
// // //             </div>
// // //             <div className="book-card pink">
// // //               <p className="author">Jane Austen</p>
// // //               <h4>Pride and Prejudice</h4>
// // //               <button>Quick View</button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Categories */}
// // //         <div className="section">
// // //           <h3>Featured Categories</h3>
// // //           <div className="categories">
// // //             <div className="category yellow">📘<p>Fiction</p></div>
// // //             <div className="category teal">🔬<p>Science</p></div>
// // //             <div className="category orange">🏛️<p>History</p></div>
// // //             <div className="category blue">💬<p>Comics</p></div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useState } from "react";
// // import "./UserDashboard.css";
// // import booksData from "../../../db.json"; // import your JSON file

// // export default function Dashboard() {
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [selectedBook, setSelectedBook] = useState(null);

// //   // unique genres for categories
// //   const categories = [
// //     ...new Set(booksData.books.map((book) => book.genre)),
// //   ];

// //   // filter books by category
// //   const filteredBooks = selectedCategory
// //     ? booksData.books.filter((book) => book.genre === selectedCategory)
// //     : booksData.books;

// //   return (
// //     <div className="dashboard">
// //       <div className="dashboard-container">
// //         {/* Hero Section */}
// //         <div className="hero">
// //           <div className="hero-text">
// //             <h2>
// //               Discover Your <br /> Next Favorite Book
// //             </h2>
// //             <button
// //               className="browse-btn"
// //               onClick={() => {
// //                 setSelectedCategory(null);
// //                 setSelectedBook(null);
// //               }}
// //             >
// //               Browse Library
// //             </button>
// //           </div>
// //           <div className="hero-icon">📖</div>
// //         </div>

// //         {/* Categories (dynamic from JSON) */}
// //         <div className="section">
// //           <h3>Categories</h3>
// //           <div className="categories">
// //             {categories.map((genre, idx) => (
// //               <div
// //                 key={idx}
// //                 className={`category ${
// //                   selectedCategory === genre ? "active" : ""
// //                 }`}
// //                 onClick={() => {
// //                   setSelectedCategory(genre);
// //                   setSelectedBook(null);
// //                 }}
// //               >
// //                 <p>{genre}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Book Details (when clicked) */}
// //         {selectedBook ? (
// //           <div className="section book-detail">
// //             <h3>{selectedBook.title}</h3>
// //             <img
// //               src={selectedBook.cover}
// //               alt={selectedBook.title}
// //               className="detail-cover"
// //             />
// //             <p><strong>Author:</strong> {selectedBook.author}</p>
// //             <p><strong>Year:</strong> {selectedBook.Year}</p>
// //             <p><strong>Genre:</strong> {selectedBook.genre}</p>
// //             <p><strong>Rating:</strong> ⭐ {selectedBook.rating}</p>
// //             <p>{selectedBook.description}</p>
// //             <button onClick={() => setSelectedBook(null)}>Back</button>
// //           </div>
// //         ) : (
// //           /* Books Grid */
// //           <div className="section">
// //             <h3>{selectedCategory ? selectedCategory : "All Books"}</h3>
// //             <div className="books-row">
// //               {filteredBooks.map((book) => (
// //                 <div
// //                   key={book.id}
// //                   className="book-card"
// //                   onClick={() => setSelectedBook(book)}
// //                 >
// //                   <img
// //                     src={book.cover}
// //                     alt={book.title}
// //                     className="book-cover"
// //                   />
// //                   <p className="author">{book.author}</p>
// //                   <h4>{book.title}</h4>
// //                   <button>Quick View</button>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import "./UserDashboard.css";
// import booksData from "../../../db.json"; // import your JSON file

// export default function Dashboard() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedBook, setSelectedBook] = useState(null);
//     const [current, setCurrent] = useState(0);

//   // unique genres for categories
//   const categories = [
//     ...new Set(booksData.books.map((book) => book.genre)),
//   ];
//    const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? booksData.books.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === booksData.books.length - 1 ? 0 : prev + 1));
//   };

//   // filter books by category
//   const filteredBooks = selectedCategory
//     ? booksData.books.filter((book) => book.genre === selectedCategory)
//     : booksData.books;

//   return (
//     <div className="dashboard">
//       <div className="dashboard-container">
//         {/* Hero Section */}
//         <div className="hero">
//           <div className="hero-text">
//             <h2>
//               Discover Your <br /> Next Favorite Book
//             </h2>
//             <button
//               className="browse-btn"
//               onClick={() => {
//                 setSelectedCategory(null);
//                 setSelectedBook(null);
//               }}
//             >
//               Browse Library
//             </button>
//           </div>
//           <div className="hero-icon">📖</div>
//         </div>

//         {/* If book selected → show details */}
//         {selectedBook ? (
//           <div className="section book-detail">
//             <h3>{selectedBook.title}</h3>
//             <img
//               src={selectedBook.cover}
//               alt={selectedBook.title}
//               className="detail-cover"
//             />
//             <p><strong>Author:</strong> {selectedBook.author}</p>
//             <p><strong>Year:</strong> {selectedBook.Year}</p>
//             <p><strong>Genre:</strong> {selectedBook.genre}</p>
//             <p><strong>Rating:</strong> ⭐ {selectedBook.rating}</p>
//             <p>{selectedBook.description}</p>
//             <button onClick={() => setSelectedBook(null)}>Back</button>
//           </div>
//         ) : (
//           <>
//             {/* Book Slider */}
//             {/* <div className="section">
//               <h3>{selectedCategory ? selectedCategory : "Popular Books"}</h3>
//               <div className="books-row">
//                 {filteredBooks.map((book) => (
//                   <div
//                     key={book.id}
//                     className="book-card"
//                     onClick={() => setSelectedBook(book)}
//                   >
//                     <img
//                       src={book.cover}
//                       alt={book.title}
//                       className="book-cover"
//                     />
//                     <p className="author">{book.author}</p>
//                     <h4>{book.title}</h4>
//                   </div>
//                 ))}
//               </div>
//             </div> */}
// <div className="coverflow-slider">
//       <button className="nav-btn left" onClick={prevSlide}>
//         ❮
//       </button>

//       <div className="coverflow-container">
//         {booksData.books.map((book, index) => {
//           let position = "nextSlide";
//           if (index === current) {
//             position = "activeSlide";
//           } else if (
//             index === current - 1 ||
//             (current === 0 && index === booksData.books.length - 1)
//           ) {
//             position = "lastSlide";
//           }

//           return (
//             <div key={book.id} className={`slide ${position}`}>
//               <img src={book.cover} alt={book.title} />
//               <h4>{book.title}</h4>
//               <p>{book.author}</p>
//             </div>
//           );
//         })}
//       </div>

//       <button className="nav-btn right" onClick={nextSlide}>
//         ❯
//       </button>
//     </div>
//             {/* Categories Below */}
//             <div className="section">
//               <h3>Categories</h3>
//               <div className="categories">
//                 {categories.map((genre, idx) => (
//                   <div
//                     key={idx}
//                     className={`category ${
//                       selectedCategory === genre ? "active" : ""
//                     }`}
//                     onClick={() => {
//                       setSelectedCategory(genre);
//                       setSelectedBook(null);
//                     }}
//                   >
//                     <p>{genre}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import "./UserDashboard.css";
import booksData from "../../../db.json";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [current, setCurrent] = useState(0);

  // unique genres
  const categories = [...new Set(booksData.books.map((book) => book.genre))];

  // filtered books
  const filteredBooks = selectedCategory
    ? booksData.books.filter((book) => book.genre === selectedCategory)
    : booksData.books;

  // navigation
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? filteredBooks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === filteredBooks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="dashboard">
       
      <div className="dashboard-container">
         <h1 style={
            {textAlign:"center"}
         }>
            Welcome to Reader's Planet
        </h1>
        {/* Hero */}
        <div className="hero">
          <div className="hero-text">
            <h2>
              Discover Your <br /> Next Favorite Book
            </h2>
            <button
              className="browse-btn"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedBook(null);
                setCurrent(0);
              }}
            >
              Browse Library
            </button>
          </div>
          <div className="hero-icon">📖</div>
        </div>

        {/* Book Detail */}
        {selectedBook ? (
          <div className="section book-detail">
            <h3>{selectedBook.title}</h3>
            <img
              src={selectedBook.cover}
              alt={selectedBook.title}
              className="detail-cover"
            />
            <p>
              <strong>Author:</strong> {selectedBook.author}
            </p>
            <p>
              <strong>Year:</strong> {selectedBook.Year}
            </p>
            <p>
              <strong>Genre:</strong> {selectedBook.genre}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {selectedBook.rating}
            </p>
            <p>{selectedBook.description}</p>
            <button onClick={() => setSelectedBook(null)}>Back</button>
          </div>
        ) : (
          <>
          <h1>Popular Books</h1>
            {/* Slider */}
            <div className="coverflow-slider">
              <button className="nav-btn left" onClick={prevSlide}>
                ❮
              </button>

              <div className="coverflow-container">
                {filteredBooks.map((book, index) => {
                  let position = "nextSlide";
                  if (index === current) {
                    position = "activeSlide";
                  } else if (
                    index === current - 1 ||
                    (current === 0 && index === filteredBooks.length - 1)
                  ) {
                    position = "lastSlide";
                  }

                  return (
                    <div
                      key={book.id}
                      className={`slide ${position}`}
                      onClick={() => setSelectedBook(book)}
                    >
                      <img src={book.cover} alt={book.title} />
                      <h4>{book.title}</h4>
                      <p>{book.author}</p>
                    </div>
                  );
                })}
              </div>

              <button className="nav-btn right" onClick={nextSlide}>
                ❯
              </button>
            </div>

            {/* Categories */}
            <div className="section">
              <h3>Categories</h3>
              <div className="categories">
                {categories.map((genre, idx) => (
                  <div
                    key={idx}
                    className={`category ${
                      selectedCategory === genre ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(genre);
                      setSelectedBook(null);
                      setCurrent(0);
                    }}
                  >
                    <p>{genre}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
