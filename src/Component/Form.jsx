import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
          onChange={handleNameChange}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          onChange={handlePasswordChange}
          value={password}
        />
        <button type="submit" className="btn btn-accent w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
