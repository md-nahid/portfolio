export default function Title({ text }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-5xl lg:text-7xl uppercase font-bold text-indigo-700 pt-6 drop-shadow-lg text-center">
        {text}
      </h2>
      <div className="flex justify-center items-center mt-2">
        <span className="w-5 h-[2px] bg-indigo-700 sm:w-16 sm:h-1"></span>
        <span className="w-3 h-3 sm:w-5 sm:h-5 border-2 sm:border-4 border-indigo-700 mx-3 sm:mx-5 animate-spin-slow"></span>
        <span className="w-5 h-[2px] bg-indigo-700 sm:w-16 sm:h-1"></span>
      </div>
    </div>
  );
}
