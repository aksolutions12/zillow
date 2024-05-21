import React from "react";

const RefinanceArticles = () => {
  return (
    <div className="w-full mx-auto px-4 bg-white py-10 drop-shadow-xl  rounded-md mb-8">
      <h2 className="text-4xl font-bold mb-6">Related Articles</h2>
      <ul className="list-disc  px-10   space-y-4">
        <li>
          <h3 className="text-2xl text-blue-800 font-bold">
            Should You Refinance?
          </h3>
          <p>
            Learn how to find the best refinance rate and discover the questions
            you should ask before you refinance.
          </p>
        </li>
        <li>
          <h3 className="text-2xl text-blue-800 font-bold">
            Bad Credit Refinancing
          </h3>
          <p>
            If you want to refinance your mortgage but have bad or poor credit,
            this guide can help you explore your options.
          </p>
        </li>
        <li>
          <h3 className="text-2xl text-blue-800 font-bold">
            HELOC or Cash-Out Refi
          </h3>
          <p>
            Want to tap into your home equity? Find out if a HELOC, home equity
            loan or cash-out refinance is best for you.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default RefinanceArticles;
