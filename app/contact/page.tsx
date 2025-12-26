"use client";

import Navigation from "../components/Navigation";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation currentPath="/contact" />

      {/* Hero Section */}
      <div className="w-full bg-[#0A1E3F] py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#FFF] font-montserrat text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-6 md:mb-8">
            Get in Touch
          </h1>
          <p className="text-[#F5F5F5] font-openSans text-base md:text-lg leading-relaxed max-w-3xl">
            At ASEDO Energy Group, we drive Africa's oil, gas, and power
            industries through world-class infrastructure and innovative
            solutions.
          </p>
          <div className="bg-[#00A89D] w-full max-w-2xl h-0.5 mt-10 md:mt-12"></div>
          <div className="mt-10 md:mt-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
              <p className="text-[#FFF] font-openSans text-xs md:text-sm font-normal leading-tight uppercase">
                CONTACT US
              </p>
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            </div>
            <h2 className="text-[#FFF] font-montserrat text-2xl md:text-3xl font-medium leading-tight tracking-tight">
              Send us a Message
            </h2>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full bg-[#FFF]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Decorative Image */}
          <div className="hidden lg:block bg-[#F5F5F5] min-h-[400px] lg:min-h-[600px] relative overflow-hidden">
            <img
              src="/contact-illustration.png"
              className="absolute inset-0 w-full h-full object-cover object-center"
              alt="Contact Us"
            />
          </div>

          {/* Form */}
          <div className="py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto lg:mx-0 space-y-8 md:space-y-10">
              {/* First Name */}
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="firstName"
                  className="text-[#000] font-openSans text-sm md:text-base font-normal leading-tight tracking-tight"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="flex py-3 px-4 items-center rounded-sm border border-[rgba(10,30,63,0.20)] w-full text-[#2F2F2F] font-openSans text-base font-normal leading-tight tracking-tight focus:outline-none focus:border-[#00A89D] transition-colors"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="lastName"
                  className="text-[#000] font-openSans text-sm md:text-base font-normal leading-tight tracking-tight"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="flex py-3 px-4 items-center rounded-sm border border-[rgba(10,30,63,0.20)] w-full text-[#2F2F2F] font-openSans text-base font-normal leading-tight tracking-tight focus:outline-none focus:border-[#00A89D] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="email"
                  className="text-[#000] font-openSans text-sm md:text-base font-normal leading-tight tracking-tight"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="flex py-3 px-4 items-center rounded-sm border border-[rgba(10,30,63,0.20)] w-full text-[#2F2F2F] font-openSans text-base font-normal leading-tight tracking-tight focus:outline-none focus:border-[#00A89D] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="message"
                  className="text-[#000] font-openSans text-sm md:text-base font-normal leading-tight tracking-tight"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type message"
                  required
                  rows={6}
                  className="flex py-3 px-4 items-start rounded-sm border border-[rgba(10,30,63,0.20)] w-full text-[#2F2F2F] font-openSans text-base font-normal leading-tight tracking-tight focus:outline-none focus:border-[#00A89D] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex py-4 px-8 justify-center items-center gap-2.5 rounded-sm bg-[#00A89D] hover:bg-[#009890] transition-colors w-full md:w-auto md:min-w-[200px]"
              >
                <span className="text-[#FFF] font-openSans text-sm md:text-base font-normal leading-tight tracking-tight">
                  SEND
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full bg-[#F5F5F5] py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Office Location */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 flex-shrink-0 mt-1 text-[#00A89D]"
                >
                  <path
                    d="M21.3333 17.8326C26.0424 18.7585 29.3333 20.873 29.3333 23.3333C29.3333 26.647 23.3638 29.3333 16 29.3333C8.63619 29.3333 2.66666 26.647 2.66666 23.3333C2.66666 20.873 5.95758 18.7585 10.6667 17.8326M16 22.6667V12M16 12C18.2091 12 20 10.2091 20 8C20 5.79086 18.2091 4 16 4C13.7909 4 12 5.79086 12 8C12 10.2091 13.7909 12 16 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="text-[#000] font-montserrat text-lg md:text-xl font-medium leading-tight tracking-tight mb-4">
                    Office Address
                  </h3>
                  <p className="text-[#000206] font-openSans text-base font-normal leading-relaxed tracking-tight">
                    Plot 281 Trans-Amadi Industrial Layout Rd, Trans Amadi, Port
                    Harcourt, Rivers
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 flex-shrink-0 mt-1 text-[#00A89D]"
                >
                  <path
                    d="M5.33334 5.33301H26.6667C28.1334 5.33301 29.3333 6.53301 29.3333 7.99967V23.9997C29.3333 25.4663 28.1334 26.6663 26.6667 26.6663H5.33334C3.86668 26.6663 2.66668 25.4663 2.66668 23.9997V7.99967C2.66668 6.53301 3.86668 5.33301 5.33334 5.33301Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.3333 8L16 17.3333L2.66668 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="text-[#000] font-montserrat text-lg md:text-xl font-medium leading-tight tracking-tight mb-4">
                    Email
                  </h3>
                  <a
                    href="mailto:info@asedoenergy.com"
                    className="text-[#000206] font-openSans text-base font-normal leading-relaxed tracking-tight hover:text-[#00A89D] transition-colors"
                  >
                    info@asedoenergy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 flex-shrink-0 mt-1 text-[#00A89D]"
                >
                  <path
                    d="M29.3333 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7430 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2267C22.3239 28.7808 18.3827 27.3788 14.92 25.1333C11.6985 23.0862 8.96719 20.3549 6.92001 17.1333C4.66668 13.6549 3.26382 9.69463 2.82668 5.57334C2.79342 5.20459 2.83724 4.83298 2.95556 4.48213C3.07387 4.13128 3.26403 3.80889 3.51407 3.53557C3.76412 3.26226 4.06856 3.04375 4.40763 2.89468C4.74671 2.74561 5.11333 2.66916 5.48401 2.66667H9.48401C10.1271 2.66029 10.7515 2.8894 11.2445 3.31134C11.7375 3.73328 12.0656 4.31923 12.1707 4.96C12.3680 6.24006 12.7094 7.49695 13.1893 8.70667C13.3702 9.18387 13.4075 9.70252 13.2972 10.1994C13.1869 10.6962 12.9335 11.1506 12.5667 11.5067L10.8933 13.18C12.8046 16.5165 15.4835 19.1954 18.82 21.1067L20.4933 19.4333C20.8494 19.0665 21.3039 18.8132 21.8007 18.7029C22.2975 18.5926 22.8162 18.6299 23.2933 18.8107C24.5031 19.2906 25.7599 19.632 27.04 19.8293C27.6878 19.9349 28.2793 20.2688 28.7021 20.77C29.125 21.2713 29.3496 21.9061 29.3333 22.56Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="text-[#000] font-montserrat text-lg md:text-xl font-medium leading-tight tracking-tight mb-4">
                    Phone
                  </h3>
                  <a
                    href="tel:+2348012345678"
                    className="text-[#000206] font-openSans text-base font-normal leading-relaxed tracking-tight hover:text-[#00A89D] transition-colors"
                  >
                    +234 801 234 5678
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
