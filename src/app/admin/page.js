import Link from "next/link";
import SideBar from "./components/sideBar";
import UpperBar from "./components/upperBar";

export default async function Admins() {
  return (
    <main className="flex font-mono ">
      <SideBar />
      <div className="w-4/5">
        <UpperBar />
        <div className="justify-center flex flex-col items-center w-full mt-10">
          <h1 className="mt-4 text-2xl font-medium w-4/5 text-center rounded-lg bg-blue-600 text-white">
            Welcome to Bait Ul Mal Admin portal
          </h1>
          <p className="px-5 font-medium w-4/5 rounded-lg bg-blue-500 text-white mt-4">
            E-donation websites have revolutionized philanthropy, providing a
            convenient and transparent way for individuals and businesses to
            contribute to charitable causes. These platforms offer an accessible
            gateway for donors worldwide to support initiatives from the comfort
            of their homes. The user-friendly interfaces facilitate seamless
            online contributions, utilizing secure payment systems to ensure the
            safety of financial transactions. Transparency is a key feature of
            E-donation platforms, as donors receive real-time updates on how
            their funds are utilized and the progress of supported projects.
            This fosters trust and a sense of connection between donors and
            charitable organizations. The personalization aspect allows donors
            to align their contributions with specific causes, set up recurring
            donations, and engage in a more fulfilling philanthropic experience.
          </p>
        </div>
      </div>
    </main>
  );
}
