'use client'
import React, { useState } from 'react'
import useSWR from "swr"


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Donations() {
  const endpoint = `/api/donations`;
  console.log("Fetcher : ", fetcher(endpoint));
  const { data, error, isloading, mutate } = useSWR(endpoint, fetcher)
  console.log("Data : ", data);
  if (error) return "An Error Occured"
  if (isloading) return "Loading.....!"


  return (
    <div className="w-full mb-5 flex flex-col items-center">
          <h3 className="mt-4 md:text-2xl text-xl font-medium w-4/5 text-center rounded-lg bg-blue-600 text-white">DONATIONS</h3>
          <table class="table-fixed font-lexend border-separate shadow-lg shadow-slate-700 p-5 rounded-xl w-full m-5 text-center text-xs border border-collapse border-black">
            <thead className='bg-gradient-to-t bg-blue-600 mt-20'>
              <tr >
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Name</th>
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>ID Card No</th>
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Occupation</th> 
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Address</th>
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Phone No</th> 
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Type</th>
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Purpose Of Donation</th> 
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Target</th>        
                <th className='bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg '>Way Of Income</th>     
              </tr>
            </thead>
            <tbody>
              {data && data.map((donation, idx) => {
                return <>
                  <tr>
                    <td className='p-2 border border-black'>{donation.name}</td>
                    <td className='p-2 border border-black'>{donation.idCardNumber}</td>
                    <td className='p-2 border border-black'>{donation.occupation}</td>
                    <td className='p-2 border border-black'>{donation.address}</td>
                    <td className='p-2 border border-black text-ellipsis overflow-hidden'>{donation.phoneNumber}</td>
                    <td className='p-2 border border-black text-ellipsis overflow-hidden'>{donation.type}</td>
                    <td className='p-2 border border-black'>{donation.purposeOfDonation}</td>
                    <td className='p-2 border border-black '>{donation.targetReceiver}</td>
                    <td className='p-2 border border-black text-ellipsis overflow-hidden'>{donation.wayOfIncome}</td>
                  </tr>
                </>
              })}
            </tbody>
          </table>
        </div>
  )
}
