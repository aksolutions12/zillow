import React from "react";
import img1 from "../../../../assets/images/Tenant-feature-block-1-65fcb9.png";
import img2 from "../../../../assets/images/inc4.jpg";
import img3 from "../../../../assets/images/family_on_computer.png";
import img4 from "../../../../assets/images/tenant-lap.png";
import img5 from "../../../../assets/images/tenant-prof.png";
import img6 from "../../../../assets/images/tenant-prof2.png";

const PaymentEasy = () => {
  return (
    <div className="py-10 lg:px-5 sm:px-2 w-full bg-white">
      <div>
        <div className="text-center">
          <h1 className="font-bold text-3xl pb-2">
            Easy for landlords and renters
          </h1>
          <p className="text-base">
            Now paying rent each month — and collecting it — is more convenient
            for everyone.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
          {/* Image */}
          <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
            <img
              src={img1}
              alt="Image 2"
              className="w-full   object-cover rounded-lg "
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Get paid with more predictability
            </h2>
            <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
              With Zillow Rental Manager, rent payments are deposited directly
              into your account. Plus, renters can set up autopay so you know
              when you’ll get paid each month. No checks, no hassle.
            </p>
          </div>
        </div>

        {/* Left Image */}

        <div className="flex flex-col md:flex-row items-center p-4 px-10 bg-white">
          <img
            src={img2}
            alt="Property Management"
            className="rounded-lg w-full md:w-1/2"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Free for landlords
            </h2>
            <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
              Zillow’s online payments are free for landlords, and there’s no
              fee for tenants who pay with ACH. Tenants can also pay rent with a
              credit or debit card for a small fee.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
          {/* Image */}
          <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
            <img
              src={img3}
              alt="Image 2"
              className="w-full   object-cover rounded-lg "
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Have peace of mind with each transaction
            </h2>
            <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
              We’ve teamed up with experienced processors, Stripe™ and Plaid™,
              to provide exceptional service.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <h2 className="text-center text-2xl font-bold mb-8 text-black dark:text-white">
          Set up online payments in a few simple steps
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <img
              src={img4}
              alt="Laptop illustration"
              className="mb-4 h-24 w-24"
            />
            <p className="text-black dark:text-white max-w-xs">
              Connect your account and verify your identity.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <img
              src={img5}
              alt="Application illustration"
              className="mb-4 h-24 w-24"
            />
            <p className="text-black dark:text-white max-w-xs">
              Invite your renter to pay rent online using ACH, credit or debit.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={img6}
              alt="Notification illustration"
              className="mb-4 h-24 w-24"
            />
            <p className="text-black dark:text-white max-w-xs">
              Payments are deposited directly into your account.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentEasy;
