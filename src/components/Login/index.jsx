import React, { useState, useEffect } from "react";
import "./login.css";

// image
import Logo from "../../assets/logo.svg";
import axios from "axios";
import { getUser } from "../../features/userSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BACK_END_URL } from "../../utils";
const Login = () => {
  let { user } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(`${BACK_END_URL}/auth/adminLogin`, {
        email,
        password,
      });
      dispatch(getUser({ user: data.user, token: data.token }));
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      toast.success("Authentcation Success! Redirecting", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (user && user !== null && user !== undefined) {
        navigate("/home");
      }
    }, 2000);
  }, [navigate, user]);

  return (
    <div>
      <ToastContainer />
      <div className="loginPage">
        <form className="form" onSubmit={submit}>
          <img src={Logo} className="logo" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="btn" onClick={submit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
