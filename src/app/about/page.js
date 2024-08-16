import Link from "next/link";
import Navbar from "../nav";
import Footer from "../footer";
import Image from "next/image";

export default async function About() {
  return (
    <main className="flex min-h-screen flex-col font-mono">
      <Navbar />
      <div className="flex flex-col justify-center items-center py-5">
        <h2 className="text-3xl font-bold mb-5">ABOUT US</h2>
        <div className="flex justify-center items-center">
          <Image
            src="/images/donation1.jpg"
            alt="Image Description"
            width={300}
            height={300}
            className="mr-3 rounded-lg "
          />
          <div className="flex flex-col justify-start items-start w-3/6 bg-gray-600 bg-opacity-5 rounded-lg p-4">
            <h2 className="text-3xl font-bold bg-gray-600 px-5 py-1 rounded-lg bg-opacity-10 w-full text-center">
              BACKGROUND
            </h2>
            <p className="p-4">
              Donation websites have transformed the landscape of philanthropy
              over the past two decades, evolving from early platforms like
              JustGiving and Kickstarter to an expansive ecosystem of online
              fundraising. In the mid-2000s, the emergence of user-friendly
              platforms such as GoFundMe and Kickstarter allowed for diverse
              fundraising campaigns, while the 2010s witnessed rapid growth and
              diversification, from disaster relief efforts to personal medical
              expenses and artistic projects. As the industry expanded,
              regulatory challenges emerged, leading to improved security
              measures and partnerships with established nonprofits. The
              integration of mobile apps and social media further empowered
              users to reach a global audience, and ongoing technological
              advancements continue to shape the future of online giving.
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center mt-5">
          <Image
            src="/images/policy1.jpg"
            alt="Image Description"
            width={300}
            height={300}
            className="mr-3 rounded-lg "
          />
          <div className="flex flex-col justify-start items-start w-3/6 bg-gray-600 bg-opacity-5 rounded-lg p-4">
            <h2 className="text-3xl font-bold bg-gray-600 px-5 py-1 rounded-lg bg-opacity-10 w-full text-center">
              POLICY
            </h2>
            <p className="p-4">
              Donor has to read these terms and conditions carefully by
              accessing or using the internet payment gateway service, donor
              agrees to be bound by the terms and conditions. Saviour may modify
              this term and conditions from time to time and such shall be
              effective immediately upon posting. By submitting payment through
              the donation service, the donor authorize to process donation
              payment. You shall be responsible for any legal, regulatory, or
              banking penalties and fees. Payment shall be made from banking or
              financial institution channel. It is donor responsibility to
              establish and maintain the transaction Account and to pay any and
              all fees associated with the transaction. By accepting these Terms
              and Conditions, the donor represent and warrant that: (i) he/she
              18 years old or older; (ii) the donor is using his actual identity
              and any information is accurate and complete; (iii) the donor is
              legally authorized to make payments using the transaction Account;
              and (iv) His use of the service will not violate any local, state,
              national or international laws or regulations. The transaction
              Account should be contained sufficient funds to complete the
              transaction, or the transaction would not exceed the credit limit
              applicable to the transaction Account.
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-5">
          <Image
            src="/images/mission1.jpg"
            alt="Image Description"
            width={300}
            height={400}
            className="mr-3 rounded-lg "
          />
          <div className="flex flex-col justify-start items-start w-3/6 bg-gray-600 bg-opacity-5 rounded-lg p-4">
            <h2 className="text-3xl font-bold bg-gray-600 px-5 py-1 rounded-lg bg-opacity-10 w-full text-center">
              MISSION
            </h2>
            <p className="p-4">
              At Bait ul mal, our mission is to connect compassionate individuals
              with meaningful causes, facilitating a collective impact on the
              issues that matter most. We are dedicated to providing a
              transparent, secure, and user-friendly platform that enables
              seamless contributions to diverse charitable initiatives. Through
              innovation and collaboration, we strive to make philanthropy
              accessible to all, fostering a world where generosity knows no
              bounds. Join us in building a brighter future, one donation at a
              time."
            </p>
          </div>
        </div>
        <br></br>
        <div className="flex flex-col justify-start items-start w-3/6 rounded-lg p-4">
          <hr></hr>
          <h2 className="text-3xl font-bold  w-full text-center">
            <span>Saviour Policies</span>
          </h2>
          <br></br>

          <div className="flex justify-center">
            <table class="w-full text-xl border-gray-800">
              <thead>
                <tr className="mb-6">
                  <th class="py-5 px-35">S.No</th>
                  <th class="py-5 px-35">Title</th>
                  <th class="py-5 px-35">Download</th>
                </tr>
              </thead>
              <tbody className="mb-6">
                <tr>
                  <td>1.</td>
                  <td class="p-10">Bait-ul-mal online donation policy</td>
                  <td>Download</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td class="p-10">IT Operation and security Policy</td>
                  <td>Download</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td class="p-10">Gender Policy</td>
                  <td>Download</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td class="p-10">Whistle Blowing Policy</td>
                  <td>Download</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td class="p-10">Conflict of interest Policy</td>
                  <td>Download</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
