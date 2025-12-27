import Navigation from "./components/Navigation";
import Link from "next/link";
import Footer from "./components/Footer";
import ShapeFutureCTA from "./components/ShapeFutureCTA";

export default function AsedoWebsiteRedesignLofi() {
  const industries = [
    {
      title: "Upstream Development",
      image: "/industries/upstream-development.png",
    },
    {
      title: "Offshore Drilling & Marine Logistics",
      image: "/industries/offshore-drilling.png",
    },
    {
      title: "Refining & Processing",
      image: "/industries/refining-processing.png",
    },
    {
      title: "Gas & Power Infrastructure",
      image: "/industries/gas-power.png",
    },
    {
      title: "Nationwide Distribution Network",
      image: "/industries/distribution-network.png",
    },
    {
      title: "Procurement & Supply Chain Solutions",
      image: "/industries/supply-chain.png",
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
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation currentPath="/" />

      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[700px] flex items-center overflow-hidden">
        <img
          src="/heroes/home-hero.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Sustainable Energy Solutions"
        />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-24">
          <div className="max-w-4xl">
            <h1 className="text-[#0A1E3F] font-montserrat text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-6 md:mb-8">
              Powering Sustainable Energy Solutions
            </h1>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                href="/contact"
                className="flex py-3 px-6 md:px-8 justify-center items-center gap-3 bg-[#E3A700] hover:bg-[#d09900] transition-colors min-w-[140px]"
              >
                <span className="text-[#0A1E3F] font-openSans text-sm md:text-base font-semibold leading-tight tracking-tight whitespace-nowrap">
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
                <span className="text-[#FFF] font-openSans text-sm md:text-base font-semibold leading-tight tracking-tight whitespace-nowrap">
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
        <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight mb-8 md:mb-12">
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
                  <h3 className="text-[#FFF] font-montserrat text-lg md:text-xl font-normal leading-tight tracking-tight">
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
          <h2 className="text-[#00A89D] font-montserrat text-2xl md:text-3xl font-normal leading-tight tracking-tight text-center md:text-left">
            OUR PROMISE
          </h2>
        </div>
        <div className="bg-[#FFF] flex items-center justify-center py-12 md:py-16 px-6 md:px-10 lg:px-16 md:w-2/3">
          <p className="text-[#00A89D] font-montserrat text-lg md:text-xl font-normal leading-tight tracking-tight max-w-4xl">
            Delivering reliable, innovative, and integrated energy solutions
            with integrity, safety, and operational excellence.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <img
          src="/team/home-team-section.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Our Team"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 to-white/20"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16">
          <div className="bg-[rgba(137,215,226,0.40)] backdrop-blur-sm p-8 md:p-10 max-w-3xl">
            <h2 className="text-[#FFF] font-montserrat text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-8">
              Discover the Leaders Who Are Transforming the Clean Energy
              Ecosystem
            </h2>
            <Link
              href="/about-us#team"
              className="inline-flex py-3 px-6 justify-center items-center gap-4 bg-[#D5E9EA] hover:bg-[#c5d9da] transition-colors"
            >
              <span className="text-[#00A89D] font-openSans text-sm md:text-base font-normal leading-tight tracking-tight">
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
      <div className="bg-[#FFF] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
        <img
          src="/backgrounds/home-what-we-do-pattern.png"
          className="absolute right-0 bottom-0 w-auto h-full object-contain opacity-60 pointer-events-none"
          alt="Background Pattern"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 relative z-10">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex items-center gap-4 py-3">
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
              <p className="text-[#00A89D] font-openSans text-xs md:text-sm font-normal leading-tight uppercase">
                WHAT WE DO
              </p>
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            </div>
            <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl font-normal leading-tight tracking-tight">
              We are dedicated to making clean energy accessible, affordable,
              and effective.
            </h2>
            <Link
              href="/about-us"
              className="inline-flex py-4 px-8 justify-center items-center gap-4 bg-[#00A89D] hover:bg-[#009890] transition-colors w-fit mt-4"
            >
              <span className="text-[#FFF] font-openSans text-sm md:text-base font-semibold leading-tight tracking-tight">
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
                src="/team/home-what-we-do.png"
                className="w-full h-full object-cover"
                alt="Industrial Research"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/10 to-white/50"></div>
            </div>
            <div className="bg-[#00A89D] p-6 md:p-8 mt-0">
              <p className="text-[#FFF] font-openSans text-base md:text-lg font-normal leading-tight tracking-tight mb-6">
                ASEDO was founded with a vision to drive sustainable energy
                solutions that empower individuals, businesses, and communities.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-4 text-[#FFF] opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="font-openSans text-sm md:text-base font-normal leading-tight tracking-tight">
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
          <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl font-normal leading-tight tracking-tight max-w-5xl">
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
                <p className="text-[#4D5767] font-montserrat text-base font-normal leading-tight tracking-tight">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Numbers Section */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="bg-[#00A89D] w-full md:w-1/2 py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">
          <img
            src="/backgrounds/home-our-numbers-bg.png"
            className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
            alt="Our Numbers Background"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[#0A1E3F] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                Our Numbers
              </h2>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12">
                <path d="M8 24H40M40 24L28 12M40 24L28 36" stroke="#0A1E3F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#0A1E3F] w-full md:w-1/2 py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="flex flex-col gap-2">
              <p className="text-[#00A89D] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                10+
              </p>
              <p className="text-[#00A89D] font-openSans text-sm md:text-base font-normal leading-tight">
                Years Of Experience
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#00A89D] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                4
              </p>
              <p className="text-[#00A89D] font-openSans text-sm md:text-base font-normal leading-tight">
                Countries
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#00A89D] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                15+
              </p>
              <p className="text-[#00A89D] font-openSans text-sm md:text-base font-normal leading-tight">
                Services Offered
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#00A89D] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                5
              </p>
              <p className="text-[#00A89D] font-openSans text-sm md:text-base font-normal leading-tight">
                Operational Divisions
              </p>
            </div>
          </div>
          <div className="border-t-2 border-[#31871B] pt-12">
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-2">
                <p className="text-[#31871B] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                  20M
                </p>
                <p className="text-[#31871B] font-openSans text-xs md:text-sm font-normal leading-tight">
                  Annual Production Capacity Target (Crude & Gas)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#31871B] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                  49%
                </p>
                <p className="text-[#31871B] font-openSans text-xs md:text-sm font-normal leading-tight">
                  Projected Fleet & Equipment Growth by 2026
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#31871B] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                  500+
                </p>
                <p className="text-[#31871B] font-openSans text-xs md:text-sm font-normal leading-tight">
                  Served clients
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#31871B] font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                  25k
                </p>
                <p className="text-[#31871B] font-openSans text-xs md:text-sm font-normal leading-tight">
                  Tonnes Processing Capacity (Refining & Gas)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights & Updates Section */}
      <div className="bg-[#FFF] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 1145 1031" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="990.096" cy="632.86" rx="785.661" ry="793.91" transform="rotate(72.8705 990.096 632.86)" fill="url(#paint0_linear)" fillOpacity="0.6" />
            <defs>
              <linearGradient id="paint0_linear" x1="1516.73" y1="-115.993" x2="448.109" y2="529.497" gradientUnits="userSpaceOnUse">
                <stop stopColor="#80FFF7" />
                <stop offset="1" stopColor="#FAFFFF" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 py-3">
                <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
                <p className="text-[#00A89D] font-openSans text-xs md:text-sm font-normal leading-tight uppercase">
                  OUR BLOGS
                </p>
                <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
              </div>
              <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
                Insights & Updates
              </h2>
            </div>
            <Link href="/blog" className="text-[#0A1E3F] font-openSans text-base md:text-lg font-normal hover:text-[#00A89D] transition-colors">
              View all Blogs
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            <div className="flex flex-col gap-6">
              <div className="w-full h-64 md:h-72 overflow-hidden">
                <img
                  src="/blog/partnership-news-cement.png"
                  className="w-full h-full object-cover"
                  alt="Partnership News"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="bg-[#000206] text-[#FFF] font-openSans text-sm md:text-base font-semibold py-2 px-4">
                    Partnership News
                  </span>
                  <span className="text-[#000206] font-openSans text-sm md:text-base font-normal opacity-50">
                    17 mins read
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#00A89D] font-openSans text-lg md:text-xl font-semibold leading-tight tracking-tight">
                    ASEDO ENERGY and Its Partners set to transform with fully licensed cement megaproject
                  </h3>
                  <p className="text-[#000206] font-openSans text-base font-normal leading-tight tracking-tight opacity-50 line-clamp-3">
                    Asedo Energy Group, in collaboration with its regional and technical partners, has officially secured all regulatory approvals for a fully licensed cement manufacturing and mining complex in Kebbi State, Northwest Nigeria.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-full h-64 md:h-72 overflow-hidden">
                <img
                  src="/blog/industry-insights-interactive-tech.png"
                  className="w-full h-full object-cover"
                  alt="Oil & Gas News"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="bg-[#000206] text-[#FFF] font-openSans text-sm md:text-base font-semibold py-2 px-4">
                    Oil & Gas News
                  </span>
                  <span className="text-[#000206] font-openSans text-sm md:text-base font-normal opacity-50">
                    7 mins read
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#00A89D] font-openSans text-lg md:text-xl font-semibold leading-tight tracking-tight">
                    Interactive technologies in factories and plants
                  </h3>
                  <p className="text-[#000206] font-openSans text-base font-normal leading-tight tracking-tight opacity-50 line-clamp-3">
                    Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book et iusto odio dignissimos ducimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact is Growing Across Nigeria Section */}
      <div className="flex flex-col w-full bg-[#FFF]">
        <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4 py-3">
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
              <p className="text-[#00A89D] font-openSans text-xs md:text-sm font-normal leading-tight uppercase">
                LOCATIONS
              </p>
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            </div>
            <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
              Our impact is growing across Nigeria.
            </h2>
          </div>
        </div>
        <div className="bg-[#FFF] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center">
          <div className="relative w-[85%]">
            <img
              src="/maps/nigeria.png"
              className="w-full h-auto"
              alt="Nigeria Map"
            />
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-[#00A89D] font-openSans text-base md:text-lg font-normal bg-white/90 px-3 py-1 rounded">
                Ogun
              </p>
            </div>
            <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-[#00A89D] font-openSans text-base md:text-lg font-normal bg-white/90 px-3 py-1 rounded">
                Lagos
              </p>
            </div>
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <p className="text-[#00A89D] font-openSans text-base md:text-lg font-normal bg-white/90 px-3 py-1 rounded">
                Rivers
              </p>
            </div>
          </div>
        </div>
      </div>

      <ShapeFutureCTA />

      <Footer />
    </div>
  );
}
