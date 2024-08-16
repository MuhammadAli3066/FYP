"use client";
import React from "react";
import { useState, useEffect } from "react";
import abi from "./contract/Donate.json";
import { ethers } from "ethers";

export default function DonationDetails() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
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

  const [donations, setDetails] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const getDonationDetail = async () => {
      const getDonation = await contract.getDonationDetails();
      setDetails(getDonation);
    };
    contract && getDonationDetail();
  }, [contract]);

  return (
    <>
      <p
        style={{
          textAlign: "center",
          marginTop: "25px",
          marginBottom: "6px",
          fontSize: "20px",
          color: "white",
          backgroundColor: "#5052ff",
          margin: "7px 168px",
          borderRadius: "6px",
        }}
      >
        DONATION DETAILS
      </p>
      {donations.map((donation) => {
        return (
          <div
            className="container-fluid bg-gradient-to-t bg-blue-600 text-white font-extralight mb-3 p-1 rounded-lg"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "20px",
                borderCollapse: "collapse",
                border: "1px solid white",
                
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {donation.from}
                  </td>
                  <td
                    style={{
                        border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "120px",
                    }}
                  >
                    {donation.donorName}
                  </td>

                  <td
                    style={{
                        border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "195px",
                    }}
                  >
                    {String(donation.donationAmount)} Wei
                  </td>
                  <td
                    style={{
                        border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "209px",
                    }}
                  >
                    {new Date(donation.timestamp * 1000).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}
