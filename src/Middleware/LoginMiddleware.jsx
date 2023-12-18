import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Home from "../Pages/Home";

const LoginMiddleware = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default LoginMiddleware;
