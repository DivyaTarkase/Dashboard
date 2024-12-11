import React, { useState } from "react";
import { useForm } from "react-hook-form";

const StartupRegistration = () => {
  const { register, handleSubmit } = useForm();
  const [fundingProvided, setFundingProvided] = useState(""); // State for funding question

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Startup Registration Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Contact Info */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Contact Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name of the Founder *</label>
              <input
                type="text"
                {...register("founderName", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter founder's name"
              />
            </div>
            <div>
              <label className="block font-semibold">Email *</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block font-semibold">Contact Number *</label>
              <input
                type="tel"
                {...register("contactNumber", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label className="block font-semibold">City *</label>
              <input
                type="text"
                {...register("city", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter city"
              />
            </div>
            <div>
              <label className="block font-semibold">State *</label>
              <input
                type="text"
                {...register("state", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter state"
              />
            </div>

            <div>
              <label className="block font-semibold">Location *</label>
              <input
                type="text"
                {...register("Location", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter Location"
              />
            </div>

            <div>
              <label className="block font-semibold">Portfolio Link</label>
              <input
                type="url"
                {...register("portfolioLink")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter portfolio link"
              />
            </div>
            <div>
              <label className="block font-semibold">LinkedIn Profile</label>
              <input
                type="url"
                {...register("linkedinProfile")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter LinkedIn profile link"
              />
            </div>
          </div>
        </div>

        {/* Startup Info */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-green-600">Startup Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name of the Startup *</label>
              <input
                type="text"
                {...register("startupName", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter startup name"
              />
            </div>
            <div>
              <label className="block font-semibold">Date of Establishment *</label>
              <input
                type="date"
                {...register("establishmentDate", { required: true })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold">Domain *</label>
              <select
                {...register("domain", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Domain</option>
                <option>Mental Health</option>
                <option>Preventive Healthcare</option>
                <option>Data Analytics and Big Data</option>
                <option>Augmented Reality (AR) and Virtual Reality (VR)</option>
                <option>Blockchain and Web3</option>
                <option>Artificial Intelligence and Machine Learning</option>
                <option>Eco-Friendly Products</option>
                <option>Waste Management and Recycling</option>
                <option>Renewable Energy</option>
                <option>Local and Rural Development</option>
                <option>Interactive Games with Social Impact</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Stage *</label>
              <select
                {...register("stage", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Stage</option>
                <option>Preincubation</option>
                <option>Incubation</option>
                <option>Marketing</option>
                <option>Scaling</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block font-semibold">Description *</label>
              <textarea
                {...register("description", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter mission, vision, goals"
                rows="4"
              ></textarea>
            </div>
            <div>
              <label className="block font-semibold">Startup Website Link</label>
              <input
                type="url"
                {...register("websiteLink")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter startup website link"
              />
            </div>
            <div>
              <label className="block font-semibold">Target Sector</label>
              <input
                type="text"
                {...register("targetSector")}
                className="w-full border rounded px-4 py-2"
                placeholder="B2B, B2C, specific niches"
              />
            </div>

            <div>
              <label className="block font-semibold">Sub-Organisation Of Founder</label>
              <input
                type="text"
                {...register("Sub-org")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter Sub-Orgnisation"
              />
            </div>


            <div>
              <label className="block font-semibold">Headquarters Region</label>
              <input
                type="text"
                {...register("Sub-org")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter Headquarters Region"
              />
            </div>
          </div>
        </div>

        {/* Financial Info */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Financial Info</h2>

          {/* Funding Provided Earlier */}
          <div>
            <label className="block font-semibold">Funding Provided Earlier?</label>
            <select
              {...register("fundingProvided")}
              onChange={(e) => setFundingProvided(e.target.value)}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Conditional Rendering of Funding Status and Investor Name */}
          {fundingProvided === "Yes" && (
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md mt-4">
              <h2 className="text-xl font-bold mb-4 text-yellow-600">Funding</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Funding Type</label>
                  <select
                    {...register("fundingType", { required: true })}
                    className="w-full border rounded px-4 py-2"
                  >
                    <option value="">Funding Type</option>
                    <option>Seed Additional</option>
                    <option>Venture Capital</option>
                    <option>Private Equity</option>
                    <option>Government Grants</option>
                    <option>Angel Investment</option>
                    <option>Corporate Sponsorship</option>
                    <option>Debt Financing</option>
                    <option>Crowdfunding</option>
                    <option>Accelerator/Incubator Funding</option>
                    <option>Bootstrapping</option>
                    <option>Impact Investment</option>
                    <option>Social Impact Bonds</option>
                    <option>Strategic Partnership</option>
                    <option>Family Offices</option>
                    <option>IPO (Initial Public Offering)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold">Funding Rounds</label>
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
                  <label className="block font-semibold">Lead Investors</label>
                  <input
                    type="text"
                    {...register("leadInvestors", { required: true })}
                    className="w-full border rounded px-4 py-2"
                    placeholder="Enter Name of Lead Investors"
                  />
                </div>

                <div>
                  <label className="block font-semibold">Number of Investors</label>
                  <input
                    type="number"
                    {...register("numberOfInvestors", { required: true })}
                    className="w-full border rounded px-4 py-2"
                    placeholder="Enter Number of Investors"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Total Funding Amount</label>
                  <input
                    type="text"
                    {...register("fundamt", { required: true })}
                    className="w-full border rounded px-4 py-2"
                    placeholder="Enter Total Funding Amount"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block font-semibold">Enter Funding Information</label>
                  <textarea
                    {...register("fundingInfo", { required: true })}
                    className="w-full border rounded px-4 py-2"
                    placeholder="Enter funding information"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-purple-600">Additional Info</h2>
          <div>
            <label className="block font-semibold">No. of Patents Registered</label>
            <input
              type="number"
              {...register("patents")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of patents"
            />
          </div>
          <div>
            <label className="block font-semibold">No. of Research Papers Published</label>
            <input
              type="number"
              {...register("researchPapers")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of research papers"
            />
          </div>
        </div>

        {/* Team Info */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-teal-600">Team Info</h2>
          <div>
            <label className="block font-semibold">Team Size *</label>
            <input
              type="number"
              {...register("teamSize", { required: true })}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter team size"
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

export default StartupRegistration;