import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import footerContact from "./footerContact.json";

export default function Footer() {
  const iconMap = {
    MdLocationOn: <MdLocationOn />,
    IoCall: <IoCall />,
    IoIosMail: <IoIosMail />,
  };

  return (
    <footer className="w-full bg-blue-950 text-white py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {footerContact.map((currData, index) => {
            const { icon, title, detail } = currData;
            return (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-900 transition-all duration-300">
                <div className="text-3xl text-blue-300">{iconMap[icon]}</div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
                  <p className="text-sm text-gray-300">{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}