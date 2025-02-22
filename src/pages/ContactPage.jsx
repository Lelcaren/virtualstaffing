import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="md:text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Contact Form
          </h2>
          <p className="md:text-center text-gray-600 mt-2 sm:mt-4 text-sm md:text-base">
            We are a U.S.-based workforce agency bridging the national worker
            shortage with skilled Virtual Assistants.
          </p>

          <div className="mt-10 md:mt-16 overflow-hidden grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="max-w-xl text-gray-600 text-sm md:text-base">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <ul className="mt-8 space-y-4 text-sm md:text-base">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5"
                    href="mailto:info@thevirtualstaffingsolution.com"
                  >
                    <Mail className="size-5 shrink-0 text-gray-900" />

                    <span className="flex-1 text-gray-700">
                      info@thevirtualstaffingsolution.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5"
                    href="tel:+254790555163"
                  >
                    <Phone className="size-5 shrink-0 text-gray-900" />

                    <span className="flex-1 text-gray-700">
                      +254 790 555 163
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5">
                  <MapPin className="size-5 shrink-0 text-gray-900" />

                  <address className="-mt-0.5 flex-1 text-gray-700 not-italic">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-white p-3 shadow-sm lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="mt-2 w-full rounded-lg border-gray-300 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div>
                  <label className="" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="mt-2 w-full rounded-lg border-gray-300 p-3 text-sm"
                    placeholder="Subject"
                    type="text"
                    id="subject"
                  />
                </div>

                <div>
                  <label className="" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="mt-2 w-full rounded-lg border-gray-300 p-3 text-sm"
                    placeholder="Email Address"
                    type="text"
                    id="email"
                  />
                </div>

                <div>
                  <label className="" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="mt-2 w-full rounded-lg border-gray-300 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-blue-600 text-white px-4 py-2.5 font-medium sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
