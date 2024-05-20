import React from "react";

const FactorsImpactSection = () => {
  return (
    <div className="w-full mx-auto bg-white p-8 py-8 text-center md:text-left drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-4xl font-bold mb-4">
        Factors that impact affordability
      </h1>
      <p className="mb-6">
        When it comes to calculating affordability, your income, debts and down
        payment are primary factors. How much house you can afford is also
        dependent on the interest rate you get, because a lower interest rate
        could significantly lower your monthly mortgage payment. While your
        personal savings goals or spending habits can impact your affordability,
        <a href="#" className="underline text-blue-500">
          getting pre-qualified for a home loan
        </a>{" "}
        can help you determine a sensible housing budget.
      </p>
    </div>
  );
};

export default FactorsImpactSection;
