const OurWork = () => {
  const options = [
    {
      title: "Part-Time",
      description: "Occasional support when you need it most",
      icon: "⏲️",
    },
    {
      title: "Full-Time",
      description: "Dedicated long-term assistance",
      icon: "📅",
    },
    {
      title: "Affordable",
      description: "Premium quality service at competitive rates",
      icon: "💎",
    },
    {
      title: "Customizable",
      description: "Tailored solutions that adapt to your needs",
      icon: "🎯",
    },
  ];

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 lg:py-24">
          <h2
            className="
         text-2xl font-bold text-gray-900 md:text-3xl"
          >
            Our Services
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-4 text-sm md:text-base">
            We offer part-time and full-time packages at competitive rates,
            tailored to your unique business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-16">
            {options.map((option) => (
              <div
                key={option.title}
                className="group relative rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div className="relative overflow-hidden rounded-xl p-6">
                  <span className="text-[1.8rem] mb-4 text-center">
                    {option.icon}
                  </span>
                  <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
                    <a href="/">
                      <span className="absolute -inset-px rounded-xl"></span>
                      {option.title}
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
