import React from "react";

const AffordabilityCalculate = () => {
  return (
    <div className="w-full mx-auto bg-white p-8 py-8 text-center md:text-left drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-4xl font-bold mb-4">
        How to calculate affordability
      </h1>
      <p className="mb-6">
        Zillow's affordability calculator allows you to customize your payment
        details, while also providing helpful suggestions in each field to get
        you started. You can calculate affordability based on your annual
        income, monthly debts and down payment, or based on your estimated
        monthly payments and down payment amount.
        <br />
        Our calculator also includes advanced filters to help you get a more
        accurate estimate of your house affordability, including specific
        amounts of property taxes, homeowner's insurance and HOA dues (if
        applicable). Learn more about the line items in our calculator to
        determine your ideal housing budget.
      </p>
      <h2 className="text-2xl font-bold mb-2">Annual income</h2>
      <p className="mb-6">
        This is the total amount of money earned for the year before taxes and
        other deductions. You can usually find the amount on your W2 form. If
        you have a co-borrower who will contribute to the mortgage, combine the
        total of both incomes to get your annual income
      </p>
      <h2 className="text-2xl font-bold mb-2">Total monthly debts</h2>
      <p className="mb-6">
        These are recurring monthly expenses like car payments, minimum credit
        card payments or student loans. You can adjust this amount in our
        affordability calculator as needed. For example, if you have a $250
        monthly car payment and $50 minimum credit card payment, your monthly
        debt would be $300.
      </p>
      <h2 className="text-2xl font-bold mb-2">Down payment</h2>
      <p className="mb-6">
        The amount of money you spend upfront to purchase a home. Most home
        loans require a down payment of at least 3%. A 20% down payment is ideal
        to lower your monthly payment, avoid private mortgage insurance and
        increase your affordability. For a $250,000 home, a down payment of 3%
        is $7,500 and a down payment of 20% is $50,000.
      </p>
      <h2 className="text-2xl font-bold mb-2">Debt-to-income ratio (DTI)</h2>
      <p className="mb-6">
        The total of your monthly debt payments divided by your gross monthly
        income, which is shown as a percentage. Your DTI is one way lenders
        measure your ability to manage monthly payments and repay the money you
        plan to borrow. Our affordability calculator will suggest a DTI of 36%
        by default. You can get an estimate of your debt-to-income ratio using
        our DTI Calculator.
      </p>
      <h2 className="text-2xl font-bold mb-2">Interest rate</h2>
      <p className="mb-6">
        The amount that a lender charges a borrower for taking out a loan.
        Typically, the interest rate is expressed as an annual percentage of the
        loan balance. The borrower makes payments (with interest) to the lender
        over a set period of time until the loan is paid in full. Our
        affordability calculator uses the current national average mortgage
        rate. Your interest rate will vary based on factors like credit score
        and down payment. Calculate your mortgage interest rate.
      </p>
      <h2 className="text-2xl font-bold mb-2">Loan term</h2>
      <p className="mb-6">
        The length by which you agree to pay back the home loan. The most common
        term for a mortgage is 30 years, or 360 months, but different terms are
        available depending on the type of home loan that works best for your
        situation. You can edit your loan term (in months) in the affordability
        calculator's advanced options.
      </p>
      <h2 className="text-2xl font-bold mb-2">Property tax</h2>
      <p className="mb-6">
        When owning a home, you pay annual property taxes based on the assessed
        value of the property or purchase price of the home, which can affect
        your affordability. The tax rate you pay can vary by state, county and
        municipality. Our calculator assumes a property tax rate by default, but
        you can edit this amount in the calculator's advanced options. To obtain
        a more accurate total payment amount, get pre-qualified by a lender.
      </p>
      <h2 className="text-2xl font-bold mb-2">Homeowner's insurance (HOI)</h2>
      <p className="mb-6">
        Also known as homeowner's insurance is a type of property insurance that
        covers a private residence. Typically, HOI is required to get a home
        loan. The cost may vary depending on your location, type of coverage,
        any discounts you qualify for and your insurance provider. Generally,
        homeowner's insurance costs roughly $35 per month for every $100,000 of
        the home's value. Consult your insurance carrier for the exact cost. You
        can edit the calculator's default amount in the advanced options.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Private mortgage insurance (PMI)
      </h2>
      <p className="mb-6">
        Many lenders commonly require private mortgage insurance if a borrower
        contributes less than a 20% down payment on a home purchase. PMI
        protects the lender against losses that may occur when a borrower
        defaults on a mortgage loan. Our calculator bases the PMI on the home
        price and down payment amount. You can choose to include or exclude PMI
        in the advanced options of the affordability calculator.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Homeowner's Association (HOA) dues
      </h2>
      <p className="mb-6">
        Some communities, such as condominiums and townhomes, are governed by a
        homeowner's association (HOA) that maintains communal areas and enforces
        rules and regulations for a monthly fee. Any HOA dues you pay each month
        can affect your affordability. You can edit this number in the
        affordability calculator advanced options.
      </p>
    </div>
  );
};

export default AffordabilityCalculate;
