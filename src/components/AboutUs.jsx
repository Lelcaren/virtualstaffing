import React from 'react';
import { Activity, BookCheck, BriefcaseBusiness, CheckCircle2, Clock, DollarSign } from "lucide-react";

const AdvantageCard = ({ icon: Icon, name }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
    <div className="p-2 rounded-lg bg-blue-50">
      <Icon className="size-5 text-blue-600" />
    </div>
    <span className="text-gray-800 font-medium">{name}</span>
  </div>
);

const AboutUs = () => {
  const advantages = [
    { 
      name: "Highly educated",
      icon: BookCheck,
      description: "Our team consists of skilled professionals with strong educational backgrounds"
    },
    { 
      name: "Professional",
      icon: BriefcaseBusiness,
      description: "We maintain the highest standards of business ethics and professionalism"
    },
    { 
      name: "Highly motivated",
      icon: Activity,
      description: "Dedicated to delivering exceptional results and exceeding expectations"
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Focus on core business activities while we handle administrative tasks"
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Flexible solutions that fit your budget and business needs"
    },
    {
      icon: CheckCircle2,
      title: "Quality Assured",
      description: "Consistent, high-quality support from our skilled team"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                About Us
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p className="leading-relaxed">
                  We are a US based company serving as a workforce agency addressing
                  the national worker shortage through virtual assistants.
                </p>
                <p className="leading-relaxed">
                  Delegate your administrative work and save time and money.
                </p>
                <p className="leading-relaxed">
                  We offer part time and full time solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-green-50">
                    <benefit.icon className="size-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:sticky lg:top-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Our virtual assistants are:
              </h3>
              <div className="grid gap-4">
                {advantages.map((advantage) => (
                  <div key={advantage.name} className="group">
                    <AdvantageCard {...advantage} />
                    <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;