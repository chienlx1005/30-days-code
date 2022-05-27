import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ToastForm.scss";
function ToastForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const handleUser = (e) => {
    setUsername(e.target.value);
  };
  const handleOnEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleRepass = (e) => {
    setRepass(e.target.value);
  };
  const handleSubmit = () => {
    if (!username) {
      toast.error("User name is not invalid!");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Email is not valid!");
      return;
    }
    if (!pass) {
      toast.error("Password is empty!");
      return;
    }
    if (!repass) {
      toast.error("Repassword is not invalid!");

      return;
    }
    if (pass !== repass) {
      toast.error("Repassword is not same password!");
      return;
    }
    // code bla bla
    toast.success("Sigun success");
    setUsername("");
    setEmail("");
    setPass("");
    setRepass("");
  };
  return (
    <>
      <div className="section_form">
        <div className="container">
          <h1>SIGN UP</h1>
          <div className="form_control">
            <input
              type="text"
              value={username}
              onChange={(e) => handleUser(e)}
              placeholder="User name from 3 to 6 character"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => handleOnEmail(e)}
              placeholder="Email"
            />
            <input
              type="password"
              value={pass}
              onChange={(e) => handlePass(e)}
              placeholder="Password from 3 to 6 character"
            />
            <input
              type="password"
              value={repass}
              onChange={(e) => handleRepass(e)}
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="btn_submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
          <div className="signup_link">
            Have a account ? <a href="#">Login</a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default ToastForm;
