export default function Skillcard({ title, number, text }) {
  return (
    <div className="p-3 xl:p-5 pb-8 rounded shadow">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-bold capitalize">{title}</h4>
        <p className="font-semibold text-green-600 text-lg">
          {number} <span className="text-indigo-500">%</span>
        </p>
      </div>
      <p className="text-base font-light leading-7 mt-5">{text}</p>
      <div className=" bg-slate-900 mt-10 rounded-full flex items-center p-1">
        <div
          className="bg-yellow-500 h-1 block rounded-full relative"
          style={{ width: `${number}%` }}
        >
          <span className="block absolute right-0 bottom-0 translate-x-1/2 w-6 h-6 bg-slate-900 rounded-full border-4 border-yellow-400"></span>
        </div>
      </div>
    </div>
  );
}
