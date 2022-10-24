import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import classes from "../components/css/Form.module.css";
// import { UserAuth } from "../context/AuthContext";

function Form() {
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  //   const navigate = useNavigate();
  //   const { } = UserAuth();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="container centre">
      <h1>
        {isLogin ? "Sign in to your account" : "Sign up for a free account"}
      </h1>
      <section className={classes.auth}>
        <form>
          {/* {!isLogin && (
          <div>
            <div className={classes.control}>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                required
                // ref={firstnameInputRef}
              ></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="surname"
                required
                // ref={lastnameInputRef}
              ></input>
            </div>
          </div>
        )} */}
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          {!isLogin && (
            <div className={classes.control}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                required
                ref={confirmPasswordInputRef}
              />
            </div>
          )}
          <div className={classes.actions}>
            {
              <button className={classes.primaryButton}>
                {isLogin ? "Login" : "Create Account"}
              </button>
            }
            <button
              type="button"
              className={(classes.secondaryButton, classes.toggle)}
              onClick={switchAuthModeHandler}
            >
              {isLogin
                ? "Don't have an account yet? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form;
