
// // import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { login } from "../../features/authSlice";
// // import { auth, googleProvider } from "../../features/firebase";
// // import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// // import { useNavigate } from "react-router-dom";
// // import "./AdminLogin.css";

// // export default function AdminLogin() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // ✅ Local helper for saving user data
// //   const saveUser = (user) => {
// //     const role = user.email === "admin@gmail.com" ? "admin" : "user";

// //     const userData = {
// //       name: user.displayName || user.email.split("@")[0],
// //       email: user.email,
// //       photo: user.photoURL || "",
// //       phone: user.phoneNumber || "",
// //       address: "",
// //       role,
// //     };

// //     dispatch(login(userData));
// //     localStorage.setItem("user", JSON.stringify(userData)); // persist
// //     navigate(role === "admin" ? "/overview" : "/book");
// //   };

// //   // 📌 Email/Password Login
// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const userCred = await signInWithEmailAndPassword(auth, email, password);
// //       saveUser(userCred.user);
// //     } catch (err) {
// //       console.error("Login Error:", err);
// //       setError("Invalid email or password");
// //     }
// //   };

// //   // 📌 Google Login
// //   const handleGoogleLogin = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, googleProvider);
// //       saveUser(result.user);
// //     } catch (err) {
// //       console.error("Google Login Error:", err);
// //       setError("Google login failed, try again");
// //     }
// //   };

// //   return (
// //     <div className="login-wrapper">
// //       <div className="login-card">
// //         <h2 className="login-title">Login</h2>

// //         {/* Email/Password Login */}
// //         <form onSubmit={handleLogin} className="login-form">
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           <button type="submit" className="login-btn">Login</button>
// //           {error && <p className="error-text">{error}</p>}
// //         </form>

// //         <div className="divider">
// //           <span style={{ background: "#7d5a08" }}>OR</span>
// //         </div>

// //         {/* Google Login */}
// //         <button className="google-btn" onClick={handleGoogleLogin}>
// //           <i className="bi bi-google google"></i> Sign in with Google
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../../features/authSlice";
// import { auth, googleProvider } from "../../features/firebase";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import "./AdminLogin.css";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // ✅ Local helper for saving user data
//   const saveUser = (user) => {
//     const role = user.email === "admin@gmail.com" ? "admin" : "user";

//     const userData = {
//       name: user.displayName || user.email.split("@")[0],
//       email: user.email,
//       photo: user.photoURL || "",
//       phone: user.phoneNumber || "",
//       address: "",
//       role,
//     };

//     dispatch(login(userData));
//     localStorage.setItem("user", JSON.stringify(userData)); // persist
//     navigate(role === "admin" ? "/overview" : "/book");
//   };

//   // 📌 Email/Password Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCred = await signInWithEmailAndPassword(auth, email, password);
//       saveUser(userCred.user);
//     } catch (err) {
//       console.error("Login Error:", err);
//       setError("Invalid email or password");
//     }
//   };

//   // 📌 Google Login
//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       saveUser(result.user);
//     } catch (err) {
//       console.error("Google Login Error:", err);
//       setError("Google login failed, try again");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>

//         {/* Email/Password Login */}
//         <form onSubmit={handleLogin} className="login-form">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="login-btn">Login</button>
//           {error && <p className="error-text">{error}</p>}
//         </form>

//         <div className="divider">
//           <span style={{ background: "#7d5a08" }}>OR</span>
//         </div>

//         {/* Google Login */}
//         <button className="google-btn" onClick={handleGoogleLogin}>
//           <i className="bi bi-google google"></i> Sign in with Google
//         </button>
//       </div>
//     </div>
//   );

// // import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { login } from "../../features/authSlice";
// // import { auth, googleProvider } from "../../features/firebase";
// // import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// // import { useNavigate } from "react-router-dom";
// // import "./AdminLogin.css";

// // export default function AdminLogin() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // ✅ Save user to Redux, LocalStorage, and DB.json
// //   const saveUser = async (user) => {
// //     const role = user.email === "admin@gmail.com" ? "admin" : "user";

// //     const userData = {
// //       id: Date.now(), // unique ID for json-server
// //       name: user.displayName || user.email.split("@")[0],
// //       email: user.email,
// //       photo: user.photoURL || "",
// //       phone: user.phoneNumber || "",
// //       address: "",
// //       role,
// //     };

// //     // Dispatch to Redux + LocalStorage
// //     dispatch(login(userData));
// //     localStorage.setItem("user", JSON.stringify(userData));

// //     // ✅ Add new user to Members in db.json
// //     try {
// //       // Check if user already exists in DB
// //       const res = await fetch(`http://localhost:3000/Members?email=${user.email}`);
// //       const existing = await res.json();

// //       if (existing.length === 0) {
// //         // Add user to DB
// //         await fetch("http://localhost:3000/Members", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(userData),
// //         });
// //         console.log("New member added to DB.json");
// //       } else {
// //         console.log("Member already exists in DB.json");
// //       }
// //     } catch (err) {
// //       console.error("Error adding user to DB.json:", err);
// //     }

// //     navigate(role === "admin" ? "/overview" : "/book");
// //   };

// //   // 📌 Email/Password Login
// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const userCred = await signInWithEmailAndPassword(auth, email, password);
// //       saveUser(userCred.user);
// //     } catch (err) {
// //       console.error("Login Error:", err);
// //       setError("Invalid email or password");
// //     }
// //   };

// //   // 📌 Google Login
// //   const handleGoogleLogin = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, googleProvider);
// //       saveUser(result.user);
// //     } catch (err) {
// //       console.error("Google Login Error:", err);
// //       setError("Google login failed, try again");
// //     }
// //   };

// //   return (
// //     <div className="login-wrapper">
// //       <div className="login-card">
// //         <h2 className="login-title">Login</h2>

// //         {/* Email/Password Login */}
// //         <form onSubmit={handleLogin} className="login-form">
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           <button type="submit" className="login-btn">Login</button>
// //           {error && <p className="error-text">{error}</p>}
// //         </form>

// //         <div className="divider">
// //           <span style={{ background: "#7d5a08" }}>OR</span>
// //         </div>

// //         {/* Google Login */}
// //         <button className="google-btn" onClick={handleGoogleLogin}>
// //           <i className="bi bi-google google"></i> Sign in with Google
// //         </button>
// //       </div>
// //     </div>
// //   );
// }
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { auth, googleProvider } from "../../features/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Save user to Redux, localStorage, and db.json Members
  const saveUser = async (user) => {
    const role = user.email === "admin@gmail.com" ? "admin" : "user";

    const userData = {
      id: Date.now(), // unique ID for db.json
      name: user.displayName || user.email.split("@")[0],
      email: user.email,
      photo: user.photoURL || "",
      phone: user.phoneNumber || "",
      address: "",
      role,
    };

    // Redux + localStorage
    dispatch(login(userData));
    localStorage.setItem("loggedInUser", JSON.stringify(userData)); // ✅ FIXED KEY

    // Add user to db.json (Members)
    try {
      const res = await fetch(`http://localhost:3000/Members?email=${user.email}`);
      const existing = await res.json();

      if (existing.length === 0) {
        await fetch("http://localhost:3000/Members", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
        console.log("✅ New member added to DB.json:", userData.email);
      } else {
        console.log("ℹ️ Member already exists in DB.json");
      }
    } catch (err) {
      console.error("❌ Error adding user to DB.json:", err);
    }

    // Redirect
    navigate(role === "admin" ? "/overview" : "/book");
  };

  // 📌 Email/Password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      await saveUser(userCred.user);
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid email or password");
    }
  };

  // 📌 Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await saveUser(result.user);
    } catch (err) {
      console.error("Google Login Error:", err);
      setError("Google login failed, try again");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        {/* Email/Password Login */}
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
          {error && <p className="error-text">{error}</p>}
        </form>

        <div className="divider">
          <span style={{ background: "#7d5a08" }}>OR</span>
        </div>

        {/* Google Login */}
        <button className="google-btn" onClick={handleGoogleLogin}>
          <i className="bi bi-google google"></i> Sign in with Google
        </button>
      </div>
    </div>
  );
}
