import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Visa",
    description: "Get a better understanding of your traffic",
    href: "/visa",
    icon: "",
  },
  {
    name: "Transportation",
    description: "Get a better understanding of your traffic",
    href: "/transportation",
    icon: "",
  },
  {
    name: "Hotels",
    description: "Speak directly to your customers",
    href: "/hotels",
    icon: "",
  },
  {
    name: "Activities",
    description: "Your customers’ data will be safe and secure",
    href: "/activities",
    icon: "",
  },
  {
    name: "Blog",
    description: "Connect with third-party tools",
    href: "/blog",
    icon: "",
  },
  {
    name: "Tour Guides",
    description: "Build strategic funnels that will convert",
    href: "/tour-guides",
    icon: "",
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: "" },
  { name: "Contact sales", href: "#", icon: "" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[rgba(255,255,255,0.7)] w-full shadow-md backdrop-blur-lg  sticky top-0 z-20">
      <nav
        className=" mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8  "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 rounded-md w-auto"
              src="src\assets\logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden *:bg-white *:min-w-[100px] *:text-center *:p-2 *:rounded-3xl *:shadow-xl lg:flex items-center lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Popover className="relative ">
            <Popover.Button className="flex justify-center items-center w-full gap-x-1 text-sm font-semibold leading-6 text-gray-900  ">
              <h1>Pages</h1>
              <FaAngleDown
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"></div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/tours"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Tours
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            FAQ
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a
            href="#"
            className="text-sm font-semibold leading-6 rounded-3xl hover:bg-blue-800 bg-blue-700 min-w-[100px] text-center p-2 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 rounded-md w-auto"
                src="src\assets\logo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <MdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <FaAngleDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
