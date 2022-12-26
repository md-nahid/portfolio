import toast from "react-hot-toast";

export default function CopyBtn({ copyItem }) {
  function handleClick() {
    if (copyItem) {
      navigator.clipboard.writeText(copyItem);
      toast.success("Successfully Copied!");
    } else {
      toast.error("Nothing to copy!");
    }
  }
  return (
    <button
      onClick={handleClick}
      className="text-xs px-2 py-2 sm:px-3 border-1 border-slate-500 rounded-full flex justify-center items-center hover:bg-slate-500 transition"
    >
      Copy Link
    </button>
  );
}
