export default function HowCalculate() {
  return (
    <div className="w-full mx-auto bg-white p-8 py-8 text-center md:text-left drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-4xl font-bold mb-4">
        How to calculate mortgage payments
      </h1>
      <p className="mb-6">
        Zillow's mortgage calculator gives you the opportunity to customize your
        mortgage details while making assumptions for fields you may not know
        quite yet. These autofill elements make the home loan calculator easy to
        use and can be updated at any point. Remember, your monthly house
        payment includes more than just repaying the amount you borrowed to
        purchase the home. The "principal" is the amount you borrowed and have
        to pay back (the loan itself), and the interest is the amount the lender
        charges for lending you the money. For most borrowers, the total monthly
        payment sent to your mortgage lender includes other costs, such as
        homeowner's insurance and taxes. If you have an escrow account, you pay
        a set amount toward these additional expenses as part of your monthly
        mortgage payment, which also includes your principal and interest. Your
        mortgage lender typically holds the money in the escrow account until
        those insurance and tax bills are due, and then pays them on your
        behalf. If your loan requires other types of insurance like private
        mortgage insurance (PMI) or homeowner's association dues (HOA), these
        premiums may also be included in your total mortgage payment.
      </p>
      <h2 className="text-2xl font-bold mb-2">Home price</h2>
      <p className="mb-6">
        The price is either the amount you paid for a home or the amount you may
        pay for a future home purchase.
      </p>
      <h2 className="text-2xl font-bold mb-2">Down payment</h2>
      <p className="mb-6">
        Most home loans require at least 3% of the price of the home as a down
        payment. Some loans, like VA loans and some USDA loans allow zero down.
        Although it's a myth that a 20% down payment is required to obtain a
        loan, keep in mind that the higher your down payment, the lower your
        monthly payment. A 20% down payment also allows you to avoid paying
        private mortgage insurance on your loan. You can use Zillow's{" "}
        <a href="#" className="text-blue-600 hover:underline">
          down payment assistance page and questionnaire tool
        </a>{" "}
        to surface assistance funds and programs you may qualify for.
      </p>
      <h2 className="text-2xl font-bold mb-2">Loan program</h2>
      <p className="mb-6">
        Your loan program can affect your interest rate and total monthly
        payments. Choose from 30-year fixed, 15-year fixed, and 5-year ARM loan
        scenarios in the calculator to see examples of how different loan terms
        mean different monthly payments. Learn more about loan types below.
      </p>
      <h2 className="text-2xl font-bold mb-2">Interest rate</h2>
      <p className="mb-6">
        Mortgage interest is the cost you pay your lender each year to borrow
        their money, expressed as a percentage rate. The calculator
        auto-populates the current average interest rate.
      </p>
      <h2 className="text-2xl font-bold mb-2">PMI</h2>
      <p className="mb-6">
        Private Mortgage Insurance (PMI) is calculated based on your credit
        score and amount of down payment. If your loan amount is greater than
        80% of the home purchase price, lenders require insurance on their
        investment. This is a monthly cost that increases your mortgage payment.
      </p>
      <h2 className="text-2xl font-bold mb-2">Property taxes</h2>
      <p className="mb-6">
        Your estimated annual property tax is based on the home purchase price.
        The total is divided by 12 months and applied to each monthly mortgage
        payment. If you know the specific amount of taxes, add as an annual
        total.
      </p>
      <h2 className="text-2xl font-bold mb-2">Home insurance</h2>
      <p className="mb-6">
        Homeowner's insurance is based on the home price, and is expressed as an
        annual premium. The calculator divides that total by 12 months to adjust
        your monthly mortgage payment. Average annual premiums usually cost less
        than 1% of the home price and protect your liability as the property
        owner and insure against hazards, loss, etc.
      </p>
      <h2 className="text-2xl font-bold mb-2">HOA dues</h2>
      <p className="mb-6">
        Homeowners in some developments and townhome or condominium communities
        pay monthly Homeowner's Association (HOA) fees to collectively pay for
        amenities, maintenance and some insurance. Update to include your
        monthly HOA costs, if applicable. If there are no HOA costs, you can
        leave the field blank.
      </p>
    </div>
  );
}
