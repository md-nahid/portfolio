export default function QuickView({ text, onClick }) {
  return (
    <button
      className=" text-white font-semibold text-sm bg-indigo-700 px-4 py-2 rounded-full scale-0 group-hover:transition-all group-hover:duration-300 group-hover:scale-100 hover:bg-indigo-600 tracking-wider"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
