export default function SocialMedia({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 border-1 border-slate-500 rounded-full flex justify-center items-center hover:bg-slate-500 transition"
    >
      {text}
    </button>
  );
}
