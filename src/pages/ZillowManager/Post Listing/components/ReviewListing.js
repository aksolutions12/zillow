import React from "react";
import img1 from "../../../../assets/images/home.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs from "dayjs";

const ReviewListing = ({ formData }) => {
  const {
    propertyInfo,
    listingDetails,
    lease,
    media,
    amenities,
    finalDetails,
  } = formData;

  const formattedDate = finalDetails.selectedDate
    ? dayjs(finalDetails.selectedDate).format("MM/DD/YYYY")
    : "No date selected";

  return (
    <div className="lg:px-16 sm:px-5 mx-auto p-6">
      <div className="flex items-center p-4 bg-white dark:bg-zinc-800">
        <img className="w-32 h-32 rounded-lg" src={img1} alt="House" />
        <div className="ml-4">
          <h2 className="lg:text-3xl sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {propertyInfo.streetAddress}
          </h2>
          <p className="mt-2 text-zinc-900 dark:text-zinc-100">
            <span className="font-bold">${listingDetails.monthlyRent}</span> /
            mo | {propertyInfo.totalBedrooms} bd | {propertyInfo.totalBathrooms}{" "}
            ba | <span className="font-bold">{propertyInfo.squareFootage}</span>{" "}
            sq. ft.
          </p>
        </div>
      </div>

      <div>
        <Accordion className="mb-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold text-lg hover:underline"
          >
            Property information
          </AccordionSummary>
          <AccordionDetails>
            <div className="p-4">
              <div className="mb-4">
                <h2 className="font-bold pb-2">Address</h2>
                <p>{propertyInfo.streetAddress}</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">
                  Hide property address{" "}
                  <a href="#" className="text-sm font-normal text-blue-500">
                    Learn more
                  </a>
                </h2>
                <p>{finalDetails.hideAddress ? "Yes" : "No"}</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">
                  Square footage{" "}
                  <a href="#" className="text-sm font-normal text-blue-500">
                    Learn more
                  </a>
                </h2>
                <p>{propertyInfo.squareFootage} sq. ft.</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">Bedrooms</h2>
                <p>{propertyInfo.totalBedrooms}</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">Bathrooms</h2>
                <p>{propertyInfo.totalBathrooms}</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">Property type</h2>
                <p>{propertyInfo.propertyType}</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">
                  Property description{" "}
                  <a href="#" className="text-sm font-normal text-blue-500">
                    Learn more
                  </a>
                </h2>
                <p>{propertyInfo.propertyDescription || "None"}</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="font-bold text-lg hover:underline"
          >
            Rent details
          </AccordionSummary>
          <AccordionDetails>
            <div className="p-4">
              <div className="mb-4">
                <h2 className="font-bold pb-2">Monthly rent</h2>
                <p>${listingDetails.monthlyRent} /month</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">Special offer</h2>
                <p>None</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">
                  Security deposit{" "}
                  <a href="#" className="text-sm font-normal text-blue-500">
                    Learn more
                  </a>
                </h2>
                <p>${listingDetails.securityDeposit}</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">Date available</h2>
                <p>{formattedDate}</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">
                  Pets{" "}
                  <a href="#" className="text-sm font-normal text-blue-500">
                    Learn more
                  </a>
                </h2>
                {lease.petPolicy.noPets && <p>No pets allowed</p>}
                {lease.petPolicy.cats && <p>Cats allowed</p>}
                {lease.petPolicy.smallDogs && <p>Small dogs allowed</p>}
                {lease.petPolicy.largeDogs && <p>Large dogs allowed</p>}
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">
                  Lease terms{" "}
                  <a href="#" className="text-sm font-normal text-blue-500">
                    Learn more
                  </a>
                </h2>
                <p>{lease.leaseDescription || "None"}</p>
              </div>
              <div className="mb-4">
                <h2 className="font-bold pb-2">
                  Lease duration{" "}
                  <a href="#" className="text-sm font-normal text-blue-500">
                    Learn more
                  </a>
                </h2>
                <p>{finalDetails.leaseDuration}</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="font-bold text-lg hover:underline"
          >
            Media
          </AccordionSummary>
          <AccordionDetails>{/* Media Content here */}</AccordionDetails>
        </Accordion>

        <Accordion className="mb-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
            className="font-bold text-lg hover:underline"
          >
            Amenities
          </AccordionSummary>
          <AccordionDetails>
            <div className="p-4">
              {(amenities.laundry ||
                amenities.cooling.length > 0 ||
                amenities.heating.length > 0 ||
                amenities.appliances.length > 0) && (
                <div className="mb-4">
                  <h2 className="font-bold pb-2">
                    Interior amenities{" "}
                    <a href="#" className="text-sm font-normal text-blue-500">
                      Learn more
                    </a>
                  </h2>
                  <ul className="list-none list-inside">
                    <li className="font-semibold ">Laundry</li>
                    {amenities.laundry && (
                      <li className="ml-2">{amenities.laundry}</li>
                    )}
                    <li className="font-semibold ">Cooling</li>

                    {amenities.cooling.map((item, index) => (
                      <li className="ml-2" key={index}>
                        {item}
                      </li>
                    ))}
                    <li className="font-semibold ">Heating</li>

                    {amenities.heating.map((item, index) => (
                      <li className="ml-2" key={index}>
                        {item}
                      </li>
                    ))}
                    <li className="font-semibold ">Appliances</li>
                    {amenities.appliances.map((item, index) => (
                      <li className="ml-2" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(amenities.parking.length > 0 ||
                amenities.outdoorAmenities.length > 0 ||
                amenities.accessibility.length > 0 ||
                amenities.otheramenities.length > 0) && (
                <div className="mb-4">
                  <h2 className="font-bold pb-2">
                    Property amenities{" "}
                    <a href="#" className="text-sm font-normal text-blue-500">
                      Learn more
                    </a>
                  </h2>
                  <ul className="list-none list-inside">
                    <li className="font-semibold ">Parking</li>
                    {amenities.parking.map((item, index) => (
                      <li className="ml-2" key={index}>
                        {item}
                      </li>
                    ))}

                    <li className="font-semibold ">Outdoor Amenities</li>
                    {amenities.outdoorAmenities.map((item, index) => (
                      <li className="ml-2" key={index}>
                        {item}
                      </li>
                    ))}

                    <li className="font-semibold ">Accessibility </li>
                    {amenities.accessibility.map((item, index) => (
                      <li className="ml-2" key={index}>
                        {item}
                      </li>
                    ))}

                    <li className="font-semibold ">Other Amenities </li>
                    {amenities.otheramenities.map((item, index) => (
                      <li className="ml-2" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h2 className="font-bold pb-2">Additional amenities</h2>
                <ul className="list-none list-inside">
                  {amenities.additionalAmenities.map((item, index) => (
                    <li className="ml-2" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
            className="font-bold text-lg hover:underline"
          >
            Final Details
          </AccordionSummary>
          <AccordionDetails>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="font-bold">Listed by</h3>
              </div>
              <div>
                <h3 className="font-bold mb-2">Name</h3>
                <p>{finalDetails.name || "Fkane Online"}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p>{finalDetails.email || "None"}</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold mb-2">
                  Tour availability{" "}
                  <a href="#" className="text-blue-600">
                    Learn more
                  </a>
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {finalDetails.selectedDays.map((day, index) => (
                    <button key={index} className="border px-4 py-2 rounded">
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-bold mb-2">
                  Accept Zillow online applications{" "}
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    FREE
                  </span>{" "}
                  <a href="#" className="text-blue-600">
                    Sample
                  </a>
                </h3>
                <p>{finalDetails.acceptOnlineApplications}</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ReviewListing;
