import React, { useContext } from "react";
import Style from "./AuthStyle.module.css";
import axios from "axios";

function Register() {
  let signup = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", e.target.name.value);
    formdata.append("email", e.target.email.value);
    formdata.append("password1", e.target.password1.value);
    formdata.append("password2", e.target.password2.value);
    formdata.append("pic", e.target.image.value);
    console.log(formdata);
    let response = await axios.post("http://127.0.0.1:8000/auth/signup", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    response = await response.json();
    console.log(response);
    if (response.status == 200)
      window.location.replace("http://127.0.0.1:3000/login");
  };
  return (
    <div className={Style.Auth_form_container}>
      <form className={Style.Auth_form} onSubmit={signup}>
        <div className={Style.Auth_form_content}>
          <h3 className={Style.Auth_form_title}>Sign up</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              name="name"
              className="form-control mt-1"
              placeholder="Enter UserName"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password1"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Upload Photo</label>
            <input
              type="file"
              name="image"
              placeholder="Enter image"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
