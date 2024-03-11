import React, { useRef, useState } from "react";
export default function Login() {
  const [EntredValue, setEntredValue] = useState({
    email: "",
    password: "",
  });
  const [isBlur, setIsBlur] = useState({
    email: false,
    password: false,
  });
  // const email= useRef();
  // const password= useRef();

  const EmailIsInvalid = isBlur.email && !EntredValue.email.includes("@");
  const PasswordIsInvalid =
    isBlur.password && EntredValue.password.trim().length < 5;
  const handdleSubmit = (event) => {
    event.preventDefault();
    // const entredEmail= email.current.value;
    // const entredPassword= password.current.value;
    // console.log(entredEmail,entredPassword)
    // email.current.value='';
    // password.current.value='';
  };
  const handleInputChange = (identifier, value) => {
    setEntredValue((prevEntredValue) => {
      return {
        ...prevEntredValue,
        [identifier]: value,
      };
    });
    setIsBlur((prevIsBlur) => {
      return {
        ...prevIsBlur,
        [identifier]: false,
      };
    })
  };
  const handleInputBlur = (identifier) => {
    setIsBlur((prevIsBlur) => {
      return {
        ...prevIsBlur,
        [identifier]: true,
      };
    });
  };
  return (
    <form onSubmit={handdleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            /*ref={email}*/ onChange={(event) =>
              handleInputChange("email", event.target.value)
            }
            value={EntredValue.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {EmailIsInvalid && (
              <p className="error-text">Please enter a valid email</p>
            )}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            /*ref={password}*/ onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={EntredValue.password}
            onBlur={() => handleInputBlur("password")}
          />
          <div className="control-error">
            {PasswordIsInvalid && (
              <p className="error-text">Please enter a valid password</p>
            )}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
