import React from "react";
import Form from "../component/Form";
import Illustration from "../component/Illustration";
import InputText from "../component/InputText";
import classes from "../styles/Login.module.css";
import Button from "../component/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <InputText
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <InputText type="password" placeholder="Enter password" icon="lock" />

          <Button text="Login" />
          <div className="info">
            No account? <Link to="/signup">Sign Up</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
