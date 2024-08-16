'use client'
import React, { useState } from 'react'
import useSWR from "swr"


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GetAdmins() {
  const endpoint = `/api/admins`;
  console.log("Fetcher : ", fetcher(endpoint));
  const { data, error, isloading, mutate } = useSWR(endpoint, fetcher)
  console.log("Data : ", data);
  if (error) return "An Error Occured"
  if (isloading) return "Loading.....!"


  // const handleDelete = async (sellerID) => {
  //   console.log("Team Id : ", sellerID);
  //   const response = await fetch(`/api/Sellers/${sellerID}`, {
  //     method: 'DELETE'
  //   });
  //   mutate()
  // }
  return (
    <div className="w-full mb-5 flex flex-col items-center">
          <h3 className="mt-4 md:text-2xl text-xl font-medium w-4/5 text-center rounded-lg bg-blue-600 text-white">ADMINS</h3>
          <table class="table-fixed font-lexend border-separate shadow-lg shadow-slate-700 p-5 rounded-xl w-4/5 m-5 text-center">
            <thead className='bg-gradient-to-t bg-blue-600 mt-20'>
              <tr >
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Name</th>
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Type</th>
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Email</th>            
              </tr>
            </thead>
            <tbody>
              {data && data.map((admins, idx) => {

                return <>
                  <tr>
                    <td className='p-2'>{admins.userName}</td>
                    <td className='p-2'>{admins.type}</td>
                    <td className='p-2 text-ellipsis overflow-hidden'>{admins.email}</td>
                  </tr>
                </>
              })}
            </tbody>
          </table>
        </div>
  )
}
