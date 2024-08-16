"use client";
import React, { useState } from "react";

export default function Ques() {
  const [que1, setQues1] = useState(false);
  const [que2, setQues2] = useState(false);
  const [que3, setQues3] = useState(false);
  const [que4, setQues4] = useState(false);
  const [que5, setQues5] = useState(false);

  const handleForQ1 = () => {
    setQues1(!que1);
  };

  const handleForQ2 = () => {
    setQues2(!que2);
  };

  const handleForQ3 = () => {
    setQues3(!que3);
  };
  const handleForQ4 = () => {
    setQues4(!que4);
  };
  const handleForQ5 = () => {
    setQues5(!que5);
  };
  return (
    <>
      <div>
        <div className="container mx-auto mt-12 text-xl my-4">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <br></br>
          <div>
            <div>
              <h2 className="font-bold border-b-2 border-gray-300 my-4">
                <button onClick={handleForQ1}>{que1 ? "-" : "+"}</button> How
                can I make a donation on your website?
              </h2>
              {que1 && (
                <h1>
                  Provide step-by-step instructions on the donation process,
                  including any necessary forms or information.
                </h1>
              )}
            </div>

            <div>
              <h2 className="font-bold border-b-2 border-gray-300 my-4">
                <button onClick={handleForQ2}>{que2 ? "-" : "+"}</button> Is my
                online donation secure?
              </h2>
              {que2 && (
                <h1>
                  Assure donors about the security measures in place, such as
                  SSL encryption, to protect their financial information.
                </h1>
              )}
            </div>

            <div>
              <h2 className="font-bold border-b-2 border-gray-300 my-4">
                <button onClick={handleForQ3}>{que3 ? "-" : "+"}</button> How
                will my donation be used?
              </h2>
              {que3 && (
                <h1>
                  Explain how the funds will be allocated and the specific
                  projects or initiatives they will support.
                </h1>
              )}
            </div>

            <div>
              <h2 className="font-bold border-b-2 border-gray-300 my-4">
                <button onClick={handleForQ4}>{que4 ? "-" : "+"}</button>Do you
                have a minimum donation amount?
              </h2>
              {que4 && (
                <h1>
                  Communicate any minimum donation requirements or if the
                  organization welcomes donations of any amount.
                </h1>
              )}
            </div>

            <div>
              <h2 className="font-bold border-b-2 border-gray-300 my-4">
                <button onClick={handleForQ5}>{que5 ? "-" : "+"}</button> How
                can I get in touch with your organization if I have questions
                about my donation?
              </h2>
              {que5 && (
                <h1>
                  Provide contact information, including email or phone numbers,
                  for donors to reach out with any questions or concerns.
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
