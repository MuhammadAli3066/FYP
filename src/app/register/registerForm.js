
"use client";
import { useState } from "react";

export default function RegisterForm({ didSubmit }) {
  const [result, updateResults] = useState(null);

  const handleForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const JsonData = JSON.stringify(data);
    console.log(JsonData);
    const endpoint = "/api/auth/register";
    const options = {
      method: "Post",
      handle: {
        "Content-Type": "application/json",
      },
      body: JsonData,
    };
    console.log(options);
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (response.status === 201) {
      window.location.href = "/";
    }
    updateResults(result);
    if (didSubmit) {
      didSubmit(result);
    }
    
  };
  

  return (
    <>
      <form
        onSubmit={handleForm}
        className='flex h-screen items-center justify-center bg-[url("/images/log1.jpg")] bg-cover py-10'
      >
        <div className="flex flex-col justify-center w-2/5 bg-gray-900 bg-opacity-90 rounded-lg text-white p-2">
          <div className=" flex flex-col justify-center items-center sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              src="/images/permission.png"
              alt="no Pic"
              className=" h-24 w-24 mt-1"
            />
            <h2 className="mt-4 text-center text-2xl font-bold w-30 text-white">
              Register Account
            </h2>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-1">
            <label
              htmlFor="userName"
              className="block text-sm font-medium leading-6 text-white"
            >
              User Name
            </label>
            <input
              type="text"
              defaultValue=""
              id="username"
              name="userName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mt-1"
            />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-1">
            <label
              htmlFor="userType"
              className="block text-sm font-medium leading-6 text-white"
            >
              Type
            </label>
            <select
              id="userType"
              name="userType"
              className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mt-1 bg-white "
            >
              <option value="" hidden></option>
              <option value="donator">Donator</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email
            </label>
            <input
              type="email"
              defaultValue=""
              id="email"
              name="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-black placeholder-opacity-50 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mt-1"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-white"
            >
              Password
            </label>
            <input
              type="password"
              defaultValue=""
              id="password"
              name="password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mt-1"
              minLength="6"
            />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-1">
            <label
              htmlFor="cnfrmPassword"
              className="block text-sm font-medium leading-6 text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              defaultValue=""
              id="cnfrmPassword"
              name="cnfrmPassword"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mt-1 w-30"
              minLength="6"
            />
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="flex m-auto justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-700 w-60"
            >
              REGISTER
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
