import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={`flex flex-col h-screen transition-all duration-300`}>
      {/* Sidebar Content */}
      <nav className="flex flex-col px-8 py-4 space-y-2 gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold">Getting Started</h3>
          <Link href="/components/shiny-button">
            <p className="text-sm rounded-md hover:underline">Introduction</p>
          </Link>
          <Link href="/components/gradient-background">
            <p className="text-sm rounded-md hover:underline">Installation</p>
          </Link>
          <Link href="/components/gradient-background">
            <p className="text-sm rounded-md hover:underline">Dark mode</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold">Components</h3>
          <Link href="/components/shiny-button">
            <p className="text-sm rounded-md hover:underline">Shiny Button</p>
          </Link>
          <Link href="/components/gradient-background">
            <p className="text-sm rounded-md hover:underline">
              Gradient background
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
