import React from "react";

const FrequentQuestions = () => {
  return (
    <div className="w-full mx-auto bg-white px-4 sm:px-6 lg:px-8 dark:border-white rounded-md py-8    mb-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mt-10 mb-5">
        Frequently Asked Questions
      </h1>

      <div className="space-y-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-left gap-5 ">
          <div className="text-white bg-blue-900 rounded-full min-w-[4rem] h-16 w-16 flex items-center justify-center mr-4 font-bold text-lg">
            1
          </div>
          <div className="flex flex-col sm:text-center lg:text-left">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              What mortgage marketing options do you offer?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Our flagship mortgage advertising platform is Connect. Consumers
              answer a series of questions to find a local lender, and lenders
              receive contacts based on location data. Custom Quotes is a
              mortgage marketing platform for larger, consumer-direct call
              centers to display their mortgage rates directly to consumers who
              are shopping for purchase and refinance rates.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
          <div className="text-white bg-blue-900 rounded-full min-w-[4rem] h-16 w-16 flex items-center justify-center mr-4 font-bold text-lg">
            2
          </div>
          <div className="flex flex-col sm:text-center lg:text-left">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              How much does mortgage advertising cost on Zillow?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              The price varies based on factors such as loan amount, credit
              score and loan type. A minimum initial deposit is required .
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
          <div className="text-white bg-blue-900 rounded-full min-w-[4rem] h-16 w-16 flex items-center justify-center mr-4 font-bold text-lg">
            3
          </div>
          <div className="flex flex-col sm:text-center lg:text-left">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Can I get Trulia leads in addition to Zillow leads?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Trulia is part of Zillow Group's network of leading real estate
              brands. When you purchase mortgage leads from Zillow Group
              Marketplace, you will receive leads from all of our brands.
              There's no action needed on your end to select Trulia leads.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
          <div className="text-white bg-blue-900 rounded-full min-w-[4rem] h-16 w-16 flex items-center justify-center mr-4 font-bold text-lg">
            4
          </div>
          <div className="flex flex-col sm:text-center lg:text-left">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              How do I get started?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Zillow is committed to working with the highest quality lenders
              who deliver a positive consumer experience. The first step is to
              call us at (877) 661-3172 to see if our mortgage advertising
              platforms can benefit your business. Or fill out the form above
              and we'll reach out to you as soon as possible to set up a quick
              appointment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
