import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-4 2xl:pt-16 lg:px-8">
        <div className="mx-auto max-w-3xl py-24 sm:py-32 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Need custom components for your project?{" "}
              <a href="#" className="font-semibold text-yellow-500">
                <span aria-hidden="true" className="absolute inset-0" />
                Click here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The bridge between Designers and Developers
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              A game changer component and template library with extensive code
              overrides for all framer projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Button size="lg">Get started for free</Button>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Docs <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
