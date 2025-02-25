import heroImage from "../../public/headerimage@1x.png";

const Hero = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900/65"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-start">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Virtual Staffing
              <strong className="block font-extrabold text-blue-500">
                Solution
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Connecting businesses with top-tier remote professionals to
              streamline operations and enhance productivity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded-lg bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Get In Touch
              </a>

              <a
                href="#"
                className="block w-full rounded-lg bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow-sm hover:text-blue-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
