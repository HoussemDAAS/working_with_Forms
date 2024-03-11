import React, { useRef, useState } from "react";
export default function Login() {
  // const [EntredValue, setEntredValue] = useState({
  //   email: "",
  //   password: "",
  // });
const email= useRef();
const password= useRef();

// const handleInputChange = (identifier,value) => {
//   setEntredValue((prevEntredValue) => {
//     return {
//       ...prevEntredValue,
//       [identifier]: value,
//     };
//   })
// }
  const handdleSubmit = (event) => {
    event.preventDefault();
const entredEmail= email.current.value;
const entredPassword= password.current.value;
console.log(entredEmail,entredPassword)
  };

  return (
    <form onSubmit={handdleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} /*onChange={(event)=>handleInputChange('email',event.target.value)} value={EntredValue.email}  *//>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} /*onChange={(event)=>handleInputChange('password',event.target.value)} value={EntredValue.password}*/ />
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
