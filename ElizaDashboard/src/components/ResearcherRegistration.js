import React from "react";
import { useForm } from "react-hook-form";

const ResearcherRegistration = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Research Institute Registration Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Basic Info */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Basic Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Institute Name *</label>
              <input
                type="text"
                {...register("instituteName", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter institute name"
              />
            </div>
            <div>
              <label className="block font-semibold">Type (Public/Private) *</label>
              <select
                {...register("instituteType", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Type</option>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Year of Establishment *</label>
              <input
                type="date"
                {...register("yearOfEstablishment", { required: true })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold">University ID *</label>
              <input
                type="text"
                {...register("universityId", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter university ID"
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
              <label className="block font-semibold">District *</label>
              <input
                type="text"
                {...register("district", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter district"
              />
            </div>
          </div>
        </div>

        {/* Identification Info */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-green-600">Identification Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Identification Code *</label>
              <input
                type="text"
                {...register("identificationCode", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter identification code"
              />
            </div>
            <div>
              <label className="block font-semibold">UGC Code</label>
              <input
                type="text"
                {...register("ugcCode")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter UGC code"
              />
            </div>
            <div>
              <label className="block font-semibold">GSTIN Number</label>
              <input
                type="text"
                {...register("gstinNumber")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter GSTIN number"
              />
            </div>
            <div>
              <label className="block font-semibold">Institute of National Importance (INI) Code</label>
              <input
                type="text"
                {...register("iniCode")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter INI code"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Additional Info</h2>
          <div>
            <label className="block font-semibold">No. of Research Papers Published</label>
            <input
              type="number"
              {...register("researchPapers")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of research papers"
            />
          </div>
          <div>
            <label className="block font-semibold">No. of Patents Registered</label>
            <input
              type="number"
              {...register("patents")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of patents"
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

export default ResearcherRegistration;
