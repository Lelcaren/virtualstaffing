import React from 'react';
import { 
  Layers2, 
  Calendar, 
  Globe2, 
  FileSpreadsheet, 
  Plane, 
  ClipboardList, 
  Database, 
  Search, 
  BarChart3 
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, classNames }) => (
  <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 p-6">
    <div className={`w-fit rounded-xl mb-4 p-3 transition-all duration-300 group-hover:scale-110 ${classNames}`}>
      <Icon className="size-8" />
    </div>
    <div className="relative z-10">
      <h2 className="font-display text-lg font-semibold text-slate-900 group-hover:text-slate-800">
        {title}
      </h2>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Layers2,
      title: "Executive Assistance",
      description: "Professional administrative support for executives, including scheduling, email management, and task coordination.",
      classNames: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: FileSpreadsheet,
      title: "Bookkeeping",
      description: "Keep your finances in order with our reliable bookkeeping services, including expense tracking, invoicing, and financial record management.",
      classNames: "bg-blue-100 text-blue-700",
    },
    {
      icon: Globe2,
      title: "Social Media Management & Website Creation",
      description: "Comprehensive support for executives and businesses, from admin tasks to social media and website management—so you can focus on what matters most.",
      classNames: "bg-purple-100 text-purple-700",
    },
    {
      icon: ClipboardList,
      title: "Meeting Minutes",
      description: "We capture clear, concise, and well-structured meeting minutes, ensuring key discussions, decisions, and action points are accurately recorded and easily accessible.",
      classNames: "bg-indigo-100 text-indigo-700",
    },
    {
      icon: Plane,
      title: "Travel Arrangements",
      description: "From flights to accommodations, our virtual assistants handle all your travel logistics—ensuring seamless, stress-free trips with well-organized itineraries.",
      classNames: "bg-cyan-100 text-cyan-700",
    },
    {
      icon: Calendar,
      title: "Manage Calendars",
      description: "Stay organized and never miss an appointment—our virtual assistants manage your calendar, schedule meetings, and send reminders efficiently.",
      classNames: "bg-rose-100 text-rose-700",
    },
    {
      icon: Database,
      title: "Data Entry",
      description: "Accurate and efficient data entry services to keep your records organized, up-to-date, and easily accessible.",
      classNames: "bg-amber-100 text-amber-700",
    },
    {
      icon: Search,
      title: "Research",
      description: "Providing in-depth research to support informed decision-making. Whether it's market analysis, industry trends, or data gathering, we deliver accurate and reliable insights.",
      classNames: "bg-teal-100 text-teal-700",
    },
    {
      icon: BarChart3,
      title: "Reports",
      description: "Get accurate, well-structured reports to track performance, analyze data, and make informed business decisions.",
      classNames: "bg-violet-100 text-violet-700",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50/50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We offer part-time and full-time packages at competitive rates,
            tailored to your unique business needs.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
