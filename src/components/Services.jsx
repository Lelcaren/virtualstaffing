import { Layers2 } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, classNames }) => (
  <div className="group relative overflow-hidden rounded-xl border border-slate-200 p-6">
    <div
      className={`w-fit rounded-xl text-[1.8rem] mb-4 text-center p-3 ${classNames}`}
    >
      <Icon />
    </div>
    <h2 className="mt-6 font-display text-base font-semibold text-slate-700">
      {title}
    </h2>
    <p className="mt-2.5 text-sm text-slate-500">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Layers2,
      title: "Executive Assistance",
      description:
        "Professional administrative support for executives, including scheduling, email management, and task coordination.",
      classNames: "bg-green-200 text-green-800",
    },
    {
      icon: Layers2,
      title: "Bookkeeping",
      description:
        "Keep your finances in order with our reliable bookkeeping services, including expense tracking, invoicing, and financial record management.",
      classNames: "bg-green-200 text-green-800",
    },
    {
      icon: Layers2,
      title: "Social Media Management & Website Creation",
      description:
        "Comprehensive support for executives and businesses, from admin tasks to social media and website management—so you can focus on what matters most.",
      classNames: "bg-green-200 text-green-800",
    },
    {
      icon: Layers2,
      title: "Meeting Minutes",
      description:
        "We capture clear, concise, and well-structured meeting minutes, ensuring key discussions, decisions, and action points are accurately recorded and easily accessible.",
      classNames: "bg-indigo-200 text-indigo-800",
    },
    {
      icon: Layers2,
      title: "Travel Arrangements",
      description:
        "From flights to accommodations, our virtual assistants handle all your travel logistics—ensuring seamless, stress-free trips with well-organized itineraries.",
      classNames: "bg-green-200 text-green-800",
    },
    {
      icon: Layers2,
      title: "Manage Calendars",
      description:
        "Stay organized and never miss an appointment—our virtual assistants manage your calendar, schedule meetings, and send reminders efficiently.",
      classNames: "bg-green-200 text-green-800",
    },
    {
      icon: Layers2,
      title: "Data Entry",
      description:
        "Accurate and efficient data entry services to keep your records organized, up-to-date, and easily accessible.",
      classNames: "bg-green-200 text-green-800",
    },
    {
      icon: Layers2,
      title: "Research",
      description:
        "Providing in-depth research to support informed decision-making. Whether it's market analysis, industry trends, or data gathering, we deliver accurate and reliable insights.",
      classNames: "bg-green-200 text-green-800",
    },
    {
      icon: Layers2,
      title: "Reports",
      description:
        "Get accurate, well-structured reports to track performance, analyze data, and make informed business decisions.",
      classNames: "bg-green-200 text-green-800",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Our Services
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-4 text-sm md:text-base">
          We offer part-time and full-time packages at competitive rates,
          tailored to your unique business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-16 overflow-hidden gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
