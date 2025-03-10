import React from 'react';
import { Clock, CalendarDays, Diamond, Target } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
    <div className="p-8">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="size-6 text-blue-600" />
        </div>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50/50 to-purple-50/50 absolute -right-12 -top-12 group-hover:scale-150 transition-transform duration-500" />
      </div>
      
      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {title}
      </h3>
      
      <p className="mt-3 text-slate-600 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-6 flex items-center">
        <button className="text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
          Learn more →
        </button>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  </div>
);

const OurWork = () => {
  const services = [
    {
      title: "Part-Time Support",
      description: "Flexible assistance when you need it most. Perfect for small businesses and entrepreneurs looking to scale efficiently.",
      icon: Clock,
    },
    {
      title: "Full-Time Dedication",
      description: "Comprehensive, dedicated support for businesses requiring constant administrative assistance and project management.",
      icon: CalendarDays,
    },
    {
      title: "Premium Quality",
      description: "Top-tier virtual assistance services at competitive rates, ensuring excellent value for your investment.",
      icon: Diamond,
    },
    {
      title: "Customized Solutions",
      description: "Tailored service packages that adapt to your specific business needs and growth objectives.",
      icon: Target,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our work
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We offer flexible packages at competitive rates,
            perfectly tailored to your unique business requirements.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;