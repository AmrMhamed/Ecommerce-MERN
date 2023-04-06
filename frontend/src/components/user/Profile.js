import React from "react";
import style from "./profile.module.css";
function Profile() {
  return (
    <div className={style.container}>
      <h1>Profile Setting</h1>
      <div className={style.container2}>
        <img src="https://res.cloudinary.com/dm1yzcljo/image/upload/v1680753853/products/ebbkkemhz5msx2f9djjr.jpg" />
        <button >change image</button>
      </div>
      <label>User Name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="text"></input>
      <label>Password</label>
      <input type="password"></input>
      <label>Confirm Password</label>
      <input type="password"></input>
    </div>
  );
}

export default Profile;
