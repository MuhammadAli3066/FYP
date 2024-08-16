'use client'
import React from 'react';
import { useState, useEffect } from "react";
import abi from "./contract/Donate.json";
import { ethers } from 'ethers';

export default function Form() {

    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });
    const [donationSuccess, setDonationSuccess] = useState(false);

    const [account, setAccount] = useState("None");
    useEffect(() => {
        const connectWallet = async () => {
            const contractAddress = "0x3720D8c976B451Bb70801BDd4ddFAcD3291d6162";
            const contractABI = abi.abi;
            try {
                const { ethereum } = window;

                if (ethereum) {
                    const account = await ethereum.request({
                        method: "eth_requestAccounts",
                    });

                    window.ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });

                    window.ethereum.on("accountsChanged", () => {
                        window.location.reload();
                    });

                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(
                        contractAddress,
                        contractABI,
                        signer
                    );
                    setAccount(account[0]);
                    setState({ provider, signer, contract });
                } else {
                    alert("Please install metamask");
                }
            } catch (error) {
                console.log(error);
            }
        };

        connectWallet();
    }, []);


    //Get Balance Function 
    const [accountBalance, setAccountbalance] = useState();
    const { contract } = state;

    useEffect(() => {
        const getBalanceOfAccount = async () => {
            const balance = await contract.getBalance()
            const balance_str = balance.toString()
            setAccountbalance(balance_str);
        };
        contract && getBalanceOfAccount();
    }, [contract]);


    const handleForm = async (event) => {
        event.preventDefault()

        //Payment Integration
        const { contract } = state;
        const name = document.querySelector("#name").value;
        const amountPassed = document.querySelector("#amount").value;
        console.log(name, amountPassed, contract);
        const amount = { value: ethers.utils.parseEther(`${amountPassed}`) };
        const transaction = await contract.donateFund(name, amount);
        const trans = await transaction.wait();
        console.log("Chexk : ", trans);
        console.log("Transaction is done",);


        //Datanbase Record Pushing
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log("Form data : ", data);
        const JsonData = JSON.stringify(data)
        console.log("Form Json Data : ", JsonData)
        const endpoint = '/api/donateForm/'
        const options = {
            method: "Post",
            handle: {
                "Content-Type": "application/json"
            },
            body: JsonData
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        if (response.status === 201) {
            event.target.reset();

            //Success Notification
            setDonationSuccess(true);
            setTimeout(() => {
                setDonationSuccess(false);
            }, 5000);
        }
    }
    return (
        <>
            <div className="flex flex-col items-center w-full h-4/5 mb-5">

                {donationSuccess && (
                    <div className="bg-green-500 text-white p-2 mt-2 rounded">
                        Donation Successful! Thank you for your contribution.
                    </div>
                )}

                <div className='w-full flex flex-col justify-center items-center text-sm p-2'>
                    <p className='flex flex-col items-center justify-center w-2/5'>Account
                        <span>
                            {account}
                        </span></p>
                    <p className='flex flex-col items-center justify-center w-2/5'>Balance 
                        <span>
                        {accountBalance}  Wei
                        </span>
                    </p>
                </div>


                <div className="p-6 rounded-md shadow-lg shadow-slate-100 bg-white dark:bg-slate-900 w-3/5">
                    <form onSubmit={handleForm}>
                        <div className="grid grid-cols-1">
                            <div className="mb-5">
                                <input
                                    name="name"
                                    id="name"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Enter name..."
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    name="idCardNumber"
                                    id="idCardNumber"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="CNIC (without special charcter)"
                                    maxlength="13"
                                    minLength="13"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Contact number"
                                    maxlength="18"
                                    minLength="11"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    name="address"
                                    id="address"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    name="state"
                                    id="state"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Province/State"
                                />
                            </div>
                            <div className="mb-5">
                                <select
                                    name="type"
                                    id="type"
                                    className="form-select w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                >
                                    <option value="" hidden>Select Type</option>
                                    <option value="national">National</option>
                                    <option value="international">International</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <input
                                    name="occupation"
                                    id="occupation"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Profession"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    name="wayOfIncome"
                                    id="wayOfIncome"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Way of Income"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    name="purposeOfDonation"
                                    id="purposeOfDonation"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Purpose of Donation"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    name="targetReceiver"
                                    id="targetReceiver"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Recipient"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    name="amount"
                                    id="amount"
                                    type="text"
                                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 placeholder-black placeholder-opacity-50 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                    placeholder="Amount in wei"
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <button
                                type="submit"
                                id="submit"
                                name="send"
                                className="text-sm p-2 px-10 text-white rounded-2xl m-2 bg-blue-500 hover:bg-blue-700"
                            >
                                DONATE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
