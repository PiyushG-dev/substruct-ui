"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { components_navigation } from "@/constants";
import { section_navigation } from "@/constants";

export default function Sidebar() {
  const pathname = usePathname();
  const active = "bg-primary/30";
  return (
    <div className="flex flex-col h-screen">
      {/* Sidebar Content */}
      <nav className="flex flex-col px-8 pt-10 pb-20 gap-3">
        <div className="flex flex-col gap-[.1rem]">
          <h3 className="font-semibold py-2 px-2">Individual</h3>
          {components_navigation.map((comp) => {
            return (
              <Link key={comp.id} href={comp.href}>
                <p
                  className={`${
                    pathname === comp.href ? active : ""
                  } text-sm rounded-lg w-60 transition-all duration-300 ${
                    pathname === comp.href ? "hover:bg-none" : "hover:bg-muted"
                  } py-2 px-2`}
                >
                  {comp.title}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-[.1rem]">
          <h3 className="font-semibold py-2 px-2">Sections</h3>
          {section_navigation.map((comp) => {
            return (
              <Link key={comp.id} href={comp.href}>
                <p
                  className={`${
                    pathname === comp.href ? active : ""
                  } text-sm rounded-lg w-60 transition-all duration-300 ${
                    pathname === comp.href ? "hover:bg-none" : "hover:bg-muted"
                  } py-2 px-2`}
                >
                  {comp.title}
                </p>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
