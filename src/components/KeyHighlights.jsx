import { Clock, Download, Users } from "lucide-react";

const highlights = [
  {
    title:
      "We handle your administrative tasks so you can focus on what truly matters.",
    icon: Download,
  },
  {
    title:
      "Our skilled virtual assistants provide reliable, professional support.",
    icon: Users,
  },
  {
    title: "Save time, reduce costs, and scale your business with ease.",
    icon: Clock,
  },
];

const KeyHighlights = () => (
  <section className="pt-10 md:pt-24">
    <div className="max-w-screen-xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-6">
      {highlights.map((highlight) => (
        <div
          key={highlight.title}
          className="flex items-start bg-white p-5 rounded-xl border border-gray-200 flex-1"
        >
          <highlight.icon className="text-gray-500 size-6 mr-4 flex-shrink-0" />
          <p className="text-gray-700 text-sm md:text-base">
            {highlight.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default KeyHighlights;
