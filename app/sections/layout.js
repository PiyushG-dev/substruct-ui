import Sidebar from "@/components/Sidebar";

export default function componentsLayout({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto flex items-start">
      <Sidebar />
      {children}
    </div>
  );
}
