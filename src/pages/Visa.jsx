import React, { useState } from "react";

const VisaRequirements = () => {
  const [nationality, setNationality] = useState("");
  const [purpose, setPurpose] = useState("");
  const [requirements, setRequirements] = useState("");

  const nationalities = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Other",
  ];
  const purposes = ["Tourism", "Business", "Family Visit", "Study", "Other"];

  const visaInfo = {
    "United States": {
      Tourism:
        "Tourists from the United States require a tourist card, which is valid for a single entry and allows a stay of up to 30 days. This can be extended for another 30 days.",
      Business:
        "Business travelers must apply for a business visa, requiring an invitation from a Cuban company and a letter from the traveler’s employer.",
      "Family Visit":
        "A family visa is required, and proof of family relations in Cuba must be provided.",
      Study:
        "A student visa is required. An acceptance letter from a Cuban educational institution is necessary.",
      Other:
        "Specific visa requirements depend on the exact purpose of the visit.",
    },
    Canada: {
      Tourism:
        "Canadian citizens can obtain a tourist card upon arrival or through a travel agency, valid for up to 30 days and extendable for another 30 days.",
      Business:
        "A business visa is required. Documentation proving business activities in Cuba is necessary.",
      "Family Visit":
        "A visa for family visits is required. Proof of family relations is necessary.",
      Study:
        "A student visa is required, supported by documentation from the educational institution.",
      Other: "Please consult the Cuban consulate for specific requirements.",
    },
    "United Kingdom": {
      Tourism:
        "UK citizens require a tourist card, which can be obtained before travel from the consulate or certain airlines, valid for 30 days and extendable.",
      Business:
        "A business visa must be obtained before travel, requiring an invitation from a Cuban entity.",
      "Family Visit":
        "A visa for family visits is required, with evidence of family connections in Cuba.",
      Study:
        "A study visa is necessary, with an acceptance letter from the institution in Cuba.",
      Other:
        "Check with the Cuban embassy for detailed visa information based on your specific circumstances.",
    },

    Other: {
      Tourism:
        "Most other nationalities require a tourist card, which can often be obtained on arrival or through airlines.",
      Business:
        "A visa is usually required, with specifics depending on the nature of the business and agreements with Cuba.",
      "Family Visit":
        "Visa requirements depend heavily on your home country and the specifics of your visit.",
      Study:
        "A student visa is typically required, with documentation from the Cuban institution.",
      Other:
        "Consult your local Cuban embassy or consulate for exact requirements.",
    },
  };

  const fetchRequirements = (nat, purp) => {
    return (
      visaInfo[nat]?.[purp] ||
      "No specific information available for this category. Please check with the nearest Cuban consulate."
    );
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
    updateRequirements(event.target.value, purpose);
  };

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
    updateRequirements(nationality, event.target.value);
  };

  const updateRequirements = (nat, purp) => {
    if (nat && purp) {
      setRequirements(fetchRequirements(nat, purp));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen bg-white">
      <h1 className="text-xl font-bold text-center mb-4">
        Cuba Visa Requirements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="nationality"
            className="block text-sm font-medium text-gray-700"
          >
            Nationality
          </label>
          <select
            id="nationality"
            value={nationality}
            onChange={handleNationalityChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select your nationality</option>
            {nationalities.map((nat, index) => (
              <option key={index} value={nat}>
                {nat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="purpose"
            className="block text-sm font-medium text-gray-700"
          >
            Purpose of Visit
          </label>
          <select
            id="purpose"
            value={purpose}
            onChange={handlePurposeChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select the purpose of your visit</option>
            {purposes.map((purp, index) => (
              <option key={index} value={purp}>
                {purp}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-semibold">Visa Requirements</h2>
        <p>
          {requirements ||
            "Please select your nationality and the purpose of your visit to view specific visa requirements."}
        </p>
      </div>
    </div>
  );
};

export default VisaRequirements;
