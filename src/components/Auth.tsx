import classes from "./Auth.module.css";
import { authActions } from "../redux-store/auth-slice";
import { useAppDispatch } from "../redux-store/types/HooksType";
import React from "react";
const Auth = () => {
  const dispatch = useAppDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
