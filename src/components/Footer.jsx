import { FaMeta } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col h-80 content-center justify-around items-center bg-gray-900 mt-5">
      <div className="flex justify-around w-full gap-5">
        <img src="/src/assets/logo.png" className="w-20 h-20" alt="logo" />
        <div className="flex gap-3">
          <FaInstagram className="w-8 h-8"></FaInstagram>
          <FaMeta className="w-8 h-8"></FaMeta>
          <FaWhatsapp className="w-8 h-8"></FaWhatsapp>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Address</li>
          <li>Mail</li>
        </ul>
      </div>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
