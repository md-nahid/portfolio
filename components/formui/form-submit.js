export default function FormSubmit({ onClick }) {
  return (
    <div className="md:max-w-[12rem] w-full ml-auto">
      <button
        onClick={onClick}
        className="w-full p-3 md:py-4 bg-indigo-500 text-xl font-semibold text-white uppercase tracking-wider rounded-full hover:bg-indigo-600 hover:shadow-xl"
      >
        Submit
      </button>
    </div>
  );
}
