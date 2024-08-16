
import Link from "next/link";
import Navbar from "../nav";
import Footer from "../footer";
import React from 'react';
import Ques from "./component/quest";

export default function Faq() {
  
  return (
    <main className="flex min-h-screen flex-col font-mono">
      <Navbar />
      <Ques/>
      <br></br>
      <br></br>
      <br></br>
           <Footer />
    </main>
  );
}