import Meta from "../Meta";

export default function Layout({ children, footer }) {
  return (
    <div className="bg-slate-100">
      <Meta />
      <main className="min-h-screen max-w-screen-4xl w-full m-auto">{children}</main>
    </div>
  );
}
