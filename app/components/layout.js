import Sidebar from "@/components/Sidebar";

export default function componentsLayout({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto flex items-start">
      <Sidebar />
      <div className="pt-10 pb-20 flex flex-col gap-10 pr-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl tracking-tight font-medium text-foreground/70">
            High Fidelity Framer Components and Layouts
          </h1>
          <p className="text-foreground/50">
            Copy and paste components, layouts and code components in 2 simple
            clicks
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
