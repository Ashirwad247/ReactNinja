import React, { useContext } from "react";
import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();
  //   console.log(value);

  //   return "Hello world";
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
