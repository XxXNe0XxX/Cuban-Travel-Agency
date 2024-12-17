import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { FaListCheck, FaBus } from "react-icons/fa6";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const Select = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <div className="w-40 h-8 flex items-center justify-center ">
        <select className="w-full rounded-md h-full" name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </>
  );
};

export default Select;
