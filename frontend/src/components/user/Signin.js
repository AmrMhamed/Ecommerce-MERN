import React from "react";
import Style from "./AuthStyle.module.css";
function Signin() {
  return (
    <div className={Style.Auth_form_container}>
      <form className={Style.Auth_form}>
        <div className={Style.Auth_form_content}>
          <h3 className={Style.Auth_form_title}>Sign In</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              className="form-control mt-1"
              placeholder="Enter UserName"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type='password'
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-2" style={{paddingTop:'10px'}}>
             <b><a href="/register">register?</a></b>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signin;
