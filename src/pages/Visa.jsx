import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
const visaProcedureSteps = [
  {
    title: "Determine Your Visa Type",
    description:
      "Before applying for a visa, determine the type of visa you need, such as tourist visas, business visas, or family visit visas.",
  },
  {
    title: "Understand Travel Restrictions",
    description:
      "Familiarize yourself with any travel restrictions or regulations imposed by the U.S. government concerning travel to Cuba.",
  },
  {
    title: "Contact the Cuban Embassy or Consulate",
    description:
      "Reach out to the Cuban Embassy or Consulate nearest to your location for information on visa application procedures, required documents, and fees.",
  },
  {
    title: "Gather Required Documents",
    description:
      "Prepare all necessary documents for your visa application, including a valid passport, completed visa application form, proof of travel insurance, and itinerary.",
  },
  {
    title: "Submit Your Application",
    description:
      "Submit your visa application to the Cuban Embassy or Consulate following their specific instructions, including any appointment requirements.",
  },
  {
    title: "Pay Visa Fees",
    description:
      "Pay the applicable visa fees as instructed by the Cuban Embassy or Consulate, which may vary depending on the visa type and processing time.",
  },
  {
    title: "Await Processing",
    description:
      "Wait for your visa application to be processed. Processing times vary, so apply well in advance of your intended travel date.",
  },
  {
    title: "Receive Your Visa",
    description:
      "Once your visa application is approved, you will receive your visa either by mail or in person. Verify that all information on the visa is accurate before traveling.",
  },
  {
    title: "Travel to Cuba",
    description:
      "With your visa in hand, you are ready to travel to Cuba! Ensure compliance with any additional entry requirements imposed by Cuban authorities upon arrival.",
  },
];

export default function Example() {
  return (
    <>
      <h1 className="text-center text-5xl px-12 py-8 w-[50vw] m-auto leading-normal   ">
        Obtaining a visa to visit Cuba from within the United States
      </h1>
      <div className="w-[50vw] min-h-screen m-auto pt-16 *:text-2xl flex flex-col gap-3 content-center items-center justify-start">
        {visaProcedureSteps.map((step, index) => (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-3xl bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                  <div>
                    <span>{index + 1}. </span>
                    <span>{step.title}</span>
                  </div>
                  <FaChevronDown
                    className={`${
                      open ? " rotate-180 transform transition-all" : ""
                    } self-center h-5 w-5 text-blue-500 transition-all`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                  {step.description}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  );
}
