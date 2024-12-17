import { FaMeta, FaTiktok } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="overflow-hidden flex flex-col h-80 content-center justify-around items-center bg-gray-800  text-white">
      <div className="flex justify-around w-full gap-5">
        <div className="flex gap-3 justify-around  w-[50%]  items-center">
          <div className="flex flex-col items-center gap-3 ">
            <img src="/src/assets/logo.png" className="w-20 h-20" alt="logo" />
            <h1 className="uppercase">Name of the company</h1>
          </div>
          <div className="flex gap-6 justify-center items-center ">
            <FaInstagram className="w-8 h-8"></FaInstagram>
            <FaMeta className="w-8 h-8"></FaMeta>
            <FaWhatsapp className="w-8 h-8"></FaWhatsapp>
            <FaTiktok className="w-8 h-8"></FaTiktok>
            <FaYoutube className="w-8 h-8"></FaYoutube>
          </div>
        </div>
        <div className="flex gap-3 justify-around  w-[50%]  items-start">
          <ul className="flex flex-col gap-3 w-[50%] justify-center items-center content-start hover:*:bg-blue-900 *:transition-all *:duration-300 *:p-2 *:w-[200px] *:text-center *:rounded-3xl *:cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Address</li>
            <li>Mail</li>
          </ul>
          <ul className="flex flex-col gap-3 w-[50%] justify-center items-center content-start hover:*:bg-blue-900 *:transition-all *:duration-300 *:p-2 *:w-[200px] *:text-center *:rounded-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Address</li>
            <li>Mail</li>
          </ul>
        </div>
      </div>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
