import React from 'react';
import CheckBox from '../component/CheckBox';
import Form from '../component/Form';
import Illustration from '../component/Illustration';
import InputText from '../component/InputText';
import classes from '../styles/SignUp.module.css';
import Button from '../component/Button';
import Info from '../component/Info';

const SignUp = () => {
    return (
      <>
        <h1>Create an account</h1>
        <div className="column">
          <Illustration />
          <Form className={`${classes.signup}`}>
            <InputText type="text" placeholder="Enter Name" icon="person" />
            <InputText
              type="email"
              placeholder="Enter email"
              icon="alternate_email"
            />
            <InputText type="password" placeholder="Enter email" icon="lock" />
            <InputText
              type="password"
              placeholder="Enter password"
              icon="lock"
            />
            <InputText
              type="password"
              placeholder="Confirm password"
              icon="lock_clock"
            />
            <CheckBox
              type="checkbox"
              text="I agree to the Terms & Conditions"
            />

            <Button text="Submit now" />
            <Info />
          </Form>
        </div>
      </>
    );
};

export default SignUp;