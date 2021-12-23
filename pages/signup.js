import { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { getVariableTypes } from "../constants/signUpConstants";
import { useLocalStorage } from "react-use";
import router from "next/router";
import Alerts from "../components/Alerts";

export default function Signup() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [registeredUsers, setRegisteredUsers] = useLocalStorage("users", []);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      Alerts("Error", `Please fill all details!`, "danger", "top-right", 2000);
    } else if (registeredUsers.length > 0) {
      let count = 0;
      registeredUsers.map((r) => {
        if (r.email == email) {
          count = 1;
        }
      });
      if (count) {
        Alerts(
          "Error",
          `User already exists, Please Login to continue.`,
          "danger",
          "top-right",
          2000
        );
        return;
      } else {
        let arr = {
          email: email,
          name: name,
          password: password,
          phoneno: phoneno,
          profession: profession,
        };
        setRegisteredUsers([...registeredUsers, arr]);
      }
      Alerts(
        "Success",
        `User Registered Successfully`,
        "success",
        "top-right",
        2000
      );
      router.push("signin");
    } else {
      let arr = [
        {
          email: email,
          name: name,
          password: password,
          phoneno: phoneno,
          profession: profession,
        },
      ];
      setRegisteredUsers(arr);
      Alerts(
        "Success",
        `User Registered Successfully`,
        "success",
        "top-right",
        2000
      );
      router.push("signin");
    }
  };

  // Showing success message

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      <center>
        <div style={{ width: "50%" }}>
          <form>
            {/* Labels and inputs for form data */}
            {/* <label className="label">Name</label>
        <input onChange={handleName} className="input" 
          value={name} type="text" />
  
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input" 
          value={email} type="email" />

        <label className="label">PhoneNo</label>
        <input onChange={handlePhoneNo} className="input" 
          value={phoneno} type="phoneno" />
  
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input" 
          value={password} type="password" />
  
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
         */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              label="Name"
              type="text"
              fullWidth
              required
            />
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
            />
            <TextField
              autoFocus
              margin="dense"
              id="phoneno"
              value={phoneno}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              label="Phone Number"
              type="number"
              fullWidth
              required
            />
            <TextField
              autoFocus
              select
              margin="dense"
              id="Profession"
              value={profession}
              onChange={(e) => {
                setProfession(e.target.value);
              }}
              label="Profession"
              fullWidth
              required
            >
              {getVariableTypes.map((ele) => (
                <MenuItem key={ele.value} value={ele.value}>
                  {ele.label}
                </MenuItem>
              ))}
            </TextField>
            <button onClick={handleSubmit} className="btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </center>
    </div>
  );
}
