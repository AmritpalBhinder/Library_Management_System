import { useEffect, useState } from "react";

import "../AdminLogin/AdminIssueBook"
import "./UserBorrow.css"

export default function UserBorrowedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // ✅ saved on login

    if (!loggedInUser) {
      console.warn("⚠️ loggedInUser not set in localStorage");
      return;
    }

    // ✅ filter only for this user
    const userBooks = issuedBooks.filter(
      (b) => b.memberEmail === loggedInUser.email
    );

    setBooks(userBooks);
  }, []);

  return (
    // <div>
    // <h2 style={{color:"white",textAlign:"center"}}>My Borrowed Books</h2>
    //   <table border="1">
    //     <thead>
    //       <tr>
    //         <th>Book Name</th>
    //         <th>Issue Date</th>
    //         <th>Due Date</th>
    //         <th>Rent</th>
    //         <th>Status</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {books.length > 0 ? (
    //         books.map((b, i) => (
    //           <tr key={i}>
    //             <td>{b.bookName}</td>
    //             <td>{b.issueDate}</td>
    //             <td>{b.dueDate}</td>
    //             <td>{b.rent}</td>
    //             <td>{b.returned ? "Returned" : "Pending"}</td>
    //           </tr>
    //         ))
    //       ) : (
    //         <tr>
    //           <td colSpan="5">No borrowed books found</td>
    //         </tr>
    //       )}
    //     </tbody>
    //   </table>
    // </div>
    <div
  style={{
    width: "95%",
    maxWidth: "1200px",
    margin: "30px auto",
    padding: "20px",
    background: "#9e6e2cff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    overflowX: "auto",
  }}
>
  <h2 style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}>
    My Borrowed Books
  </h2>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "15px",
      color: "#fff",
      minWidth: "700px",
    }}
  >
    <thead style={{ background: "rgb(215, 220, 163)", color: "#0c0c0cff" }}>
      <tr>
        <th style={{ padding: "12px 15px", border: "1px solid #444" }}>Book Name</th>
        <th style={{ padding: "12px 15px", border: "1px solid #444" }}>Issue Date</th>
        <th style={{ padding: "12px 15px", border: "1px solid #444" }}>Due Date</th>
        <th style={{ padding: "12px 15px", border: "1px solid #444" }}>Rent</th>
        <th style={{ padding: "12px 15px", border: "1px solid #444" }}>Status</th>
      </tr>
    </thead>
    <tbody>
      {books.length > 0 ? (
        books.map((b, i) => (
          <tr
            key={i}
            style={{
              textAlign: "center",
              borderBottom: "1px solid #444",
              background: i % 2 === 0 ? "#819964ff" : "#7ba449ff", // alternate row colors
            }}
          >
            <td style={{ padding: "12px 15px" }}>{b.bookName}</td>
            <td style={{ padding: "12px 15px" }}>{b.issueDate}</td>
            <td style={{ padding: "12px 15px" }}>{b.dueDate}</td>
            <td style={{ padding: "12px 15px" }}>₹{b.rent}</td>
            <td
              style={{
                padding: "4px 10px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "13px",
                color: "#fff",
                background: b.returned ? "#4982ddff" : "#c23131ff",
              }}
            >
              {b.returned ? "Returned" : "Pending"}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" style={{ padding: "20px", textAlign: "center", color: "#ccc" }}>
            No borrowed books found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

  );
}
// import { useEffect, useState } from "react";

// export default function UserBorrowedBooks() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // ✅ saved on login

//     if (!loggedInUser) {
//       console.warn("⚠️ loggedInUser not set in localStorage");
//       return;
//     }

//     // ✅ filter only for this user
//     const userBooks = issuedBooks.filter(
//       (b) => b.memberEmail === loggedInUser.email
//     );

//     setBooks(userBooks);
//   }, []);

//   return (
//     <div>
//       <h2>My Borrowed Books</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Book Name</th>
//             <th>Issue Date</th>
//             <th>Due Date</th>
//             <th>Rent</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.length > 0 ? (
//             books.map((b, i) => (
//               <tr key={i}>
//                 <td>{b.bookName}</td>
//                 <td>{b.issueDate}</td>
//                 <td>{b.dueDate}</td>
//                 <td>{b.rent}</td>
//                 <td>{b.returned ? "Returned" : "Pending"}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No borrowed books found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";

// export default function UserBorrowedBooks() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

//     const storedUser = localStorage.getItem("loggedInUser");
//     const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

//     if (!loggedInUser) {
//       <p>"⚠️ loggedInUser not set in localStorage"</p>
//       return;
//     }

//     // ✅ filter only for this user (check actual field name in your data)
//     const userBooks = issuedBooks.filter(
//       (b) => b.memberEmail === loggedInUser.email
//     );

//     setBooks(userBooks);
//   }, []);

//   return (
//     <div>
//       <h2>My Borrowed Books</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Book Name</th>
//             <th>Issue Date</th>
//             <th>Due Date</th>
//             <th>Rent</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.length > 0 ? (
//             books.map((b, i) => (
//               <tr key={b.id || i}>
//                 <td>{b.bookName}</td>
//                 <td>{b.issueDate}</td>
//                 <td>{b.dueDate}</td>
//                 <td>{b.rent}</td>
//                 <td>{b.returned ? "Returned" : "Pending"}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No borrowed books found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }
