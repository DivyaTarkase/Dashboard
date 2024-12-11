import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const ResearchProjectRegistration = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "patents", // For managing a dynamic list of patents
  });

  const [coInvestigatorCount, setCoInvestigatorCount] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Research Project Registration Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Project Details */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Project Name *</label>
              <input
                type="text"
                {...register("projectName", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block font-semibold">Principal Investigator *</label>
              <input
                type="text"
                {...register("principalInvestigator", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter principal investigator's name"
              />
            </div>
            <div>
              <label className="block font-semibold">Co-Investigator(s) *</label>
              {[...Array(coInvestigatorCount)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  {...register(`coInvestigator${index + 1}`, { required: true })}
                  className="w-full border rounded px-4 py-2 mb-2"
                  placeholder={`Enter co-investigator ${index + 1} name`}
                />
              ))}
              <div className="flex space-x-4">
                {coInvestigatorCount < 2 && (
                  <button
                    type="button"
                    onClick={() => setCoInvestigatorCount(coInvestigatorCount + 1)}
                    className="text-blue-600 font-bold"
                  >
                    Add Co-Investigator
                  </button>
                )}
                {coInvestigatorCount > 1 && (
                  <button
                    type="button"
                    onClick={() => setCoInvestigatorCount(coInvestigatorCount - 1)}
                    className="text-red-600 font-bold"
                  >
                    Remove Co-Investigator
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block font-semibold">Funding Agency *</label>
              <input
                type="text"
                {...register("fundingAgency", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter funding agency"
              />
            </div>
            <div>
              <label className="block font-semibold">Project Category *</label>
              <select
                {...register("projectCategory", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Category</option>
                <option>Health</option>
                <option>Environment</option>
                <option>Technology</option>
                <option>Social Sciences</option>
                <option>Education</option>
                <option>Agriculture</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Start Date *</label>
              <input
                type="date"
                {...register("startDate", { required: true })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold">End Date *</label>
              <input
                type="date"
                {...register("endDate", { required: true })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>
        </div>

        {/* Budget Details */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-green-600">Budget Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Project Budget *</label>
              <input
                type="number"
                {...register("projectBudget", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter project budget"
              />
            </div>
            <div>
              <label className="block font-semibold">Total Budget *</label>
              <input
                type="number"
                {...register("totalBudget", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter total budget"
              />
            </div>
            <div>
              <label className="block font-semibold">Personal Budget *</label>
              <input
                type="number"
                {...register("personalBudget", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter personal budget"
              />
            </div>
            <div>
              <label className="block font-semibold">Equipment Budget *</label>
              <input
                type="number"
                {...register("equipmentBudget", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter equipment budget"
              />
            </div>
            <div>
              <label className="block font-semibold">Research Expenses *</label>
              <input
                type="number"
                {...register("researchExpenses", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter research expenses"
              />
            </div>
          </div>
        </div>

        {/* Patents */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-purple-600">Patents</h2>
          {fields.map((field, index) => (
            <div key={field.id} className="flex space-x-4 mb-4">
              <input
                type="text"
                {...register(`patents.${index}.patentNumber`, { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter patent number"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-600 font-bold"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ patentNumber: "" })}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Add Patent
          </button>
        </div>

        {/* Approvals */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Approvals</h2>
          <div>
            <label className="block font-semibold">Ethical Approval Document *</label>
            <input
              type="file"
              {...register("ethicalApproval", { required: true })}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold">Institutional Approval Document *</label>
            <input
              type="file"
              {...register("institutionalApproval", { required: true })}
              className="w-full border rounded px-4 py-2"
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

export default ResearchProjectRegistration;
