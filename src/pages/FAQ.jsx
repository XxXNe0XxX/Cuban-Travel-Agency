import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "1",
    question:
      "Labore aute eu consequat sunt nisi Lorem est cillum culpa labore proident qui ea.",
    answer: "Adipisicing aliquip amet laboris nostrud aute est adipisicing et.",
  },
  {
    id: "2",
    question: "Deserunt voluptate nulla aliquip voluptate elit quis.",
    answer:
      "Sunt culpa occaecat in nulla qui veniam elit cillum aliquip incididunt magna consectetur.",
  },
  {
    id: "3",
    question: "Dolor eu commodo est do culpa esse ex.",
    answer: "Labore dolor minim excepteur adipisicing magna laborum labore.",
  },
  {
    id: "4",
    question: "Labore sunt nisi amet commodo ut magna in quis nulla in.",
    answer: "Lorem veniam veniam nulla enim excepteur ipsum et ad deserunt.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full  px-4 py-6">
      <h1 className="text-center text-5xl p-4 leading-normal ">
        Frequently Asked Questions
      </h1>
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-2">
        {faqs.map((each) => {
          return (
            <Disclosure as="div" key={each.id}>
              {({ open }) => (
                <div className="p-2  ">
                  <Disclosure.Button className="flex gap-2 w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                    <span className="text-lg font-sans w-full ">
                      {each.question}
                    </span>
                    <IoIosArrowUp
                      className={`  text-blue-500 h-5 w-5 ${
                        open ? " rotate-180 transition-all " : " "
                      }`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <span className="text-lg font-sans">{each.answer}</span>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
    </section>
  );
}
