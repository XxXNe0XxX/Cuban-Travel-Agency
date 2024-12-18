import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    name: "Visa",
    description: "Get a better understanding of your traffic",
    href: "/visa",
  },
  {
    name: "Transportation",
    description: "Get a better understanding of your traffic",
    href: "/transportation",
  },
  {
    name: "Hotels",
    description: "Speak directly to your customers",
    href: "/hotels",
  },
  {
    name: "Activities",
    description: "Your customers’ data will be safe and secure",
    href: "/activities",
  },
  {
    name: "Blog",
    description: "Connect with third-party tools",
    href: "/blog",
  },
  {
    name: "Tour Guides",
    description: "Build strategic funnels that will convert",
    href: "/tour-guides",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 5,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-[rgba(255,255,255,0.7)]  shadow-md backdrop-blur-lg sticky top-0 z-20  w-screen"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <nav
        className="flex items-center justify-between py-2   "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center">
            <span className="sr-only">Your Company</span>
            <motion.img
              className="h-12 px-2 rounded-md w-auto"
              src="src/assets/logo.png"
              alt="Logo"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "tween", duration: 0.2 }}
            />
          </Link>
        </div>
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md px-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex items-center lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700 transition-colors"
          >
            Home
          </Link>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="flex justify-center items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700 transition-colors">
                  <h1>Pages</h1>
                  <FaAngleDown
                    className={classNames(
                      "h-5 w-5 flex-none text-gray-400 transition-transform",
                      open ? "rotate-180 text-blue-700" : ""
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    as={motion.div}
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="p-4">
                      {products.map((item) => (
                        <motion.div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "tween", duration: 0.2 }}
                        >
                          <Link
                            to={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link
            to="/tours"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700 transition-colors"
          >
            Tours
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700 transition-colors"
          >
            FAQ
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="login"
            className="text-sm font-semibold leading-6 rounded-3xl bg-blue min-w-[100px] text-center p-2 text-white transition-transform"
            whileHover={{ scale: 1.05 }}
            style={{ display: "inline-block" }}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <motion.div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm" />
            <Dialog.Panel
              as={motion.div}
              className="fixed inset-y-0 right-0 z-20 w-full bg-white px-4 py-2 sm:ring-1 sm:ring-gray-900/10 flex flex-col justify-start gap-y-3 "
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <MdClose className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="bg-black w-full px-2 h-[1px]"></div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      to="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Pages
                            <FaAngleDown
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {products.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Link
                      to="/tours"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Tours
                    </Link>
                    <Link
                      to="/contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/faq"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
