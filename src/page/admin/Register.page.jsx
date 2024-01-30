import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/baseUrl";
import { DataContext } from "../../context/DataContext";

const RegisterPage = () => {
  const [added, setAdded] = useState(false);
  const formRef = useRef();
  const nav = useNavigate();
  const { addUser } = useContext(DataContext);
  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const { data } = await api.post("users", {
      email: formData.get("email"),
      username: formData.get("user_name"),
      password: formData.get("password"),
    });
    console.log(data);
    addUser(data);
    localStorage.setItem("auth", JSON.stringify(data));
    nav("/dashboard");
    // const { data } = await api.get("users");

    // const compareUsername = data.username === formData.username;
    // const comparePassword = data.password === formData.password;
    // const compareEmail = data.email === formData.email;

    // if (compareUsername & comparePassword & compareEmail) {
    //   setAdded(true);
    //   // throw new Error();
    // } else {
    //   const { data } = await api.post("users", {
    //     email: formData.get("email"),
    //     username: formData.get("user_name"),
    //     password: formData.get("password"),
    //   });
    //   console.log(data);
    //   addUser(data);
    //   localStorage.setItem("auth", JSON.stringify(data));
    //   nav("/dashboard");
    // }
  };
  return (
    <div className=" h-screen">
      <form
        ref={formRef}
        onSubmit={handleForm}
        className="w-[30%] mt-7 shadow-2xl mx-auto p-5 border  border-text"
      >
        <div className="flex  flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="border-2 mt-1 border-black"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="flex  flex-col mt-3">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            className="border-2 mt-1 border-black"
            name="user_name"
            id="userName"
            required
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="border-2 mt-1  border-black"
            name="password"
            id="password"
            required
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="Submit"
            className="border bg-black text-nav border-black px-4 py-1"
          >
            Register
          </button>
        </div>
        {added && (
          <div className="flex text-red-600 mt-4 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4  bg-nav  rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <span>This account has already.</span>
          </div>
        )}
        <div className="flex mt-4 justify-between">
          <div className="flex  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffd780"
              stroke="#425272"
              strokeWidth={1.5}
              className="w-8 select-none h-8"
            >
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>
            <div>
              <h4 className=" text-text font-medium  select-none text-xl bg-nav">
                OPTION
              </h4>
              <span className=" text-nav font-medium select-none text-sm ">
                Books
              </span>
              <span className="text-nav font-medium select-none text-sm ">
                Store
              </span>
            </div>
          </div>
          <Link to={"/adminLogin"}>
            <button className=" font-medium underline text-text">
              To Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
