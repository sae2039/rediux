import UserProfile from "./UserProfile";
import classes from "./Header.module.css";
import { authActions } from "../redux-store/auth-slice";
import { useAppDispatch, useAppSelector } from "../redux-store/types/HooksType";
const Header = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const islogedIn = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        {islogedIn && (
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </nav>
        )}
      </header>
      {islogedIn && <UserProfile />}
    </>
  );
};

export default Header;
