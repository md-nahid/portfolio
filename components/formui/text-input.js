import { AiFillStar } from "react-icons/ai";

export default function Textinput({
  title,
  type,
  required,
  invalid,
  invalidtext,
  placeholder,
  value,
  onChange,
}) {
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
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-3 border-2 border-indigo-600 rounded-full focus:border-yellow-400 outline-none mt-2"
      />
      {invalid && (
        <p className="pl-5 text-xs text-red-500 mt-2 font-semibold tracking-wider">{invalidtext}</p>
      )}
    </div>
  );
}
