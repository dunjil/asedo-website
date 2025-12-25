import Navigation from "./components/Navigation";
import Link from "next/link";
import Footer from "./components/Footer";

export default function AsedoWebsiteRedesignLofi() {
  const industries = [
    {
      title: "Upstream Development",
      image: "/industry-upstream-development.png",
    },
    {
      title: "Offshore Drilling & Marine Logistics",
      image: "/industry-offshore-drilling.png",
    },
    {
      title: "Refining & Processing",
      image: "/industry-refining-processing.png",
    },
    {
      title: "Gas & Power Infrastructure",
      image: "/industry-gas-power.png",
    },
    {
      title: "Nationwide Distribution Network",
      image: "/industry-distribution-network.png",
    },
    {
      title: "Procurement & Supply Chain Solutions",
      image: "/industry-supply-chain.png",
    },
  ];

  const values = [
    {
      title: "END-TO-END INTEGRATION",
      description:
        "From exploration to refining and nationwide distribution, we control every stage of the value chain for maximum efficiency and quality assurance.",
      colors: ["transparent", "transparent", "#0A1E3F", "transparent", "#00A89D", "transparent", "transparent", "transparent", "#E3A700"],
    },
    {
      title: "INDIGENOUS & SELF SUFFICIENT",
      description:
        "100% African-owned and fully asset-backed, we maintain strategic independence, ensuring profits and control remain within Africa.",
      colors: ["#E3A700", "transparent", "transparent", "transparent", "#0A1E3F", "transparent", "transparent", "transparent", "#00A89D"],
    },
    {
      title: "SCALABLE, MODULAR APPROACH",
      description:
        "Our infrastructure adapts to market demands with modular refineries and flexible logistics, expanding efficiently across domestic and regional markets.",
      colors: ["#00A89D", "transparent", "transparent", "transparent", "#E3A700", "transparent", "#0A1E3F", "transparent", "transparent"],
    },
  ];

  return (
    <div className="flex flex-col items-start min-w-screen min-h-screen overflow-auto">
      <Navigation currentPath="/" />

      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[700px] flex items-center overflow-hidden">
        <img
          src="/hero-sustainable-energy.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Sustainable Energy Solutions"
        />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-24">
          <div className="max-w-4xl">
            <h1 className="text-[#0A1E3F] font-montserrat text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6 md:mb-8">
              Powering Sustainable Energy Solutions
            </h1>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                href="/contact"
                className="flex py-3 px-6 md:px-8 justify-center items-center gap-3 bg-[#E3A700] hover:bg-[#d09900] transition-colors min-w-[140px]"
              >
                <span className="text-[#0A1E3F] font-openSans text-sm md:text-base lg:text-lg font-semibold leading-tight tracking-tight whitespace-nowrap">
                  CONTACT US
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                >
                  <path
                    d="M8 24L24 8M24 8H13.3333M24 8V18.6667"
                    stroke="#0A1E3F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/about-us"
                className="flex py-3 px-6 md:px-8 justify-center items-center gap-3 border border-[#A3B9D0] bg-[#AEC3D8] hover:bg-[#9eb3c8] transition-colors min-w-[140px]"
              >
                <span className="text-[#FFF] font-openSans text-sm md:text-base lg:text-lg font-semibold leading-tight tracking-tight whitespace-nowrap">
                  LEARN MORE
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                >
                  <path
                    d="M8 24L24 8M24 8H13.3333M24 8V18.6667"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve Section */}
      <div className="bg-[#FFF] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-8 md:mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border border-[#0A1E3F] bg-[#F5F5F5] overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={industry.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={industry.title}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-[#FFF] font-montserrat text-lg md:text-xl lg:text-2xl font-normal leading-tight tracking-tight">
                    {industry.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="bg-[#F5F5F5] flex items-center justify-center py-12 md:py-16 px-6 md:px-10 lg:px-16 md:w-1/3">
          <h2 className="text-[#00A89D] font-montserrat text-2xl md:text-4xl font-normal leading-tight tracking-tight text-center md:text-left">
            OUR PROMISE
          </h2>
        </div>
        <div className="bg-[#FFF] flex items-center justify-center py-12 md:py-16 px-6 md:px-10 lg:px-16 md:w-2/3">
          <p className="text-[#00A89D] font-montserrat text-xl md:text-2xl lg:text-3xl font-normal leading-tight tracking-tight max-w-4xl">
            Delivering reliable, innovative, and integrated energy solutions
            with integrity, safety, and operational excellence.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <img
          src="/team-offshore-engineer.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Our Team"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 to-white/20"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16">
          <div className="bg-[rgba(137,215,226,0.40)] backdrop-blur-sm p-8 md:p-10 max-w-3xl">
            <h2 className="text-[#FFF] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight mb-8">
              Discover the Leaders Who Are Transforming the Clean Energy
              Ecosystem
            </h2>
            <Link
              href="/about-us#team"
              className="inline-flex py-3 px-6 justify-center items-center gap-4 bg-[#D5E9EA] hover:bg-[#c5d9da] transition-colors"
            >
              <span className="text-[#00A89D] font-openSans text-base md:text-lg font-normal leading-tight tracking-tight">
                See Team
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M8 24L24 8M24 8H13.3333M24 8V18.6667"
                  stroke="#00A89D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-[#FFF] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex items-center gap-4 py-3">
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
              <p className="text-[#00A89D] font-openSans text-xs md:text-sm font-normal leading-tight uppercase">
                WHAT WE DO
              </p>
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            </div>
            <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-tight">
              We are dedicated to making clean energy accessible, affordable,
              and effective.
            </h2>
            <Link
              href="/about-us"
              className="inline-flex py-4 px-8 justify-center items-center gap-4 bg-[#00A89D] hover:bg-[#009890] transition-colors w-fit mt-4"
            >
              <span className="text-[#FFF] font-openSans text-base md:text-lg font-semibold leading-tight tracking-tight">
                About Us
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M8 24L24 8M24 8H13.3333M24 8V18.6667"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="relative h-64 md:h-80 overflow-hidden border border-[#000]">
              <img
                src="/team-research-breakthrough.png"
                className="w-full h-full object-cover"
                alt="Industrial Research"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/10 to-white/50"></div>
            </div>
            <div className="bg-[#00A89D] p-6 md:p-8 mt-0">
              <p className="text-[#FFF] font-openSans text-base md:text-lg lg:text-xl font-normal leading-tight tracking-tight mb-6">
                ASEDO was founded with a vision to drive sustainable energy
                solutions that empower individuals, businesses, and communities.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-4 text-[#FFF] opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="font-openSans text-base md:text-lg font-normal leading-tight tracking-tight">
                  Learn more
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M5.33331 16H26.6666M26.6666 16L18.6666 8M26.6666 16L18.6666 24"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#FFF] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 py-3 mb-6 md:mb-8">
            <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            <p className="text-[#00A89D] font-openSans text-xs md:text-sm font-normal leading-tight uppercase">
              WHY CHOOSE US
            </p>
            <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
          </div>
          <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-tight max-w-5xl">
            We deliver safe, reliable, and sustainable energy across Africa and
            beyond.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="border-2 border-[#000206] p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="flex flex-wrap gap-0 w-fit">
                {value.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-8 h-8 md:w-10 md:h-10"
                    style={{
                      backgroundColor: color === "transparent" ? "transparent" : color,
                      border: color !== "transparent" ? `1px solid ${color}` : "none",
                    }}
                  ></div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[#0A1E3F] font-montserrat text-lg md:text-xl font-normal leading-tight tracking-tight">
                  {value.title}
                </h3>
                <p className="text-[#4D5767] font-montserrat text-base md:text-lg font-normal leading-tight tracking-tight">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
