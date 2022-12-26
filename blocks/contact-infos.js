import { FaRegMap, FaRegUserCircle, FaAddressBook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contactinfos() {
  return (
    <div className="p-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-5 mt-10">
      <div className="text-center md:text-left">
        <div className="w-14 h-14 m-auto md:ml-0 border-2 border-indigo-500 rounded-full flex justify-center items-center text-xl text-indigo-500 relative">
          <FaRegMap />
          <span className="w-16 border-1 border-indigo-500 absolute left-full top-1/2 hidden md:block"></span>
        </div>
        <h4 className="text-xl italic text-indigo-500 font-semibold mt-3">Address</h4>
        <p className="text-sm tracking-wider mt-1">
          <a href="mailto:nahid98learn@gmail.com">North Tower, Toronto, Canada</a>
        </p>
      </div>
      <div className="text-center md:text-left">
        <div className="w-14 h-14 m-auto md:ml-0 border-2 border-indigo-500 rounded-full flex justify-center items-center text-xl text-indigo-500 relative">
          <FaRegUserCircle />
          <span className="w-16 border-1 border-indigo-500 absolute left-full top-1/2 hidden md:block"></span>
        </div>
        <h4 className="text-xl italic text-indigo-500 font-semibold mt-3">Freelance</h4>
        <p className="text-sm tracking-wider mt-1">Available Right Now</p>
      </div>
      <div className="text-center md:text-left">
        <div className="w-14 h-14 m-auto md:ml-0 border-2 border-indigo-500 rounded-full flex justify-center items-center text-xl text-indigo-500 relative">
          <FiMail />
          <span className="w-16 border-1 border-indigo-500 absolute left-full top-1/2 hidden md:block"></span>
        </div>
        <h4 className="text-xl italic text-indigo-500 font-semibold mt-3">Email</h4>
        <p className="text-sm tracking-wider mt-1">
          <a href="mailto:nahid98learn@gmail.com">nahid98learn@gmail.com</a>
        </p>
      </div>
      <div className="text-center md:text-left">
        <div className="w-14 h-14 m-auto md:ml-0 border-2 border-indigo-500 rounded-full flex justify-center items-center text-xl text-indigo-500 relative">
          <FaAddressBook />
          <span className="w-16 border-1 border-indigo-500 absolute left-full top-1/2 hidden md:block"></span>
        </div>
        <h4 className="text-xl italic text-indigo-500 font-semibold mt-3">Phone</h4>
        <p className="text-sm tracking-wider mt-1">+44 098 764 234</p>
      </div>
    </div>
  );
}
