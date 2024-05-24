export default function RentalCities() {
  const rentalCities = [
    "Los Angeles",
    "San Francisco",
    "Austin",
    "Atlanta",
    "San Jose",
    "Chicago",
    "Houston",
    "Nashville",
    "Dallas",
    "Orlando",
    "Manhattan",
    "San Diego",
    "Philadelphia",
    "Jersey City",
    "Charlotte",
    "Boston",
    "Seattle",
    "Brooklyn",
    "Cleveland",
    "Las Vegas",
    "Long Beach",
    "San Antonio",
    "Toronto",
    "Miami",
    "Washington DC",
    "Denver",
    "Queens",
    "Phoenix",
    "Portland",
    "New York",
    "Tampa",
  ];

  return (
    <div className="w-full mx-auto p-4 py-10 px-5">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">
        Rentals in popular cities
      </h2>
      <h3 className="text-xl font-semibold mb-6 mt-6 dark:text-zinc-300">
        Search for apartments by city
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rentalCities.map((city, index) => (
          <a
            key={index}
            href="#"
            className="text-blue-700 hover:underline dark:text-blue-300"
          >
            {city} Apartments For Rent
          </a>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-6 pt-16 dark:text-zinc-300">
        Search for houses for rent by city
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rentalCities.map((city, index) => (
          <a
            key={index}
            href="#"
            className="text-blue-700 hover:underline dark:text-blue-300"
          >
            {city} Houses For Rent
          </a>
        ))}
      </div>
    </div>
  );
}
