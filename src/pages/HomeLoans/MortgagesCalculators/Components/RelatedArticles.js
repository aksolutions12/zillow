export default function RelatedArticles() {
  return (
    <div className="w-full mx-auto px-4 bg-white py-10 drop-shadow-xl  rounded-md mb-8">
      <h2 className="text-4xl font-bold mb-6">Related Articles</h2>
      <ul className="list-disc  px-10   space-y-4">
        <li>
          <h3 className="text-2xl text-blue-800 font-bold">
            What is Private Mortgage Insurance (PMI)?
          </h3>
          <p>
            Questions about the PMI in the mortgage calculator? Find out why PMI
            may be required for your loan and see how you can avoid paying it.
          </p>
        </li>
        <li>
          <h3 className="text-2xl text-blue-800 font-bold">
            Down Payments: How Much Do You Need to Save?
          </h3>
          <p>
            Wondering what down payment amount to enter into the mortgage
            payment calculator? Here’s a look at what the ideal down payment is.
          </p>
        </li>
        <li>
          <h3 className="text-2xl text-blue-800 font-bold">
            Complete Guide to FHA Loans
          </h3>
          <p>
            Considering an FHA loan for your new home? Read about FHA loans and
            find out why they're a popular option for first-time homebuyers.
          </p>
        </li>
      </ul>
    </div>
  );
}
