import { Activity, BookCheck, BriefcaseBusiness } from "lucide-react";

const AboutUs = () => {
  const advantages = [
    { name: "Highly educated", icon: BookCheck },
    { name: "Professional", icon: BriefcaseBusiness },
    { name: "Highly motivated", icon: Activity },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 lg:py-24">
        <div className="lg:w-1/4 sm:w-full">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            About Us
          </h2>
        </div>

        <div className="mt-10 md:mt-16 space-y-6 text-slate-700">
          <div className="space-y-4 *:leading-relaxed">
            <p>
              We are a US based company serving as a workforce agency addressing
              the national worker shortage through virtual assistants.
            </p>

            <p>Delegate your administrative work and save time and money.</p>

            <p>We offer part time and full time solutions.</p>
          </div>
          <h3 className="mb-4 mt-4">Our virtual assistants are:</h3>

          <ul className="max-w-xs flex flex-col">
            {advantages.map((advantage) => (
              <li
                key={advantage.name}
                className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
              >
                <advantage.icon className="shrink-0 size-4" />
                {advantage.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
