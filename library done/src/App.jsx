// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "./App.css";

// // Screens
// import Overview from "./screens/Overview/Overview.jsx";
// import AddBook from "./screens/AddBooks/AddBook.jsx";
// import Books from "./screens/Books/Books.jsx";
// import Members from "./screens/Members/Members.jsx";
// import Profile from "./screens/Profile/Profile.jsx";
// import UserBook from "./screens/UserBook/UserBook.jsx";
// import AdminLogin from "./screens/AdminLogin/AdminLogin.jsx";
// import Issue from "./screens/Issue/Issue.jsx";
// import Borrow from "./screens/UserBorrow/UserBorrow.jsx";
// import Description from "./screens/Description/Description.jsx";   // ✅ import description
// import EditBook from "./screens/EditBook/EditBook.jsx";           // ✅ import edit page

// // Components
// import Sidebar from "./Components/Navbar/Navbar.jsx";
// import ProtectedRoute from "./Components/Navbar/ProtectedRoute.jsx";

// export default function App() {
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <div className="app">
//       {/* ✅ Sidebar only visible when logged in */}
//       {user && <Sidebar />}

//       <div className="content">
//         <Routes>
//           {/* 🔹 Public Login Route */}
//           <Route path="/AdminLogin" element={<AdminLogin />} />

//           {/* 🔹 Admin Protected Routes */}
//           <Route
//             path="/overview"
//             element={
//               <ProtectedRoute role="admin">
//                 <Overview />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/book"
//             element={
//               <ProtectedRoute role="admin">
//                 <Books />
//               </ProtectedRoute>
//             }
//           />

//           {/* ✅ Book description page */}
//           <Route
//             path="/description/:id"
//             element={
//               <ProtectedRoute role="user">
//                 <Description />
//               </ProtectedRoute>
//             }
//           />

//           {/* ✅ Book edit page */}
//           <Route
//             path="/books/edit/:id"
//             element={
//               <ProtectedRoute role="admin">
//                 <EditBook />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/issue"
//             element={
//               <ProtectedRoute role="admin">
//                 <Issue />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/addbook"
//             element={
//               <ProtectedRoute role="admin">
//                 <AddBook />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/member"
//             element={
//               <ProtectedRoute role="admin">
//                 <Members />
//               </ProtectedRoute>
//             }
//           />

//           {/* 🔹 User Protected Routes */}
//           <Route
//             path="/user/overview"
//             element={
//               <ProtectedRoute role="user">
//                 <Overview />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/userbook"
//             element={
//               <ProtectedRoute role="user">
               
//                   <UserBook />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/user/profile"
//             element={
//               <ProtectedRoute role="user">
//                 <Profile />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/borrow"
//             element={
//               <ProtectedRoute role="user">
//                 <Borrow />
//               </ProtectedRoute>
//             }
//           />

//           {/* 🔹 Default redirect */}
//           <Route path="/" element={<Navigate to="/AdminLogin" replace />} />
//           <Route path="*" element={<Navigate to="/AdminLogin" replace />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

// Screens
import Overview from "./screens/Overview/Overview.jsx";
import AddBook from "./screens/AddBooks/AddBook.jsx";
import Books from "./screens/Books/Books.jsx";
import Members from "./screens/Members/Members.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import UserBook from "./screens/UserBook/UserBook.jsx";
import AdminLogin from "./screens/AdminLogin/AdminLogin.jsx";
import Issue from "./screens/Issue/Issue.jsx";
import Borrow from "./screens/UserBorrow/UserBorrow.jsx";
import Description from "./screens/Description/Description.jsx";   // ✅ import description
import EditBook from "./screens/EditBook/EditBook.jsx";  
import ReturnBook from "./screens/Return/Return.jsx";           // ✅ import edit page
import UserDashboard from "./screens/UserDashboard/UserDashboard.jsx"

// Components
import Sidebar from "./Components/Navbar/Navbar.jsx";
import ProtectedRoute from "./Components/Navbar/ProtectedRoute.jsx";

export default function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="app">
      {/* ✅ Sidebar only visible when logged in */}
      {user && <Sidebar />}

      <div className="content">
        <Routes>
          {/* 🔹 Public Login Route */}
          <Route path="/AdminLogin" element={<AdminLogin />} />

          {/* 🔹 Admin Protected Routes */}
          <Route
            path="/overview"
            element={
              <ProtectedRoute role="admin">
                <Overview />
              </ProtectedRoute>
            }
          />

          <Route
            path="/book"
            element={
              <ProtectedRoute role="admin">
                <Books />
              </ProtectedRoute>
            }
          />

          {/* ✅ Book description page */}
          <Route
            path="/description/:id"
            element={
              <ProtectedRoute role="user">
                <Description />
              </ProtectedRoute>
            }
          />

          {/* ✅ Book edit page */}
          <Route
            path="/books/edit/:id"
            element={
              <ProtectedRoute role="admin">
                <EditBook />
              </ProtectedRoute>
            }
          />

          <Route
            path="/issue"
            element={
              <ProtectedRoute role="admin">
                <Issue />
              </ProtectedRoute>
            }
          />

          {/* ✅ Return Book page */}
          <Route
            path="/return"
            element={
              <ProtectedRoute role="admin">
                <ReturnBook />
              </ProtectedRoute>
            }
          />

          <Route
            path="/addbook"
            element={
              <ProtectedRoute role="admin">
                <AddBook />
              </ProtectedRoute>
            }
          />

          <Route
            path="/member"
            element={
              <ProtectedRoute role="admin">
                <Members />
              </ProtectedRoute>
            }
          />

          {/* 🔹 User Protected Routes */}
          <Route
            path="/userdashboard"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/userbook"
            element={
              <ProtectedRoute role="user">
                <UserBook />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user/profile"
            element={
              <ProtectedRoute role="user">
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/borrow"
            element={
              <ProtectedRoute role="user">
                <Borrow />
              </ProtectedRoute>
            }
          />

          {/* 🔹 Default redirect */}
          <Route path="/" element={<Navigate to="/AdminLogin" replace />} />
          <Route path="*" element={<Navigate to="/AdminLogin" replace />} />
        </Routes>
      </div>
    </div>
  );
}
