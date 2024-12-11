import React, { useState } from "react";
import { useForm } from "react-hook-form";

const InvestorRegistration = () => {
  const { register, handleSubmit } = useForm();
  const [investedInStartups, setInvestedInStartups] = useState(""); // State to handle "Invested in any startup?" question
  const [numStartups, setNumStartups] = useState(1); // Default number of startups to 1
  const [researchInfo, setResearchInfo] = useState(""); // State for research-related info
  const [numJobs, setNumJobs] = useState(1); // Default number of jobs to 1
  const [numBoardRoles, setNumBoardRoles] = useState(1); // Default number of board roles to 1

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleInvestedChange = (e) => {
    setInvestedInStartups(e.target.value);
    if (e.target.value === "Yes") {
      setNumStartups(1); // Reset number of startups if "Yes"
    }
  };

  const handleResearchInfoChange = (e) => {
    setResearchInfo(e.target.value);
  };

  const handleNumJobsChange = (e) => {
    setNumJobs(e.target.value);
  };

  const handleNumBoardRolesChange = (e) => {
    setNumBoardRoles(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Investor Registration Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Personal Information Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name *</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter investor's name"
              />
            </div>
            <div>
              <label className="block font-semibold">Location *</label>
              <input
                type="text"
                {...register("location", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block font-semibold">Gender *</label>
              <select
                {...register("gender", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Education *</label>
              <input
                type="text"
                {...register("education", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter education"
              />
            </div>
            <div>
              <label className="block font-semibold">Primary Job Title *</label>
              <input
                type="text"
                {...register("jobTitle", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter primary job title"
              />
            </div>
            <div>
              <label className="block font-semibold">Primary Organization *</label>
              <input
                type="text"
                {...register("organization", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter primary organization"
              />
            </div>
            <div>
              <label className="block font-semibold">Regions *</label>
              <input
                type="text"
                {...register("regions", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter regions"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-600">Social Media Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Facebook URL</label>
              <input
                type="url"
                {...register("facebookURL")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter Facebook URL"
              />
            </div>
            <div>
              <label className="block font-semibold">LinkedIn URL</label>
              <input
                type="url"
                {...register("linkedinURL")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter LinkedIn URL"
              />
            </div>
            <div>
              <label className="block font-semibold">Twitter URL</label>
              <input
                type="url"
                {...register("twitterURL")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter Twitter URL"
              />
            </div>
          </div>
        </div>

        {/* Investment Details Section */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-green-600">Investment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Number of Portfolio Companies</label>
              <input
                type="number"
                {...register("portfolioCompanies")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter number of portfolio companies"
              />
            </div>
            <div>
              <label className="block font-semibold">Number of Investments</label>
              <input
                type="number"
                {...register("investments")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter number of investments"
              />
            </div>
            <div>
              <label className="block font-semibold">Lead Investments</label>
              <input
                type="number"
                {...register("leadInvestments")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter lead investments"
              />
            </div>
            <div>
              <label className="block font-semibold">Number of Partner Investments</label>
              <input
                type="number"
                {...register("partnerInvestments")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter number of partner investments"
              />
            </div>
            <div>
              <label className="block font-semibold">Investor Stage</label>
              <select
                {...register("fundingRound", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Enter Funding Round</option>
                <option>Seed Round</option>
                <option>Series A</option>
                <option>Series B</option>
                <option>Series C</option>
                <option>Series D</option>
                <option>Series E</option>
                <option>Bridge Round</option>
                <option>Pre-Seed Round</option>
                <option>Post-Seed Round</option>
                <option>Venture Round</option>
                <option>Convertible Note</option>
                <option>Initial Coin Offering (ICO)</option>
                <option>Equity Crowdfunding</option>
                <option>Debt Financing Round</option>
                <option>Secondary Sale</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Investor Type</label>
              <select
                {...register("investorType", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Investor Type</option>
                <option value="Seed Additional">Seed Additional</option>
                <option value="Venture Capital">Venture Capital</option>
                <option value="Private Equity">Private Equity</option>
                <option value="Government Grants">Government Grants</option>
                <option value="Angel Investment">Angel Investment</option>
                <option value="Corporate Sponsorship">Corporate Sponsorship</option>
                <option value="Debt Financing">Debt Financing</option>
                <option value="Crowdfunding">Crowdfunding</option>
                <option value="Accelerator/Incubator Funding">Accelerator/Incubator Funding</option>
                <option value="Bootstrapping">Bootstrapping</option>
                <option value="Impact Investment">Impact Investment</option>
                <option value="Social Impact Bonds">Social Impact Bonds</option>
                <option value="Strategic Partnership">Strategic Partnership</option>
                <option value="Family Offices">Family Offices</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Money Raised</label>
              <input
                type="number"
                {...register("moneyRaised")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter money raised"
              />
            </div>
          </div>
        </div>

        {/* Organization Information Section */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Organization Information</h2>
          <div>
            <label className="block font-semibold">Organization Name</label>
            <input
              type="text"
              {...register("organizationName")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter organization name"
            />
          </div>
          <div>
            <label className="block font-semibold">Announced Date</label>
            <input
              type="date"
              {...register("announcedDate")}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        {/* Job History Section */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-teal-600">Job History</h2>
          <div>
            <label className="block font-semibold">Current & Past Roles</label>
            <input
              type="text"
              {...register("currentPastRoles")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter current and past roles"
            />
          </div>
          <div>
            <label className="block font-semibold">Number of Current Jobs</label>
            <input
              type="number"
              {...register("currentJobs")}
              className="w-full border rounded px-4 py-2"
              value={numJobs}
              onChange={handleNumJobsChange}
            />
          </div>

          {[...Array(parseInt(numJobs))].map((_, index) => (
            <div key={index} className="mt-4">
              <label className="block font-semibold">Job {index + 1}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Organization Name</label>
                  <input
                    type="text"
                    {...register(`jobDetails[${index}].organizationName`)}
                    className="w-full border rounded px-4 py-2"
                    placeholder={`Enter organization name for job ${index + 1}`}
                  />
                </div>
                <div>
                  <label className="block font-semibold">Job Title</label>
                  <input
                    type="text"
                    {...register(`jobDetails[${index}].jobTitle`)}
                    className="w-full border rounded px-4 py-2"
                    placeholder={`Enter job title for job ${index + 1}`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Start Date</label>
                  <input
                    type="date"
                    {...register(`jobDetails[${index}].startDate`)}
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold">End Date</label>
                  <input
                    type="date"
                    {...register(`jobDetails[${index}].endDate`)}
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Board and Advisor Roles Section */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-purple-600">Board and Advisor Roles</h2>
          <div>
            <label className="block font-semibold">Number of Current Board & Advisor Roles</label>
            <input
              type="number"
              {...register("currentBoardRoles")}
              className="w-full border rounded px-4 py-2"
              value={numBoardRoles}
              onChange={handleNumBoardRolesChange}
            />
          </div>
          <div>
            <label className="block font-semibold">Number of Past Board & Advisor Roles</label>
            <input
              type="number"
              {...register("pastBoardRoles")}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        {/* Patent or Research Paper Section */}
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-pink-600">Patent or Research Paper Published</h2>
          <div>
            <label className="block font-semibold">Number of Patents</label>
            <input
              type="number"
              {...register("patents")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of patents"
            />
          </div>
          <div>
            <label className="block font-semibold">Number of Research Papers</label>
            <input
              type="number"
              {...register("researchPapers")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of research papers"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvestorRegistration;
