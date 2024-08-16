'use client'
import Link from "next/link"
import { useState } from "react"

export default function LogoutForm({ didSubmit }) {

    const handleForm = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        // console.log(data);
        const JsonData = JSON.stringify(data)
        // console.log(JsonData) 
        const endpoint = '/api/auth/logout/'
        const options = {
            method: "Post",
            handle: {
                "Content-Type": "application/json"
            },
            body: JsonData
        }
        const response = await fetch(endpoint, options)
        if (response.status === 200) {
            window.location.href = "/"
        }

    }

    return <>
        <form onSubmit={handleForm} className="w-screen h-3/4">
            <div className="flex flex-1 flex-col justify-center lg:px-8">
                <div className=" flex flex-col justify-center items-center sm:mx-auto sm:w-full sm:max-w-sm">
                <img src='/images/permission.png' alt='no Pic' className=" h-24 w-24 mt-3"/>
                    <h2 className="mt-10 text-center text-2xl font-bold w-30 text-gray-800">
                        DO YOU WANT TO LOGOUT?
                    </h2>
                </div>
                <div className=" flex flex-col justify-center items-center mt-5">
                    <button
                        type="submit"
                        className="flex m-auto justify-center rounded-md bg-gray-800 hover:bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-700 w-60"
                    >
                        LOGOUT
                    </button>
            <Link href='/' class="flex w-60 justify-center rounded-md bg-gray-800 hover:bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-700 mt-3">BACK</Link>
                </div>
            </div>
        </form>

    </>

}