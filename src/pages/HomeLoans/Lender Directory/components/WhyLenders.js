import findimg from "../../../../assets/images/find agent.png";

export default function WhyLenders() {
  return (
    <div className="w-full bg-white mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        Why look for mortgage lenders on Zillow
      </h2>
      <div className="space-y-8 px-10">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={findimg}
            alt="Magnifying glass with people icons"
            className="w-24 h-24 md:w-24 md:h-24 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-xl font-semibold">
              Thousands of mortgage lender reviews
            </h3>
            <p>
              Our lender directory has hundreds of thousands of mortgage lender
              reviews to give you real insights into other homeowners'
              experiences. Have you recently worked with mortgage broker or
              mortgage lender? You can share your experiences here, too.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={findimg}
            alt="Documents with check marks"
            className="w-24 h-24 md:w-24 md:h-24 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-xl font-semibold">
              Up-to-date info and licensed lenders
            </h3>
            <p>
              You'll find the latest, most up-to-date information for lenders in
              our directory. We require all lenders are licensed by the
              Nationwide Mortgage Licensing System & Registry (NMLS), and we
              verify each mortgage lender's profile information directly with
              the NMLS.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={findimg}
            alt="Map with house icons"
            className="w-24 h-24 md:w-24 md:h-24 mb-4 md:mb-0"
          />
          <div>
            <h3 className="text-xl font-semibold">
              Mortgage lenders in every state
            </h3>
            <p>
              No matter what state you live in, you'll find licensed lenders in
              our directory who can work with you on your home purchase or
              mortgage refinance. Our comprehensive listings include mortgage
              lenders and mortgage brokers in all 50 states and the District of
              Columbia.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-8 border-zinc-300" />
    </div>
  );
}
