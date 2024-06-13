import React, { useState } from "react";

export default function Amenities() {
  const [laundry, setLaundry] = useState("");
  const [cooling, setCooling] = useState([]);
  const [heating, setHeating] = useState([]);
  const [appliances, setAppliances] = useState([]);
  const [flooring, setFlooring] = useState([]);
  const [otherAmenities, setOtherAmenities] = useState([]);

  const [parking, setParking] = useState([]);
  const [outdoorAmenities, setOutdoorAmenities] = useState([]);
  const [accessibility, setAccessibility] = useState([]);
  const [additionalAmenities, setAdditionalAmenities] = useState([]);
  const [newAmenityDescription, setNewAmenityDescription] = useState("");

  const handleRadioChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleCheckboxChange = (e, state, setState) => {
    const value = e.target.value;
    if (e.target.checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  };

  // Function to handle adding a new amenity
  const handleAddAmenity = () => {
    if (newAmenityDescription.trim() !== "") {
      setAdditionalAmenities([...additionalAmenities, newAmenityDescription]);
      setNewAmenityDescription("");
    }
  };

  return (
    <div className="lg:px-16 sm:px-5  mx-auto p-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Showcase what's included in your home
        </h2>
        <p className="mb-6 text-zinc-600">
          Sharing more will help renters see themselves in your home
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">
              Laundry <span className="text-red-500">*</span>
            </h3>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="laundry"
                  value="Washer-dryer included"
                  className="mr-2"
                  checked={laundry === "Washer-dryer included"}
                  onChange={(e) => handleRadioChange(e, setLaundry)}
                />
                Washer-dryer included
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="laundry"
                  value="Washer-dryer hookups"
                  className="mr-2"
                  checked={laundry === "Washer-dryer hookups"}
                  onChange={(e) => handleRadioChange(e, setLaundry)}
                />
                Washer-dryer hookups
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="laundry"
                  value="Shared or in building"
                  className="mr-2"
                  checked={laundry === "Shared or in building"}
                  onChange={(e) => handleRadioChange(e, setLaundry)}
                />
                Shared or in building
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="laundry"
                  value="No laundry facilities"
                  className="mr-2"
                  checked={laundry === "No laundry facilities"}
                  onChange={(e) => handleRadioChange(e, setLaundry)}
                />
                No laundry facilities
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Cooling</h3>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Central"
                  className="mr-2"
                  checked={cooling.includes("Central")}
                  onChange={(e) => handleCheckboxChange(e, cooling, setCooling)}
                />
                Central
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Wall"
                  className="mr-2"
                  checked={cooling.includes("Wall")}
                  onChange={(e) => handleCheckboxChange(e, cooling, setCooling)}
                />
                Wall
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Window"
                  className="mr-2"
                  checked={cooling.includes("Window")}
                  onChange={(e) => handleCheckboxChange(e, cooling, setCooling)}
                />
                Window
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Heating</h3>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Baseboard"
                  className="mr-2"
                  checked={heating.includes("Baseboard")}
                  onChange={(e) => handleCheckboxChange(e, heating, setHeating)}
                />
                Baseboard
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Forced air"
                  className="mr-2"
                  checked={heating.includes("Forced air")}
                  onChange={(e) => handleCheckboxChange(e, heating, setHeating)}
                />
                Forced air
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Heat pump"
                  className="mr-2"
                  checked={heating.includes("Heat pump")}
                  onChange={(e) => handleCheckboxChange(e, heating, setHeating)}
                />
                Heat pump
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Wall"
                  className="mr-2"
                  checked={heating.includes("Wall")}
                  onChange={(e) => handleCheckboxChange(e, heating, setHeating)}
                />
                Wall
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Appliances</h3>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Dishwasher"
                  className="mr-2"
                  checked={appliances.includes("Dishwasher")}
                  onChange={(e) =>
                    handleCheckboxChange(e, appliances, setAppliances)
                  }
                />
                Dishwasher
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Freezer"
                  className="mr-2"
                  checked={appliances.includes("Freezer")}
                  onChange={(e) =>
                    handleCheckboxChange(e, appliances, setAppliances)
                  }
                />
                Freezer
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Microwave"
                  className="mr-2"
                  checked={appliances.includes("Microwave")}
                  onChange={(e) =>
                    handleCheckboxChange(e, appliances, setAppliances)
                  }
                />
                Microwave
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Oven"
                  className="mr-2"
                  checked={appliances.includes("Oven")}
                  onChange={(e) =>
                    handleCheckboxChange(e, appliances, setAppliances)
                  }
                />
                Oven
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Refrigerator"
                  className="mr-2"
                  checked={appliances.includes("Refrigerator")}
                  onChange={(e) =>
                    handleCheckboxChange(e, appliances, setAppliances)
                  }
                />
                Refrigerator
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Flooring</h3>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Carpet"
                  className="mr-2"
                  checked={flooring.includes("Carpet")}
                  onChange={(e) =>
                    handleCheckboxChange(e, flooring, setFlooring)
                  }
                />
                Carpet
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Hardwood"
                  className="mr-2"
                  checked={flooring.includes("Hardwood")}
                  onChange={(e) =>
                    handleCheckboxChange(e, flooring, setFlooring)
                  }
                />
                Hardwood
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Tile"
                  className="mr-2"
                  checked={flooring.includes("Tile")}
                  onChange={(e) =>
                    handleCheckboxChange(e, flooring, setFlooring)
                  }
                />
                Tile
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Other amenities</h3>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value="Furnished"
                  className="mr-2"
                  checked={otherAmenities.includes("Furnished")}
                  onChange={(e) =>
                    handleCheckboxChange(e, otherAmenities, setOtherAmenities)
                  }
                />
                Furnished
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-3 mx-auto">
        <h2 className="text-xl font-bold mb-2">
          Now tell us more about your property
        </h2>
        <p className="mb-6">
          Sharing more will help renters see themselves in your home
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">Parking</h3>
            <label className="block mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, parking, setParking)}
              />{" "}
              Attached garage
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, parking, setParking)}
              />{" "}
              Detached garage
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, parking, setParking)}
              />{" "}
              Off-street parking
            </label>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Outdoor amenities</h3>
            <label className="block mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) =>
                  handleCheckboxChange(e, outdoorAmenities, setOutdoorAmenities)
                }
              />{" "}
              Balcony or deck
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) =>
                  handleCheckboxChange(e, outdoorAmenities, setOutdoorAmenities)
                }
              />{" "}
              Pool
            </label>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <label className="block mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) =>
                  handleCheckboxChange(e, accessibility, setAccessibility)
                }
              />{" "}
              Disabled access
            </label>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Additional amenities</h3>
          <label className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) =>
                handleCheckboxChange(
                  e,
                  additionalAmenities,
                  setAdditionalAmenities
                )
              }
            />{" "}
            Bicycle storage
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) =>
                handleCheckboxChange(
                  e,
                  additionalAmenities,
                  setAdditionalAmenities
                )
              }
            />{" "}
            EV charging station
          </label>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Additional amenities</h3>
          {/* Display additional amenities */}
          {additionalAmenities.length > 0 && (
            <ul className="mb-2 font-bold italic">
              {additionalAmenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          )}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Example: Pet area"
              className="border border-zinc-300 rounded p-2 mr-2 flex-grow"
              value={newAmenityDescription}
              onChange={(e) => setNewAmenityDescription(e.target.value)}
            />
            <button
              className="bg-zinc-300 text-zinc-700 p-2 rounded"
              onClick={handleAddAmenity}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
