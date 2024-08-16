'use client'
import Link from "next/link"
import { useState } from "react"

export default function LoginForm({ didSubmit }) {

    const [result, updateResults] = useState(null)

    const handleForm = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
       
        const JsonData = JSON.stringify(data)
       
        let jsonObject = JSON.parse(JsonData);
        let userType = jsonObject.userType;
       
        

        

        const endpoint = '/api/auth/login'
        const options = {
            method: "Post",
            handle: {
                "Content-Type": "application/json"
            },
            body: JsonData
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        if (response.status === 200) {
            if(userType == "donator"){
                window.location.href = "/home"
            }
            else{
                window.location.href = "/admin"
            }
            
        }
        updateResults(result)
        if (didSubmit) {
            didSubmit(result)
        }
       

    }

    return <>
        <form onSubmit={handleForm} className='flex h-screen items-center justify-center bg-[url("/images/log1.jpg")] bg-cover'>
            <div className="flex flex-col justify-center w-2/5 bg-black bg-opacity-80 rounded-lg text-white p-2">
                <div className=" flex flex-col justify-center items-center sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src='/images/permission.png' alt='no Pic' className=" h-24 w-24 mt-3" />
                    <h2 className="mt-10 text-center text-2xl font-bold w-30 text-white">
                        LOGIN
                    </h2>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
                    <label htmlFor="userName" className="block text-sm font-medium leading-6 text-white">
                        User Name
                    </label>
                    <input type="text" defaultValue="" id="type" name="userName" className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mt-3" />
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
                    <label htmlFor="userType" className="block text-sm font-medium leading-6 text-white">
                        Type
                    </label>
                    <select id="userType" name="userType" className="block w-full rounded-md border-0 px-4 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mt-3 bg-white ">
                        <option value="" hidden></option>
                        <option value="donator">Donator</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                        Password
                    </label>
                    <input type="password" defaultValue="" id="password" name="password" className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mt-3" />
                </div>
                <div className="flex flex-col justify-center items-center w-full mt-5">
                    <button
                        type="submit"
                        className="flex justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-700 w-40"
                    >
                        LOGIN
                    </button>
                    <Link
                        href='/register'
                        className="flex justify-center rounded-md bg-green-600 hover:bg-green-700 px-3  text-xs  font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-700 w-40 mt-1"
                    >
                        REGISTER
                    </Link>
                </div>
            </div>
        </form>
        {/* <div>
            <h3>{result && JSON.stringify(result)}</h3>
        </div> */}
    </>

}