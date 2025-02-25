import React, { useState } from 'react';
import { Mail, Phone, Send, Calendar } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSchedule = () => {
    window.open('https://app.usemotion.com/meet/kevinotey/47t0n5svirtualstaffing', '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a U.S.-based workforce agency bridging the national worker
            shortage with skilled Virtual Assistants.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleSchedule}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
          >
            <Calendar className="size-4" />
            Schedule a Free Consultation
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>

              <p className="text-gray-600 mb-8">
                Independent and focused on your needs, we provide tailored solutions
                that work best for your business.
              </p>

              <ul className="space-y-6">
                <li>
                  <a
                    className="group flex items-center gap-4 hover:text-blue-600 transition-colors duration-200"
                    href="mailto:info@thevirtualstaffingsolution.com"
                  >
                    <div className="rounded-lg bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors duration-200">
                      <Mail className="size-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-600">
                      info@thevirtualstaffingsolution.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="group flex items-center gap-4 hover:text-blue-600 transition-colors duration-200"
                    href="tel:+254790555163"
                  >
                    <div className="rounded-lg bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors duration-200">
                      <Phone className="size-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-600">
                      +254 790 555 163
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can't make it to a call?
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    <Send className="size-4" />
                    Send inquiry
                  </button>
                  <span className="text-sm text-gray-500">or</span>
                  <button
                    type="button"
                    onClick={handleSchedule}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Schedule a call instead
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
