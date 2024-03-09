import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import EmailForm from "./EmailForm";

const contacts = [
  {
    id: 1,
    icon: <GiRotaryPhone />,
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
        <h1 className="absolute bottom-0 w-full bg-[rgba(0,0,0,0.3)]   text-4xl font-sans h-full flex items-center justify-center">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-around gap-8 w-full p-12 m-auto">
        <ul className="flex  font-sans text-md font-thin w-fit tracking-widest    flex-col gap-3">
          {contacts.map((each) => {
            return (
              <li key={each.id} className="flex items-center gap-4">
                <span className="text-2xl rounded-full border border-white p-2 bg-green-700 ">
                  {each.icon}
                </span>
                <h1 className="">{each.text}</h1>
              </li>
            );
          })}
        </ul>
        <EmailForm></EmailForm>
      </div>
    </section>
  );
};

export default Contact;
