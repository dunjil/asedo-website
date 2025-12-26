import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutUs() {
  const stats = [
    { value: "10+", label: "Years Of Experience" },
    { value: "4", label: "Countries" },
    { value: "15+", label: "Services Offered" },
    { value: "500+", label: "Served clients" },
  ];

  const journeySteps = [
    { year: "2012", title: "Journey Was Started", description: "ASEDO’s story began in Rivers State, Nigeria, as a construction and logistics company, delivering infrastructure works for the Rivers State Government. Our core services included sand supply, construction equipment leasing, and civil works execution.", image: "/images/about-us/Frame162.png", align: "left" },
    { year: "2014", title: "Expansion into Lagos", description: "We expanded into Lagos, establishing dredging operations at Addo Road, Ajah, while scaling our logistics and equipment supply services to meet growing demand across Southwest Nigeria.", image: "/images/about-us/Frame162(1).png", align: "right" },
    { year: "2015", title: "Entry into Oil & Gas", description: "ASEDO entered the oil and gas sector, supporting industry leaders including Total E&P (now TotalEnergies), ExxonMobil, Saipem, and others. Our services grew to include oilfield logistics, equipment supply, and support operations across Nigeria’s upstream sector.", image: "/images/about-us/Frame162(2).png", align: "left" },
    { year: "2018", title: "From Builders to Energy Leaders", description: "A strategic shift saw ASEDO consolidate its energy operations, transitioning from a construction-focused firm to a diversified energy logistics and services company.", image: "/images/about-us/Frame162(3).png", align: "right" },
    { year: "2020", title: "Infrastructure Investment", description: "With investments in coastal logistics, crude transport, and modular refining infrastructure, ASEDO deepened its presence across the oil and gas value chain, preparing for large-scale operations in refining and terminal management.", image: "/images/about-us/Frame162(4).png", align: "left" },
    { year: "2024", title: "The Birth of Asedo Energy Group", description: "ASEDO officially rebranded as ASEDO Energy Group, unifying its upstream, midstream, and downstream operations. This milestone marked our evolution into a fully integrated energy company, powering industries and communities across Africa.", image: "/images/about-us/Frame162(5).png", align: "right" },
    { year: "2025", title: "Global Expansion. Ongoing…", description: "ASEDO Energy is expanding beyond Nigeria into key global markets. Our footprint now includes the UAE, Turkey, USA, UK, Canada, and broader Europe, where we continue to pursue new projects and strategic partnerships. Today, we operate across construction, logistics, oil & gas, technology, and media sectors—driving Africa’s industrial growth and powering its future.", image: "/images/about-us/Frame162(6).png", align: "left" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation currentPath="/about-us" />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src="/images/about-us/Ija7m2biu198azngt0jhntaoqcw1.png"
          className="w-full h-full object-cover"
          alt="About Us Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,35,48,0.35)] to-[rgba(243,251,255,0.70)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-montserrat text-4xl md:text-5xl lg:text-6xl font-medium text-center max-w-4xl px-4 drop-shadow-lg leading-tight">
            We are Africa's fastest-growing Integrated energy company
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white">
        <div className="flex flex-col gap-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 bg-[#white] w-fit rounded-xl px-4 py-2">
            <div className="w-1.5 h-1.5 bg-[#0A1E3F]"></div>
            <p className="text-[#00A89D] font-openSans text-xs md:text-sm uppercase font-semibold">ABOUT US</p>
            <div className="w-1.5 h-1.5 bg-[#0A1E3F]"></div>
          </div>
          <p className="text-[#0A1E3F] font-montserrat text-base md:text-lg font-normal leading-relaxed text-justify md:text-left">
            At ASEDO Energy Group, we drive Africa's oil, gas, and power industries through world-class infrastructure and innovative solutions. From upstream exploration to refining, gas processing, petroleum logistics, and retail, we are building the future of sustainable energy across Nigeria and global markets.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#0A1E3F] py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-[#00A89D] font-montserrat text-4xl md:text-5xl font-semibold">{stat.value}</p>
              <p className="text-[#00A89D] font-openSans text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Commitment Section */}
      <div className="w-full bg-white relative">
        <div className="py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex items-center gap-4 w-fit">
            <div className="w-1.5 h-1.5 bg-[#0A1E3F]"></div>
            <p className="text-[#00A89D] font-openSans text-xs md:text-sm uppercase font-semibold">OUR COMMITMENT</p>
            <div className="w-1.5 h-1.5 bg-[#0A1E3F]"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl font-normal max-w-2xl leading-tight">
              Building Africa's Energy Future Together
            </h2>
            <p className="text-[#0A1E3F] font-openSans text-base font-normal opacity-90 max-w-2xl text-justify md:text-left">
              At ASEDO Energy Group, we are proud to be one of Africa's fastest-growing integrated energy companies.
            </p>
          </div>
        </div>
        {/* Image Banner */}
        <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
          <img
            src="/images/about-us/Photovoltaicsplantteamreviewingsolarpanelsmanualproduction1.png"
            className="w-full h-full object-cover"
            alt="Solar Panel Review"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,168,157,0.30)] to-[rgba(10,30,63,0.30)]"></div>
        </div>
        {/* Values Grid */}
        <div className="w-full py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 bg-[#00A89D] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.3333L14.6667 18L20.6667 12M26.6667 16C26.6667 22.5446 19.5281 27.3045 16.9307 28.8198C16.6355 28.992 16.4879 29.0781 16.2796 29.1228C16.118 29.1575 15.8821 29.1575 15.7205 29.1228C15.5122 29.0781 15.3646 28.992 15.0694 28.8198C12.472 27.3045 5.33337 22.5446 5.33337 16V9.62346C5.33337 8.55744 5.33337 8.02444 5.50772 7.56626C5.66174 7.16151 5.91202 6.80036 6.23692 6.51403C6.6047 6.18991 7.10377 6.00276 8.10191 5.62845L15.251 2.94756C15.5282 2.84361 15.6668 2.79163 15.8094 2.77103C15.9358 2.75276 16.0643 2.75276 16.1907 2.77103C16.3333 2.79163 16.4719 2.84361 16.7491 2.94756L23.8982 5.62845C24.8963 6.00276 25.3954 6.18991 25.7632 6.51403C26.0881 6.80036 26.3383 7.16151 26.4924 7.56626C26.6667 8.02444 26.6667 8.55744 26.6667 9.62346V16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[#0A1E3F] font-openSans text-base opacity-90 leading-relaxed">
                <span className="font-bold">Safety and Quality First:</span> Every project meets the highest international standards.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 bg-[#00A89D] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6667 4.00008H10.4C8.15979 4.00008 7.03969 4.00008 6.18404 4.43606C5.43139 4.81955 4.81947 5.43147 4.43597 6.18412C4 7.03977 4 8.15987 4 10.4001V21.6001C4 23.8403 4 24.9604 4.43597 25.816C4.81947 26.5687 5.43139 27.1806 6.18404 27.5641C7.03969 28.0001 8.15979 28.0001 10.4 28.0001H21.6C23.8402 28.0001 24.9603 28.0001 25.816 27.5641C26.5686 27.1806 27.1805 26.5687 27.564 25.816C28 24.9604 28 23.8403 28 21.6001V17.3334M16 10.6667H21.3333V16.0001M20.6667 4.66675V2.66675M25.9191 6.08096L27.3333 4.66675M27.347 11.3334H29.347M4 17.7962C4.86925 17.9304 5.75983 18.0001 6.66667 18.0001C12.5151 18.0001 17.6871 15.1035 20.8262 10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[#0A1E3F] font-openSans text-base opacity-90 leading-relaxed">
                <span className="font-bold">Sustainable Growth:</span> Expanding responsibly for future generations.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 bg-[#00A89D] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.3334 28V25.3333C29.3334 22.8482 27.6337 20.7601 25.3334 20.168M20.6667 4.38768C22.6213 5.17886 24.0001 7.09508 24.0001 9.33333C24.0001 11.5716 22.6213 13.4878 20.6667 14.279M22.6667 28C22.6667 25.515 22.6667 24.2725 22.2608 23.2924C21.7195 21.9855 20.6812 20.9473 19.3744 20.406C18.3943 20 17.1518 20 14.6667 20H10.6667C8.18173 20 6.93922 20 5.9591 20.406C4.65229 20.9473 3.61402 21.9855 3.07272 23.2924C2.66675 24.2725 2.66675 25.515 2.66675 28M18.0001 9.33333C18.0001 12.2789 15.6123 14.6667 12.6667 14.6667C9.72123 14.6667 7.33341 12.2789 7.33341 9.33333C7.33341 6.38781 9.72123 4 12.6667 4C15.6123 4 18.0001 6.38781 18.0001 9.33333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[#0A1E3F] font-openSans text-base opacity-90 leading-relaxed">
                <span className="font-bold">People-Focused:</span> A professional, dedicated team working with passion and purpose.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Split Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-white">
        <div className="bg-[#0A1E3F] py-20 px-8 flex flex-col items-center justify-center text-center gap-8 min-h-[400px]">
          <h2 className="font-montserrat text-2xl md:text-3xl font-medium tracking-tight">OUR MISSION</h2>
          <p className="font-montserrat text-base md:text-lg font-normal max-w-lg leading-relaxed">
            To drive Africa's energy independence by building, owning, and operating the full spectrum of oil and gas infrastructure, from exploration and refining to power generation and nationwide distribution.
          </p>
        </div>
        <div className="bg-[#00A89D] py-20 px-8 flex flex-col items-center justify-center text-center gap-8 min-h-[400px]">
          <h2 className="font-montserrat text-2xl md:text-3xl font-medium tracking-tight">OUR VISION</h2>
          <p className="font-montserrat text-base md:text-lg font-normal max-w-lg leading-relaxed">
            To redefine how energy is produced, refined, and delivered across Africa, building a fully indigenous, self-sufficient energy ecosystem that fuels the continent's growth and transformation.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="flex flex-col md:flex-row w-full bg-white">
        <div className="w-full md:w-1/3 min-h-[300px] md:min-h-auto relative">
          <img
            src="/images/about-us/Frame139.png"
            alt="Our History"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 py-16 px-4 md:px-20 flex flex-col justify-center gap-10">
          <div>
            <h2 className="text-[#000206] font-montserrat text-2xl md:text-3xl font-medium mb-4">OUR HISTORY</h2>
            <p className="text-[#00A89D] font-montserrat text-lg md:text-xl font-normal">From Foundations to Energy Leadership.</p>
          </div>
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[#000] font-openSans text-base leading-relaxed">ASEDO Energy Group began over a decade ago as a construction and logistics firm, with its sister company pioneering our entry into oil and gas.</p>
            <p className="text-[#000] font-openSans text-base leading-relaxed">Today, we've evolved into a fully integrated energy group, commanding the entire value chain from resource development to refining, distribution, and end-user delivery.</p>
            <p className="text-[#000] font-openSans text-base leading-relaxed">Our operations power industries, infrastructure, and communities across Africa, delivering reliable and sustainable energy solutions.</p>

            <Link
              href="/contact"
              className="inline-flex py-3 px-8 mt-6 md:mt-10 items-center justify-center gap-4 bg-[#00A89D] hover:bg-[#008f86] transition-colors w-fit"
            >
              <span className="text-white font-openSans text-base font-semibold">
                CONTACT US
              </span>
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                <path d="M8 24L24 8M24 8H13.3333M24 8V18.6667" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Journey Timeline Section */}
      <div className="w-full py-16 md:py-24 bg-[#F5F5F5] px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-1.5 h-1.5 bg-[#0A1E3F]"></div>
            <p className="text-[#00A89D] font-openSans text-xs md:text-sm uppercase font-semibold">OUR GROWTH</p>
            <div className="w-1.5 h-1.5 bg-[#0A1E3F]"></div>
            <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium ml-4">Company's Journey</h2>
          </div>

          <div className="flex flex-col gap-24 w-full">
            {journeySteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Text Side */}
                <div className={`flex-1 flex flex-col gap-6 ${step.align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#00A89D] font-openSans text-base md:text-lg font-semibold uppercase">{`YEAR ${step.year}`}</h3>
                    <h4 className="text-black font-openSans text-lg md:text-xl font-normal">{step.title}</h4>
                  </div>
                  <p className="text-black font-openSans text-base leading-relaxed text-justify">
                    {step.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className="flex-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full max-w-md h-auto rounded-sm shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
