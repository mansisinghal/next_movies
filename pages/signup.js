import { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { getVariableTypes } from "../constants/signUpConstants";
import { useLocalStorage } from "react-use";
import router from "next/router";

export default function Signup() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [registeredUsers, setRegisteredUsers] = useLocalStorage("users", []);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handlePhoneNo = (e) => {
    setPhoneNo(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else if (registeredUsers.length > 0) {
      let count = 0;
      registeredUsers.map((r) => {
        if (r.email == email) {
          count = 1;
        }
      });
      if (count) {
        setError(true);
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
      setSubmitted(true);
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
      setSubmitted(true);
      router.push("signin");
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
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
              Submit
            </button>
          </form>
        </div>
      </center>
    </div>
  );
}
