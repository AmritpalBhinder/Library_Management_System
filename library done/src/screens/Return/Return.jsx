import { useEffect, useState } from "react";
import "./Return.css"; 

export default function ReturnBook() {
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [returnedBooks, setReturnedBooks] = useState([]);

  useEffect(() => {
    const storedIssued = JSON.parse(localStorage.getItem("issuedBooks")) || [];
    setIssuedBooks(storedIssued);

    const storedReturned = JSON.parse(localStorage.getItem("returnedBooks")) || [];
    setReturnedBooks(storedReturned);
  }, []);

  const calculateFine = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);

    if (today > due) {
      const diffTime = today - due;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays * 10; // Rs.10 per day
    }
    return 0;
  };

  const handleReturn = (index) => {
    const book = issuedBooks[index];
    const fine = calculateFine(book.dueDate);

    const returnedBook = { ...book, returned: true, fine };

    // remove from issued
    const updatedIssued = issuedBooks.filter((_, i) => i !== index);
    setIssuedBooks(updatedIssued);
    localStorage.setItem("issuedBooks", JSON.stringify(updatedIssued));

    // add to returned
    const updatedReturned = [...returnedBooks, returnedBook];
    setReturnedBooks(updatedReturned);
    localStorage.setItem("returnedBooks", JSON.stringify(updatedReturned));

    alert(`Book returned successfully ✅ Fine: ₹${fine}`);
  };

  return (
    <div className="return-container">
      <h2>📕 Books to be Returned</h2>
      <table className="return-table">
        <thead>
          <tr>
            <th>Member Email</th>
            <th>Book Title</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Rent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {issuedBooks.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">No issued books pending</td>
            </tr>
          ) : (
            issuedBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.memberEmail}</td>
                <td>{book.bookName}</td>
                <td>{book.issueDate}</td>
                <td>{book.dueDate}</td>
                <td>₹{book.rent}</td>
                <td>
                  <button className="return-btn" onClick={() => handleReturn(index)}>
                    Return
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px" }}>✅ Returned Books</h2>
      <table className="return-table">
        <thead>
          <tr>
            <th>Member Email</th>
            <th>Book Title</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Rent</th>
            <th>Fine</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {returnedBooks.length === 0 ? (
            <tr>
              <td colSpan="7" className="no-data">No returned books yet</td>
            </tr>
          ) : (
            returnedBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.memberEmail}</td>
                <td>{book.bookName}</td>
                <td>{book.issueDate}</td>
                <td>{book.dueDate}</td>
                <td>₹{book.rent}</td>
                <td className={book.fine > 0 ? "fine" : "no-fine"}>₹{book.fine}</td>
                <td className="status">Returned ✅</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
