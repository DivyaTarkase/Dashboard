import Swal from "sweetalert2";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MentorRegistration = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [mentorshipProvided, setMentorshipProvided] = useState("");
  const [numStartups, setNumStartups] = useState(1); // To manage the number of startups
  const mentorshipStatus = watch("mentorshipProvided");
  const [researchInfo, setResearchInfo] = useState("");
  const navigate = useNavigate(); // For navigation

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);

    // Generate a 6-character alphanumeric ID
    const generateRandomId = () => {
      return Math.random().toString(36).substring(2, 8).toUpperCase();
    };

    const registrationId = generateRandomId();
    console.log("Registration Data:", data);
    console.log("Generated ID:", registrationId);

    Swal.fire({
      title: "Registration Successful!",
      text: `Your registration ID is: ${registrationId}`,
      icon: "success",
      confirmButtonText: "Proceed",
    }).then(() => {
      // Redirect to the common page
      navigate("/CommonPage");
    });
  };

  const handleMentorshipChange = (e) => {
    setMentorshipProvided(e.target.value);
    if (e.target.value === "No") {
      setNumStartups(1); // Reset startup count when "No" is selected
    }
  };

  const handleResearchInfoChange = (e) => {
    setResearchInfo(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Mentor Registration Form
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
              <label className="block font-semibold">Name of the Mentor *</label>
              <input
                type="text"
                {...register("mentorName", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter mentor's name"
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

        {/* Domain Info */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-green-600">Domain Info</h2>
          <div>
            <label className="block font-semibold">Domain of Interest *</label>
            <div className="space-y-2">
              {[
                "Mental Health",
                "Preventive Healthcare",
                "Data Analytics and Big Data",
                "Augmented Reality (AR) and Virtual Reality (VR)",
                "Blockchain and Web3",
                "Artificial Intelligence and Machine Learning",
                "Eco-Friendly Products",
                "Waste Management and Recycling",
                "Renewable Energy",
                "Local and Rural Development",
                "Interactive Games with Social Impact",
              ].map((domain) => (
                <div key={domain}>
                  <input
                    type="checkbox"
                    id={domain}
                    value={domain}
                    {...register("domains")}
                  />
                  <label htmlFor={domain} className="ml-2">{domain}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mentorship Info */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Mentorship Info</h2>
          <div>
            <label className="block font-semibold">Provided mentorship to any startup?</label>
            <select
              {...register("mentorshipProvided")}
              onChange={handleMentorshipChange}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Conditional Rendering of Mentorship Details */}
          {mentorshipProvided === "Yes" && (
            <div>
              <label className="block font-semibold">How Many Startups? *</label>
              <input
                type="number"
                {...register("numStartups", { required: true })}
                min={1}
                value={numStartups}
                onChange={(e) => setNumStartups(Number(e.target.value))}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter number of startups"
              />
              {[...Array(numStartups)].map((_, index) => (
                <div key={index} className="mt-4">
                  <label className="block font-semibold">Startup Name {index + 1}</label>
                  <input
                    type="text"
                    {...register(`startups[${index}].name`)} // Dynamic field name
                    className="w-full border rounded px-4 py-2"
                    placeholder={`Enter startup name ${index + 1}`}
                  />
                  <label className="block font-semibold mt-2">What is the current stage of the startup?</label>
                  <select
                    {...register(`startups[${index}].fundingStage`)} // Dynamic field name
                    className="w-full border rounded px-4 py-2"
                  >
                    <option value="Preincubation">Preincubation</option>
                    <option value="Incubation">Incubation</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Scaling">Scaling</option>
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Educational Info */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-purple-600">Educational Info</h2>
          <div>
            <label className="block font-semibold">Education *</label>
            <select
              {...register("education", { required: true })}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select Education Level</option>
              <option value="school">School</option>
              <option value="graduation">Graduation</option>
              <option value="postGraduation">Post Graduation</option>
              <option value="doctorate">Doctorate</option>
              <option value="phd">PhD</option>
              <option value="masters">Masters</option>
            </select>
          </div>

          {/* Research Info */}
          <div className="mt-4">
            <label className="block font-semibold">Any Patents/Research Papers Published?</label>
            <select
              {...register("researchInfo")}
              onChange={handleResearchInfoChange}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {researchInfo === "Yes" && (
            <div className="mt-4">
              <label className="block font-semibold">How Many?</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold">Patents</label>
                  <input
                    type="number"
                    {...register("patents")}
                    className="w-full border rounded px-4 py-2"
                    placeholder="Enter number of patents"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Research Papers</label>
                  <input
                    type="number"
                    {...register("researchPapers")}
                    className="w-full border rounded px-4 py-2"
                    placeholder="Enter number of research papers"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Achievement Info */}
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-pink-600">Achievement Info</h2>
          <div>
            <label className="block font-semibold">Achievements</label>
            <textarea
              {...register("achievements")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter brief info about achievements"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MentorRegistration;
