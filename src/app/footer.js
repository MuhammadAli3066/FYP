import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-between items-center bg-gray-900 h-15 w-screen p-3">
        <div className="flex justify-between items-center text-white text-xl">
          <img
            src="/images/logo.png"
            alt="no Pic"
            className=" h-12 w-11 mr-3 "
          />
          Bait-ul-Mal
        </div>
        <div className="text-blue-600">
          © 2023 Bait-ul-Mal,Inc.All rights reserved.
        </div>

        <div className="text-white">
          <h4>Contact : 03330476538</h4>
          <h4>Address : Street-No# A,QADEER GARDEN,ISLAMABAD</h4>
          <h4>
            Linkedin :
            <Link href="https://www.linkedin.com/feed/" class="p-3 text-blue-500 hover:underline">
              Linkedin
            </Link>
          </h4>
          <h4>
            GitHub :
            <Link href="https://github.com/MuhammadAli3066" class="p-3 text-blue-500 hover:underline">
              GitHub
            </Link>
          </h4>
        </div>
      </footer>
    </>
  );
}
