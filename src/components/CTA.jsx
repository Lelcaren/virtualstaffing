import { MoveRight } from "lucide-react";

const CTA = () => (
  <>
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Sign up for our newsletter
          </h2>

          <p className="hidden text-gray-600 sm:mt-4 sm:block">
            Stay informed with our latest insights and updates.Join our growing
            community today!
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1o">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full shadow-2xl shadow-blue-500/20 rounded-md border-slate-200 bg-white px-4 py-2.5 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Sign Up </span>

              <MoveRight className="size-5" />
            </button>
          </form>

          <p className="text-gray-500 mt-4 text-sm text-[0.85rem]">
            We value your privacy. Your information is safe with us and you can
            unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default CTA;
