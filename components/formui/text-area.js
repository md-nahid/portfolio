import { AiFillStar } from "react-icons/ai";

export default function Textarea({ title, required, invalid, invalidtext, value, onChange }) {
  return (
    <div>
      <p className="text-base font-medium pl-5">
        {title}
        {required && (
          <span className="inline-block text-xs ml-2 text-red-500">
            <AiFillStar />
          </span>
        )}
      </p>
      <textarea
        value={value}
        onChange={onChange}
        className="w-full px-5 py-3 border-2 border-indigo-600 rounded-xl focus:border-yellow-400 outline-none mt-2 resize-none min-h-[10rem]"
      ></textarea>

      {invalid && (
        <p className="pl-5 text-xs text-red-500 mt-2 font-semibold tracking-wider">{invalidtext}</p>
      )}
    </div>
  );
}
