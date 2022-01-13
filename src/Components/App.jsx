import React, { lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import s from "./App.module.css";
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import { getCurrentUser } from "../redux/auth/authOperations";
import UserMenu from "./UserMenu/UserMenu";

const ContactsBlock = lazy(() =>
  import("./ContactsBlock/ContactsBlock" /* webpackChunkName: "ContactsPage"*/)
);
const Registration = lazy(() =>
  import("./Registration/Registration" /* webpackChunkName: "RegistrationPage"*/)
);
const Login = lazy(() =>
  import("./Login/Login" /* webpackChunkName: "LoginPage"*/)
);
const StartPage = lazy(() =>
  import("./StartPage/StartPage" /* webpackChunkName: "StartPage"*/)
);

const App = () => {
  const dispatch = useDispatch();
  const isLogIn = useSelector((state) => state.autorization.token);
  
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  
  console.log("App ~ isLogIn", isLogIn)
  // const loading = useSelector((state) => state.showContacts);
  return (
    <>
      
        <nav className={s.navMenu}>
          
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              exact
              to="/"
            >
              StartPage
            </NavLink>
            {!isLogIn && (
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to="/login"
                exact
              >
                Login
              </NavLink>
            )}
            {!isLogIn && (
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to="/registration"
                exact
              >
                Registration
              </NavLink>
            )}
            {isLogIn && (
              <NavLink
                exact
                className={s.link}
                activeClassName={s.activeLink}
                to="/contacts"
              >
                Contacts
              </NavLink>
            )}
          
          {isLogIn && <UserMenu />}
        </nav>
      
      { (
        <Suspense fallback={<h1>Загрузка</h1>}>
          <Switch>
            <PublicRoute restricted redirectTo="/contacts" path="/login">
              <Login />
            </PublicRoute>
            <PublicRoute restricted path="/registration">
              <Registration />
            </PublicRoute>
            <PrivateRoute restricted redirectTo="/login" path="/contacts">
              <ContactsBlock />
            </PrivateRoute>
            <Route path="/">
              <StartPage />
            </Route>
          </Switch>
        </Suspense>
      )}
    </>
  );
};
export default App;
