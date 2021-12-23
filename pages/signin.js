import react, { useState } from "react";
import { useLocalStorage } from "react-use";
import { TextField, MenuItem } from "@mui/material";
import router from "next/router";
import Alerts from "../components/Alerts";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsers] = useLocalStorage("users", []);
  const [isLoggedIn,setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  console.log(registeredUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Alerts("Error", `Please fill all details!`, "danger", "top-right", 2000);
    } else if (registeredUsers.length > 0) {
      let count = 0;
      registeredUsers.map((r) => {
        if (r.email == email && r.password == password) {
          count = 1;
        }
      });
      if (count) {
        Alerts(
          "Success",
          `User Logged In Successfully`,
          "success",
          "top-right",
          2000
        );
        setIsLoggedIn(true)
        router.push("movies");
      } else {
        Alerts(
          "Error",
          `Wrong Email Id or Password`,
          "danger",
          "top-right",
          2000
        );
        return;
      }
    } else {
      Alerts(
        "Error",
        `Wrong Email Id or Password`,
        "danger",
        "top-right",
        2000
      );
      return;
    }
  };
  return (
    <div className="form">
      <div>
        <h1>User Login</h1>
      </div>

      <center>
        <div style={{ width: "50%" }}>
          <form>
            {" "}
            <TextField
              autoFocus
              margin="dense"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              type="email"
              fullWidth
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              type="password"
              fullWidth
              required
            />{" "}
            <button onClick={handleSubmit} className="btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default SignIn;
