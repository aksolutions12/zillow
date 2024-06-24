import React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function FinalDetail({ formData, setFormData }) {
  const {
    listedBy,
    name,
    email,
    selectedDays = [],
    hideAddress,
    selectedDate,
    leaseDuration,
    acceptOnlineApplications,
  } = formData.finalDetails;

  const days = [
    "Mondays",
    "Tuesdays",
    "Wednesdays",
    "Thursdays",
    "Fridays",
    "Saturdays",
    "Sundays",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      finalDetails: {
        ...prevFormData.finalDetails,
        [name]: value,
      },
    }));
  };

  const toggleDay = (day) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      finalDetails: {
        ...prevFormData.finalDetails,
        selectedDays: prevFormData.finalDetails.selectedDays.includes(day)
          ? prevFormData.finalDetails.selectedDays.filter((d) => d !== day)
          : [...prevFormData.finalDetails.selectedDays, day],
      },
    }));
  };

  const selectAllDays = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      finalDetails: {
        ...prevFormData.finalDetails,
        selectedDays: days,
      },
    }));
  };

  const handleDateChange = (newValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      finalDetails: {
        ...prevFormData.finalDetails,
        selectedDate: newValue ? newValue.toDate() : null,
      },
    }));
    console.log(selectedDate);
  };

  return (
    <div className="lg:px-16 sm:px-5 mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">
            Who's listing this property for rent?
          </h2>
          <p className="mb-4">
            Enter your information, unless you're creating the listing for
            someone else and they should be the main contact person.
          </p>
          <form>
            <div className="mb-4">
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Listed by <span className="text-red-500">*</span>
                </FormLabel>
                <RadioGroup
                  name="listedBy"
                  value={listedBy}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Property owner"
                    control={<Radio />}
                    label="Property owner"
                  />
                  <FormControlLabel
                    value="Management company or broker"
                    control={<Radio />}
                    label="Management company or broker"
                  />
                  <FormControlLabel
                    value="Tenant"
                    control={<Radio />}
                    label="Tenant"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <TextField
                name="name"
                className="w-full"
                value={name}
                onChange={handleInputChange}
                variant="outlined"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <TextField
                type="email"
                name="email"
                className="w-full"
                value={email}
                onChange={handleInputChange}
                variant="outlined"
              />
            </div>
          </form>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg shadow-md w-full md:w-1/3">
          <div className="flex items-center mb-4">
            <MdOutlineTipsAndUpdates size={30} color="blue" className="mr-2" />
            <h3 className="font-semibold">Tips for contact information</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>
              We'll deliver renter inquiries to the email you provide here.
            </li>
            <li>
              Other communications from Zillow will be sent to your account
              email.
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          When are you available to show the property?
        </h2>
        <p className="mb-4">Select your availability.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`border rounded px-4 py-2 ${
                selectedDays.includes(day)
                  ? "bg-blue-500 border-blue-700 bg-opacity-40"
                  : "border-zinc-300"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <button onClick={selectAllDays} className="text-blue-600 underline">
          Select all
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">Confirm final details</h2>
        <p className="mb-4">
          To save you time, we added a few details about your home. You can
          edit, if needed.
        </p>

        <div className="mb-4">
          <FormControl component="fieldset">
            <FormLabel component="legend">Hide property address</FormLabel>
            <RadioGroup
              row
              name="hideAddress"
              value={hideAddress}
              onChange={handleInputChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mb-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Available"
              value={dayjs(selectedDate)}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <div className="mb-4">
          <FormControl fullWidth>
            <FormLabel>Lease duration</FormLabel>
            <Select
              name="leaseDuration"
              value={leaseDuration}
              onChange={handleInputChange}
            >
              <MenuItem value="1 year">1 year</MenuItem>
              <MenuItem value="6 months">6 months</MenuItem>
              <MenuItem value="1 month">1 month</MenuItem>
              <MenuItem value="Rent to own">Rent to own</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="mb-4">
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Accept Zillow online applications
            </FormLabel>
            <RadioGroup
              row
              name="acceptOnlineApplications"
              value={acceptOnlineApplications}
              onChange={handleInputChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
