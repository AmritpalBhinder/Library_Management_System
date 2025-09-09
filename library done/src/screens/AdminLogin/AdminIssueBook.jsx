import { useState } from "react";

export default function AdminIssueBook() {
  const [formData, setFormData] = useState({
    memberEmail: "",
    bookName: "",
    issueDate: "",
    dueDate: "",
    rent: "",
    returned: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ load old books
    const issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

    // ✅ push new record
    issuedBooks.push(formData);

    // ✅ save back
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    alert("Book issued successfully ✅");

    setFormData({
      memberEmail: "",
      bookName: "",
      issueDate: "",
      dueDate: "",
      rent: "",
      returned: false,
    });
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="memberEmail"
          placeholder="Member Email"
          value={formData.memberEmail}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={formData.bookName}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="rent"
          placeholder="Rent"
          value={formData.rent}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Issue</button>
      </form>
    </div>
  );
}
