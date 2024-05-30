import React, { useState } from "react";

export default function ConversationForm() {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    nmlsId: "",
  });

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    // Reset form data when role changes
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      nmlsId: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Start The Conversation</h2>
      <p className="mb-4">
        We're looking for motivated loan officers who strive to provide an
        excellent consumer experience. If you're interested in learning more,
        call us at <strong>(877) 661-3172</strong> or complete the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label
          htmlFor="role"
          className="block text-sm font-medium text-zinc-700 mb-2"
        >
          I am a:
        </label>
        <select
          id="role"
          name="role"
          className="block w-full p-2 border border-zinc-300 rounded-md mb-2"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option value="">Select one</option>
          <option value="loanOfficer">Loan Officer or Mortgage Broker</option>
          <option value="salesManager">Sales Manager or Branch Manager</option>
          <option value="marketing">Marketing Department</option>
          <option value="adAgency">Ad Agency</option>
        </select>
        {selectedRole && (
          <div>
            {selectedRole === "loanOfficer" ? (
              <div>
                <label
                  htmlFor="nmlsId"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  NMLS ID
                </label>
                <input
                  type="text"
                  id="nmlsId"
                  name="nmlsId"
                  value={formData.nmlsId}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-zinc-800 dark:text-zinc-300"
                />
              </div>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    First and last name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-zinc-800 dark:text-zinc-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-zinc-800 dark:text-zinc-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-zinc-800 dark:text-zinc-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-zinc-800 dark:text-zinc-300"
                  />
                </div>
              </>
            )}
          </div>
        )}
        <p className="text-red-600 text-sm mb-4">
          {selectedRole && selectedRole === "loanOfficer"
            ? "Please provide your NMLS ID."
            : "Please fill in all fields."}
        </p>
        <p className="text-zinc-600 text-sm mb-4">
          We respect your privacy. See our{" "}
          <a href="#" className="text-blue-500">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          className={`w-full p-3 ${
            isFormValid()
              ? "bg-blue-500 text-white"
              : "bg-blue-100 text-blue-500"
          } font-bold rounded-md`}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
      <p className="text-center text-zinc-700 mt-4">
        Or call <strong>(877) 661-3172</strong>
      </p>
    </div>
  );
}
