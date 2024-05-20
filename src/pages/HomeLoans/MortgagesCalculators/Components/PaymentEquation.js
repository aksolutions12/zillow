// Import React
import React from "react";

// PaymentEquation Component
const PaymentEquation = () => {
  return (
    <div className="w-full mx-auto bg-white p-8 drop-shadow-xl  rounded-md mb-8">
      <h2 className="text-4xl font-bold mb-8">Mortgage Payment Equation</h2>
      <div className="mb-6 text-center">
        <div className=" border border-blue-500 rounded-lg w-full lg:w-4/5 mx-auto p-2">
          <p className="text-base text-blue-600 font-bold">
            Principal + Interest + Mortgage Insurance (if applicable) + Escrow
            (if applicable) = Total Monthly Payment
          </p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <p className="mb-4">
          The traditional monthly mortgage payment calculation includes:
        </p>
        <p className="mb-2">
          <strong>Principal:</strong> The amount of money you borrowed.
        </p>
        <p className="mb-2">
          <strong>Interest:</strong> The cost of the loan.
        </p>
        <p className="mb-2">
          <strong>Mortgage Insurance:</strong> Property insurance to protect
          your lender's investment of 80% or more of the home's value.
        </p>
        <p className="mb-2">
          <strong>Escrow:</strong> The monthly cost of property taxes, HOA dues,
          and homeowner's insurance.
        </p>
        <p className="mb-2">
          <strong>Payments:</strong> Multiply the years of your loan by 12
          months to calculate the total number of payments. A 30-year term is
          360 payments (30 years x 12 months = 360 payments).
        </p>
      </div>
    </div>
  );
};

export default PaymentEquation;
