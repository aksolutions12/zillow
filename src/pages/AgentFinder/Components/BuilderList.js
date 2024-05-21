import React from "react";

const buildersData = [
  {
    name: "Belgravia Group",
    description: `For the past 70 years, Belgravia Group has been dedicated to providing the highest quality homes and real estate related services to its valued clients. With its local roots and an outstanding reputation in Chicago, Belgravia Group continues to be an industry leader as it enters its eighth decade in business. Whether you are seeking a Belgravia-built home, real estate legal counsel, or development and construction know-how, Belgravia Group can provide a wealth of trusted resources coupled with years of experience.`,
    specialties:
      "Condominiums, Luxury Homes, Moveup Homes, Townhomes, Urban Living, First Homes",
    homeCount: 1,
    communityCount: 1,
    image: "https://placehold.co/100x100",
    project: {
      name: "Triangle Square",
      price: "from $939K",
      location: "Chicago, IL",
    },
  },
  {
    name: "Lennar Corporation",
    description: `Lennar Corporation is one of the largest homebuilders in the United States, offering a variety of homes for first-time buyers, move-up buyers, and luxury buyers. Known for their quality construction and innovative designs, Lennar has built communities in over 21 states.`,
    specialties: "Single Family Homes, Condominiums, Townhomes, Luxury Homes",
    homeCount: 5,
    communityCount: 3,
    image: "https://placehold.co/100x100",
    project: {
      name: "Vista Ridge",
      price: "from $499K",
      location: "Miami, FL",
    },
  },
  {
    name: "PulteGroup",
    description: `With a rich history spanning more than 65 years, PulteGroup is a leading homebuilder with a focus on quality and customer satisfaction. They offer a wide range of home styles to meet the needs of all types of buyers.`,
    specialties:
      "Single Family Homes, Condominiums, Retirement Communities, Luxury Homes",
    homeCount: 8,
    communityCount: 4,
    image: "https://placehold.co/100x100",
    project: {
      name: "Sunset Hills",
      price: "from $650K",
      location: "Austin, TX",
    },
  },
  {
    name: "D.R. Horton",
    description: `D.R. Horton has been building homes for more than 40 years, and is America's largest homebuilder by volume. They are committed to building quality homes in desirable locations across the United States.`,
    specialties:
      "Single Family Homes, Townhomes, Condominiums, Affordable Housing",
    homeCount: 6,
    communityCount: 2,
    image: "https://placehold.co/100x100",
    project: {
      name: "Green Valley",
      price: "from $300K",
      location: "Phoenix, AZ",
    },
  },
  {
    name: "Toll Brothers",
    description: `Toll Brothers is an award-winning FORTUNE 500 company known for its luxury homes and communities. They have been building homes for over 50 years, with a focus on premium locations and high-quality construction.`,
    specialties:
      "Luxury Homes, Urban Living, Active Adult Communities, Custom Homes",
    homeCount: 3,
    communityCount: 2,
    image: "https://placehold.co/100x100",
    project: {
      name: "Riverwalk",
      price: "from $850K",
      location: "San Francisco, CA",
    },
  },
];

const BuilderList = () => {
  return (
    <>
      {" "}
      <div className="bg-white p-5">
        {buildersData.map((builder, index) => (
          <div key={index} className="p-4 border-b bg-white">
            <h2 className="text-lg font-bold">{builder.name}</h2>
            <p className="text-sm text-zinc-600">
              {builder.homeCount} home • {builder.communityCount} community
            </p>
            <p className="mt-2 text-sm hidden md:block">
              {builder.description}
              <a href="#" className="text-blue-600">
                Read more
              </a>
            </p>
            <h3 className="mt-4 font-bold hidden md:block">Specialties</h3>
            <p className="text-sm hidden md:block">{builder.specialties}</p>
            <div className="mt-4 flex">
              <img
                src={builder.image}
                alt={builder.project.name}
                className="w-24 h-24 object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">{builder.project.name}</h4>
                <p className="text-sm text-zinc-600">{builder.project.price}</p>
                <p className="text-sm text-zinc-600">
                  {builder.project.location}
                </p>
              </div>
            </div>
            <a href="#" className="mt-4 inline-flex items-center text-blue-600">
              <svg
                aria-hidden="true"
                alt="arrow"
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V14a1 1 0 11-2 0V6.586l-2.293 2.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 6.586z"
                  clipRule="evenodd"
                ></path>
              </svg>
              See all communities
            </a>
          </div>
        ))}
      </div>
      <div className="w-full  bg-white mx-auto p-6">
        <h2 className="text-center text-lg font-semibold text-zinc-700 dark:text-zinc-300">
          GET TO KNOW
        </h2>
        <h1 className="text-center text-4xl font-bold text-zinc-900 dark:text-white mt-2">
          City Name
        </h1>
        <hr className="my-4 border-t-2 border-yellow-500 mx-auto w-32" />
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              What is a floor plan?
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mt-2">
              Floor plans are designs used to create a custom-built home. One
              advantage of buying a pre-built, new construction home is the
              option to create a floor plan that matches the buyer’s
              preferences. Buyers can work with a contractor to design a home
              that is best suited to their lifestyle. In Chicago, IL, the
              average price of a home with a custom floor plan is $620,450. The
              average plan in Chicago, IL is 1,882 square feet with an average
              of 3.3 bedrooms.
            </p>
          </div>
          <hr className="border-t border-zinc-300 dark:border-zinc-700" />
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              What are spec homes?
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mt-2">
              “Spec” or “speculative” homes are homes constructed by a builder
              or developer before they have a specific buyer. Typically, these
              homes are built with features and finishes that appeal to a larger
              audience and come ready to move-in. In Chicago, IL, the average
              spec home is 2,462 square feet with 3.5 bedrooms.
            </p>
          </div>
          <hr className="border-t border-zinc-300 dark:border-zinc-700" />
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Should I buy a new construction home?
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mt-2">
              New construction homes allow buyers to choose from an existing
              spec home that is move-in ready or design a custom floor plan
              built around their preferences. With new construction homes,
              buyers know the history of the home and are less likely to have
              unwanted surprises that can come from an older home. Zillow
              currently has 4 builders in Chicago, IL building 9 communities. In
              Chicago, IL, some of the larger builders are Corwin Partners -
              Jameson Sotheby’s, Belgravia Group, and Ravinia Communities.
            </p>
          </div>
          <hr className="border-t border-zinc-300 dark:border-zinc-700" />
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              How many bedrooms are there in a new construction home?
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mt-2">
              The average number of bedrooms in a new construction home can vary
              depending on whether the buyer chooses a spec home or opts for a
              customized floor plan. Spec homes are move-in ready, which means
              they come complete with a certain number of bedrooms. Customized
              floor plans allow the buyer to work with a designer and tailor the
              home to include a preferred number of bedrooms. In Chicago, IL,
              the average spec home has 3.5 bedrooms and the average floor plan
              has 3.3 bedrooms in the home.
            </p>
          </div>
          <hr className="border-t border-zinc-300 dark:border-zinc-700" />
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              What is the average square feet of a new construction home?
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mt-2">
              In Chicago, IL, the average square footage of a new construction
              home is 1,882 square feet for a floor plan and 2,462 square feet
              for a spec home. The size of a new construction home can be
              smaller or larger depending on the buyer’s preferences. While the
              lot size limits the overall size of the home, there are many
              different spec homes and floor plans a buyer can use to find the
              square footage that meets their needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuilderList;
