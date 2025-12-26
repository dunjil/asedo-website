import Navigation from "../components/Navigation";
import Link from "next/link";
import Footer from "../components/Footer";

export default function OurServices() {
  const industries = [
    {
      title: "Upstream Development",
      image: "/images/services/Leonardobenitezwutrvs02uqaunsplash1.png",
      alt: "Upstream Development",
    },
    {
      title: "Offshore Drilling & Marine Logistics",
      image: "/images/services/Defrinomaasyrv1ysxz1z1gunsplash1.png",
      alt: "Offshore Drilling",
    },
    {
      title: "Refining & Processing",
      image: "/images/services/Mosdesignoxj8rtcuq6cunsplash1.png",
      alt: "Refining & Processing",
    },
    {
      title: "Gas & Power Infrastructure",
      image: "/images/services/Maksymkaharlytskyiu13zbf4r56aunsplash1.png",
      alt: "Gas & Power",
    },
    {
      title: "Nationwide Distribution Network",
      image: "/images/services/Marcinjozwiakkgopcmppt7cunsplash1.png",
      alt: "Distribution Network",
    },
    {
      title: "Procurement & Supply Chain Solutions",
      image: "/images/services/Albertorodriguezacra9fmt8yunsplash1.png",
      alt: "Supply Chain",
    },
  ];

  const processSteps = [
    {
      number: "1",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M10.313 4.15894C8.87652 3.23893 7.20585 2.75124 5.50001 2.75394C4.48497 2.75297 3.47719 2.9251 2.52001 3.26294C2.3861 3.31044 2.27019 3.39823 2.18818 3.51426C2.10617 3.63028 2.0621 3.76886 2.06201 3.91094V16.9729C2.06198 17.083 2.08834 17.1915 2.1389 17.2892C2.18945 17.387 2.26272 17.4712 2.35256 17.5347C2.44239 17.5983 2.54617 17.6394 2.65517 17.6546C2.76418 17.6698 2.87523 17.6586 2.97901 17.6219C3.78877 17.3363 4.64134 17.1908 5.50001 17.1919C7.32901 17.1919 9.00501 17.8399 10.313 18.9199V4.15894ZM11.688 18.9199C13.0412 17.7999 14.7434 17.1883 16.5 17.1909C17.385 17.1909 18.233 17.3429 19.02 17.6209C19.1238 17.6577 19.2348 17.6691 19.3439 17.6541C19.453 17.6391 19.5568 17.5981 19.6468 17.5346C19.7367 17.4711 19.8101 17.387 19.8608 17.2892C19.9115 17.1915 19.9379 17.083 19.938 16.9729V3.91094C19.9379 3.76874 19.8936 3.63007 19.8114 3.51403C19.7292 3.39799 19.6131 3.31027 19.479 3.26294C18.5222 2.9248 17.5148 2.75233 16.5 2.75294C14.7941 2.75054 13.1234 3.23858 11.687 4.15894L11.688 18.9199Z" fill="#00A89D" />
        </svg>
      ),
      title: "Field Identification & Acquisition",
      description: "Targeting high-value oil and gas blocks across Nigeria and West Africa.",
      image: "/images/services/Gpvwkluhtzcabgmarucjyn07dhqjpg.png",
    },
    {
      number: "2",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.9999 6.1918C10.9996 5.44007 11.1754 4.69872 11.5133 4.02718C11.8511 3.35563 12.3415 2.77257 12.9453 2.32472C13.5491 1.87686 14.2494 1.57668 14.99 1.44822C15.7307 1.31977 16.4912 1.36661 17.2105 1.585C17.3241 1.61955 17.4268 1.68294 17.5087 1.76899C17.5905 1.85504 17.6486 1.96081 17.6774 2.07602C17.7062 2.19122 17.7047 2.31191 17.673 2.42635C17.6413 2.54078 17.5805 2.64505 17.4965 2.729L14.455 5.7716C14.5125 6.22296 14.7183 6.64243 15.04 6.96416C15.3618 7.2859 15.7812 7.49168 16.2326 7.5492L19.2741 4.5077C19.358 4.42372 19.4623 4.36291 19.5768 4.3312C19.6912 4.29949 19.8119 4.29796 19.9271 4.32676C20.0423 4.35556 20.1481 4.41371 20.2341 4.49554C20.3202 4.57737 20.3835 4.68009 20.4181 4.7937C20.6465 5.54615 20.6871 6.34312 20.5363 7.11488C20.3855 7.88664 20.0478 8.60969 19.5529 9.22076C19.0579 9.83183 18.4208 10.3123 17.6972 10.6202C16.9736 10.928 16.1856 11.0539 15.4021 10.9867C14.4704 10.9086 13.6894 11.0791 13.2868 11.5686L6.7308 19.5282C6.46266 19.8532 6.12956 20.1185 5.75286 20.3071C5.37616 20.4958 4.96418 20.6036 4.54336 20.6237C4.12254 20.6438 3.70217 20.5757 3.30922 20.4238C2.91627 20.2718 2.55941 20.0394 2.26155 19.7415C1.96368 19.4436 1.73139 19.0866 1.57956 18.6936C1.42774 18.3007 1.35975 17.8803 1.37994 17.4595C1.40013 17.0386 1.50807 16.6267 1.69682 16.25C1.88557 15.8734 2.15097 15.5404 2.476 15.2723L10.4356 8.7174C10.9251 8.3148 11.0956 7.5338 11.0175 6.6021C11.0059 6.46564 11 6.32876 10.9999 6.1918ZM3.774 17.5339C3.774 17.1544 4.082 16.8464 4.4615 16.8464H4.4681C4.8476 16.8464 5.1556 17.1544 5.1556 17.5339V17.5416C5.1556 17.9211 4.8476 18.2291 4.4681 18.2291H4.4615C4.27916 18.2291 4.10429 18.1567 3.97536 18.0277C3.84643 17.8988 3.774 17.7239 3.774 17.5416V17.5416C3.774 17.5339 3.774 17.5339 3.774 17.5339Z" fill="#00A89D" />
        </svg>
      ),
      title: "Engineering & Project Development",
      description: "Design and execution of upstream infrastructure, refineries, and gas processing plants.",
      image: "/images/services/Eacpyolzzfjnzbbbombtczb1ckpng.png",
    },
    {
      number: "3",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.0625 4.81689C2.0625 4.08755 2.35223 3.38808 2.86796 2.87235C3.38368 2.35663 4.08315 2.06689 4.8125 2.06689H17.1875C17.9168 2.06689 18.6163 2.35663 19.132 2.87235C19.6478 3.38808 19.9375 4.08755 19.9375 4.81689V13.7544C19.9375 14.4837 19.6478 15.1832 19.132 15.6989C18.6163 16.2147 17.9168 16.5044 17.1875 16.5044H14.4375V16.7398C14.4375 17.2876 14.6542 17.8123 15.0425 18.1984L15.6112 18.7682C15.7074 18.8643 15.7729 18.9869 15.7994 19.1202C15.8259 19.2536 15.8123 19.3919 15.7603 19.5175C15.7082 19.6431 15.6201 19.7505 15.507 19.8261C15.3939 19.9016 15.261 19.9419 15.125 19.9419H6.875C6.73901 19.9419 6.60606 19.9016 6.49298 19.8261C6.3799 19.7505 6.29176 19.6431 6.23971 19.5175C6.18767 19.3919 6.17405 19.2536 6.20059 19.1202C6.22713 18.9869 6.29263 18.8643 6.3888 18.7682L6.9586 18.1984C7.3447 17.8123 7.5625 17.2876 7.5625 16.7398V16.5044H4.8125C4.08315 16.5044 3.38368 16.2147 2.86796 15.6989C2.35223 15.1832 2.0625 14.4837 2.0625 13.7544V4.81689ZM3.4375 4.81689V11.6919C3.4375 12.4509 4.0535 13.0669 4.8125 13.0669H17.1875C17.9465 13.0669 18.5625 12.4509 18.5625 11.6919V4.81689C18.5625 4.05789 17.9465 3.44189 17.1875 3.44189H4.8125C4.0535 3.44189 3.4375 4.05789 3.4375 4.81689Z" fill="#00A89D" />
        </svg>
      ),
      title: "Equipment Procurement & Sourcing",
      description: "Strategic sourcing and procurement of oilfield equipment and modular systems for projects and third-party supply contracts.",
      image: "/images/services/Rz1tnz9b9u8rsgneigbrtrsekipng.png",
    },
    {
      number: "4",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.125 2.06689C3.94266 2.06689 3.7678 2.13933 3.63886 2.26826C3.50993 2.39719 3.4375 2.57206 3.4375 2.75439C3.4375 2.93673 3.50993 3.1116 3.63886 3.24053C3.7678 3.36946 3.94266 3.44189 4.125 3.44189V18.5669H3.4375C3.25516 18.5669 3.0803 18.6393 2.95136 18.7683C2.82243 18.8972 2.75 19.0721 2.75 19.2544C2.75 19.4367 2.82243 19.6116 2.95136 19.7405C3.0803 19.8695 3.25516 19.9419 3.4375 19.9419H18.5625C18.7448 19.9419 18.9197 19.8695 19.0486 19.7405C19.1776 19.6116 19.25 19.4367 19.25 19.2544C19.25 19.0721 19.1776 18.8972 19.0486 18.7683C18.9197 18.6393 18.7448 18.5669 18.5625 18.5669H17.875V3.44189C18.0573 3.44189 18.2322 3.36946 18.3611 3.24053C18.4901 3.1116 18.5625 2.93673 18.5625 2.75439C18.5625 2.57206 18.4901 2.39719 18.3611 2.26826C18.2322 2.13933 18.0573 2.06689 17.875 2.06689H4.125ZM8.25 5.50439C8.06766 5.50439 7.8928 5.57683 7.76386 5.70576C7.63493 5.83469 7.5625 6.00956 7.5625 6.1919C7.5625 6.37423 7.63493 6.5491 7.76386 6.67803C7.8928 6.80696 8.06766 6.87939 8.25 6.87939H9.625C9.80734 6.87939 9.98221 6.80696 10.1111 6.67803C10.2401 6.5491 10.3125 6.37423 10.3125 6.1919C10.3125 6.00956 10.2401 5.83469 10.1111 5.70576C9.98221 5.57683 9.80734 5.50439 9.625 5.50439H8.25ZM7.5625 8.94189C7.5625 8.56239 7.8705 8.25439 8.25 8.25439H9.625C9.80734 8.25439 9.98221 8.32683 10.1111 8.45576C10.2401 8.58469 10.3125 8.75956 10.3125 8.94189C10.3125 9.12423 10.2401 9.2991 10.1111 9.42803C9.98221 9.55696 9.80734 9.62939 9.625 9.62939H8.25C8.06766 9.62939 7.8928 9.55696 7.76386 9.42803C7.63493 9.2991 7.5625 9.12423 7.5625 8.94189ZM8.25 11.0044C8.06766 11.0044 7.8928 11.0768 7.76386 11.2058C7.63493 11.3347 7.5625 11.5096 7.5625 11.6919C7.5625 11.8742 7.63493 12.0491 7.76386 12.178C7.8928 12.307 8.06766 12.3794 8.25 12.3794H9.625C9.80734 12.3794 9.98221 12.307 10.1111 12.178C10.2401 12.0491 10.3125 11.8742 10.3125 11.6919C10.3125 11.5096 10.2401 11.3347 10.1111 11.2058C9.98221 11.0768 9.80734 11.0044 9.625 11.0044H8.25ZM11.6875 6.1919C11.6875 5.81239 11.9955 5.50439 12.375 5.50439H13.75C13.9323 5.50439 14.1072 5.57683 14.2361 5.70576C14.3651 5.83469 14.4375 6.00956 14.4375 6.1919C14.4375 6.37423 14.3651 6.5491 14.2361 6.67803C14.1072 6.80696 13.9323 6.87939 13.75 6.87939H12.375C12.1927 6.87939 12.0178 6.80696 11.8889 6.67803C11.7599 6.5491 11.6875 6.37423 11.6875 6.1919ZM12.375 8.25439C12.1927 8.25439 12.0178 8.32683 11.8889 8.45576C11.7599 8.58469 11.6875 8.75956 11.6875 8.94189C11.6875 9.12423 11.7599 9.2991 11.8889 9.42803C12.0178 9.55696 12.1927 9.62939 12.375 9.62939H13.75C13.9323 9.62939 14.1072 9.55696 14.2361 9.42803C14.3651 9.2991 14.4375 9.12423 14.4375 8.94189C14.4375 8.75956 14.3651 8.58469 14.2361 8.45576C14.1072 8.32683 13.9323 8.25439 13.75 8.25439H12.375ZM11.6875 11.6919C11.6875 11.3124 11.9955 11.0044 12.375 11.0044H13.75C13.9323 11.0044 14.1072 11.0768 14.2361 11.2058C14.3651 11.3347 14.4375 11.5096 14.4375 11.6919C14.4375 11.8742 14.3651 12.0491 14.2361 12.178C14.1072 12.307 13.9323 12.3794 13.75 12.3794H12.375C12.1927 12.3794 12.0178 12.307 11.8889 12.178C11.7599 12.0491 11.6875 11.8742 11.6875 11.6919ZM8.25 17.8794V15.8169C8.25 15.4374 8.558 15.1294 8.9375 15.1294H13.0625C13.442 15.1294 13.75 15.4374 13.75 15.8169V17.8794C13.75 18.2589 13.442 18.5669 13.0625 18.5669H8.9375C8.75516 18.5669 8.5803 18.4945 8.45136 18.3655C8.32243 18.2366 8.25 18.0617 8.25 17.8794Z" fill="#00A89D" />
        </svg>
      ),
      title: "Production & Operational Management",
      description: "Executing oil, gas, and refining operations to deliver consistent outputs.",
      image: "/images/services/Xwmonwde2aozifhkmkftqzs6okpng.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation currentPath="/services" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="/images/services/Smartfactoryspecialisttestingautomatedsystemsmonitoringproduction1.png"
          className="w-full h-full object-cover"
          alt="Services Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(3,35,48,0.25)] to-[rgba(243,251,255,0.40)]"></div>
        {/* Note: The design had 'Industries We Serve' separate, so we keep this clean or add hero text if design implies. 
            The raw file shows the title 'Industries We Serve' below the hero image block. 
        */}
      </div>

      {/* Industries We Serve Section */}
      <div className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white">
        <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium mb-12 tracking-tight">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div key={index} className="relative group border-[0.3px] border-[#0A1E3F] bg-[#F5F5F5] h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-12 left-8 md:width-2/3">
                <p className="text-white font-montserrat text-lg md:text-xl font-medium leading-tight drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process Section */}
      <div className="flex flex-col w-full">
        {/* Header Strip */}
        <div className="bg-[#00A89D] py-10 px-4 md:px-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-white"></div>
              <p className="text-white font-openSans text-xs md:text-sm uppercase tracking-wide">OUR WORK PROCESS</p>
              <div className="w-1.5 h-1.5 bg-white"></div>
            </div>
            <h2 className="text-white font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
              Our Process
            </h2>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="bg-[#F5F5F5] py-20 px-4 md:px-20">
          <div className="max-w-6xl mx-auto flex flex-col relative">
            <div className="flex flex-col gap-0">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-8 md:gap-16 pb-12 last:pb-0 relative">
                  {/* Left Column: Number & Line */}
                  <div className="flex flex-col items-center flex-shrink-0 w-12">
                    <div className="z-10 bg-[#F5F5F5] rounded-full border border-[#EBEBEB] w-10 h-10 flex items-center justify-center">
                      <span className="text-[#000206] font-inter text-base font-medium">{step.number}</span>
                    </div>
                    {index !== processSteps.length - 1 && (
                      <div className="absolute top-10 bottom-0 w-[1px] bg-[#EBEBEB]">
                        <div className="w-[1px] h-full bg-[#002D25] origin-top scale-y-100"></div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Content */}
                  <div className="flex flex-col md:flex-row gap-8 w-full">
                    {/* Text Content */}
                    <div className="flex flex-col gap-4 max-w-md pt-2">
                      <div className="w-11 h-11 rounded-full border border-[#00A89D] bg-white flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-[#000206] font-openSans text-lg md:text-xl font-medium leading-tight tracking-tight mt-2">
                        {step.title}
                      </h3>
                      <p className="text-[#000206] font-openSans text-sm opacity-70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Image Card */}
                    <div className="flex-1 mt-4 md:mt-0">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-48 md:h-56 object-cover rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Block */}
        <div className="bg-[#00A89D] w-full h-[200px] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white"></div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0A1E3F] w-full py-16 px-4 md:px-20 text-center">
        <h2 className="text-white font-montserrat text-2xl md:text-3xl font-medium mb-6">
          Ready to Work With Us?
        </h2>
        <Link
          href="/contact"
          className="inline-flex py-3 px-8 items-center gap-3 bg-[#E3A700] hover:bg-[#d09900] transition-colors"
        >
          <span className="text-[#0A1E3F] font-openSans text-sm md:text-base font-semibold">
            GET IN TOUCH
          </span>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="w-5 h-5">
            <path d="M8 24L24 8M24 8H13.3333M24 8V18.6667" stroke="#0A1E3F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
