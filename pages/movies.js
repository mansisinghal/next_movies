import react, { useState } from "react";
import { useLocalStorage } from "react-use";
import { TextField, MenuItem } from "@mui/material";
import router from "next/router";
import Alerts from "../components/Alerts";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsers] = useLocalStorage("users", []);
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
        <h1>Movies</h1>
      </div>

      <p>Movies toh daal lo yaar</p>
    </div>
  );
};

export default SignIn;
