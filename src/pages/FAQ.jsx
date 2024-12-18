import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const panelVariants = {
  closed: { opacity: 0, height: 0 },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function FAQ() {
  return (
    <section className="w-full px-4 py-6 min-h-screen bg-gray-50">
      <h1 className="text-center text-5xl p-4 leading-normal font-bold text-gray-800">
        Frequently Asked Questions
      </h1>
      <motion.div
        className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-2 shadow-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {faqs.map((each) => (
          <motion.div key={each.id} variants={itemVariants}>
            <Disclosure>
              {({ open }) => (
                <div className="p-2">
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-blue-100 px-4 py-3 text-left text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75 transition-colors">
                    <span className="font-sans w-full">{each.question}</span>
                    <IoIosArrowUp
                      className={`text-blue-500 h-5 w-5 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    as={motion.div}
                    className="overflow-hidden px-4 pt-3 pb-2 text-sm text-gray-700"
                    variants={panelVariants}
                    animate={open ? "open" : "closed"}
                    initial="closed"
                  >
                    <span className="text-base font-sans">{each.answer}</span>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
