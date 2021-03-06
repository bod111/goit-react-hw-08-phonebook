import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";

import s from "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.autorization.user.name);
  return (
    <>
      {name && (
        <div>
          <span>Hello, {name} </span>
          <button
            className={s.UserMenuButton}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Выйти
          </button>
        </div>
      )}
    </>
  );
};

export default UserMenu;