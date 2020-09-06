import React from "react";

const Form = () => {
  const onSubmitHandler = (e) => {
    console.log(username, password);
  };
  return (
    <form type="text">
      <input
        className="formUsername"
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        className="formPassword"
        type="text"
        placeholder="Password"
        value={password}
      />
      <button className="submitLogin" type="button" onClick={onSubmitHandler}>
        Login
      </button>
    </form>
  );
};

export default Form;
