import { useState } from "react";
import Master from "../Layouts/Master";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  let title = "Login";
  let breadcrumb = [
    {
      url: "",
      label: "Home",
    },
    {
      url: "",
      label: "Page",
    },
    {
      url: "",
      label: "Login",
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    localStorage.setItem("login", "true");
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        console.log(userCredentials);
      }
    );
  };
  return (
    <div>
      <Master>
        {/* <Header title={title} breadcrumb={breadcrumb} /> */}
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <img
                className="m-auto pt-5"
                height="400px"
                src="./src/assets/img/login.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <div className="bg-primary mt-5 p-5 rounded-3 w-75">
                <h1>Login</h1>
                <form onSubmit={loginUser}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="name">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-secondary w-100 py-3"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <div className="col-12">
                      <h6 className="text-white">Already has Account?</h6>
                      <button
                        className="btn bg-light w-100 py-3 fw-bold"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Master>
    </div>
  );
}

export default Login;
