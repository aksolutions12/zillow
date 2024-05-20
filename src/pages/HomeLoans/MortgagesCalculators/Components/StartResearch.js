export default function StartResearch() {
  return (
    <div className="w-full mx-auto bg-white px-4 sm:px-6 lg:px-8 dark:border-white rounded-md py-8 drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mt-10 mb-5">
        Start your home buying research with a mortgage calculator
      </h1>
      <p className="text-zinc-700 dark:text-zinc-300 mb-8">
        A mortgage payment calculator is a powerful real estate tool that can
        help you do more than just estimate your monthly payments. Here are some
        additional ways to use our mortgage calculator:
      </p>
      <div className="space-y-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
          <div className="text-white bg-blue-900 rounded-full min-w-[4rem] h-16 w-16 flex items-center justify-center mr-4 font-bold text-xl">
            1
          </div>
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Assess down payment scenarios
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Adjust your down payment size to see how much it affects your
              monthly payment. For instance, would it be better to have more in
              savings after purchasing the home? Can you avoid PMI? Compare
              realistic monthly payments, beyond just principal and interest.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
          <div className="text-white bg-blue-900 rounded-full min-w-[4rem] h-16 w-16 flex items-center justify-center mr-4 font-bold text-xl">
            2
          </div>
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Calculate mortgage rates
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Modify the interest rate to evaluate the impact of seemingly minor
              rate changes. Knowing that rates can change daily, consider the
              impact of waiting to improve your credit score in exchange for
              possibly qualifying for a lower interest rate. Click the
              "Schedule" for an interactive graph showing the estimated
              timeframe of paying off your interest, similar to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                amortization calculator
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
          <div className="text-white bg-blue-900 rounded-full min-w-[4rem] h-16 w-16 flex items-center justify-center mr-4 font-bold text-xl">
            3
          </div>
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Evaluate affordability
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Fine-tune your inputs to assess your readiness. Use our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                affordability calculator
              </a>{" "}
              to dig deeper into income, debts and payments.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
          <div className="text-white bg-blue-900 rounded-full min-w-[4rem] h-16 w-16 flex items-center justify-center mr-4 font-bold text-xl">
            4
          </div>
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Sample loan programs
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Adjust the loan program to see how each changes monthly mortgage
              payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
