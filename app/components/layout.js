import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function componentsLayout({ children }) {
  return (
    <div className="flex items-start">
      <Sidebar />
      {children}
    </div>
  );
}
