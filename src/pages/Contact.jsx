import { MdOutlinePhone } from "react-icons/md";

import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import EmailForm from "./EmailForm";

const contacts = [
  {
    id: 1,
    icon: <MdOutlinePhone />,
    text: "Phone Number: +123456789",
  },
  {
    id: 2,

    icon: <MdOutlineEmail />,
    text: "Email: youremail@here.com",
  },
  {
    id: 3,

    icon: <MdOutlineLocationOn />,
    text: "Address: 111 One Street, City, State 11111",
  },
  {
    id: 4,

    icon: <AiOutlineClockCircle />,
    text: "Opening Hours: 10:00 AM - 10:00 PM",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen">
      <div className="relative h-64">
        <img
          className="w-full h-full  object-cover"
          src="/src/assets/mock-image-1.jpg"
        ></img>
        <div className="absolute bottom-0 w-full bg-[rgba(0,0,0,0.3)] h-full flex items-center justify-center">
          <span className="text-white  font-sans text-6xl font-bold ">
            Contact Us
          </span>
        </div>
      </div>
      <div className="flex items-center justify-around gap-8 w-full p-12 ">
        <ul className="flex  font-sans text-md   justify-center flex-col gap-8">
          {contacts.map((each) => {
            return (
              <li key={each.id} className="flex items-center gap-4">
                <span className="text-2xl   ">{each.icon}</span>
                <h1 className="">{each.text}</h1>
              </li>
            );
          })}
        </ul>
        <div className="w-[50%] flex justify-center">
          <EmailForm></EmailForm>
        </div>
      </div>
    </section>
  );
};

export default Contact;
