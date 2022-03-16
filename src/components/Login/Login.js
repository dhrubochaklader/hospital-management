import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const {
    signInUsingGoogle,
    handleRegistration,
    isLogin,
    handleEmailChange,
    handlePasswordChange,
    toggleLogIn,
    error,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogle = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <form onSubmit={handleRegistration}>
        <h1 className="text-primary">
          Please {isLogin ? "Log In" : "Register"}
        </h1>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              required
              type="email"
              className="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordChange}
              required
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogIn}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Allready Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? "Log In" : "Register"}
        </button>
      </form>
      <div>-----------------or------------------</div>
      <h2>Please Log In</h2>
      <button onClick={handleGoogle} className="btn btn-warning">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
