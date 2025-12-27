import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ShapeFutureCTA from "../components/ShapeFutureCTA";

interface ProjectFeature {
  text: string;
}

interface Project {
  title: string;
  status: string;
  image: string;
  features: ProjectFeature[];
}

const projects: Project[] = [
  {
    title: "Southwest Nigeria Energy & Industrial Hub",
    status: "30% Complete | Target Commissioning: Q4 2026",
    image: "/projects/southwest-energy-hub.png",
    features: [
      { text: "Modular Refinery (50,000 BPD)" },
      { text: "Gas Processing (50,000 BPD equivalent)" },
      { text: "Fertilizer Plant (Dry blend)" },
      { text: "80MW Embedded Power" },
      { text: "Export Corridor (Right-of-Way in acquisition)" },
    ],
  },
  {
    title: "Oil & Gas Asset Monetization (Niger Delta Basin)",
    status:
      "Pre-Development | Early Production Plan: Q1 2026 | First Oil Target: Q3 2028",
    image: "/projects/niger-delta.png",
    features: [
      { text: "Two upstream blocks in final acquisition phase" },
      { text: "Gas reserves: Estimated over 1 TCF" },
      { text: "Oil potential: Close to 60,000 BPD" },
      { text: "FPSO and EPC partners under engagement" },
      { text: "First commercial production targeted Q3 2028" },
    ],
  },
  {
    title: "UAE Refinery Acquisition (Middle East)",
    status: "Final Stage | Transfer Expected: Q1 2026",
    image: "/projects/uae-refinery.png",
    features: [
      { text: "Operational refinery (>100,000 BPD)" },
      { text: "High-access logistics hub" },
      { text: "To support blending, exports & digital ops integration" },
      { text: "Quiet partner acquisition strategy" },
      { text: "Technology-first integration" },
      { text: "Energy as an industrial base" },
      { text: "Execution built on measurable milestones" },
    ],
  },
  {
    title: "North America Industrial Platform",
    status: "Operational | Africa Integration Commencing Q4 2025",
    image: "/projects/north-america.png",
    features: [
      { text: "Heavy fabrication, testing, and leasing base" },
      { text: "Strategic support for U.S.–Africa energy service corridor" },
      { text: "Dual-continent team training and asset integration" },
    ],
  },
  {
    title: "Project AMY – Smart Device Ecosystem",
    status:
      "Acquisition to Close: October 2025 | Launch: Q4 2025 (Nigeria + East Africa)",
    image: "/projects/manager-tablet.png",
    features: [
      { text: "High-end smartphones and industrial tablets" },
      { text: "Built for field operations, logistics & safety systems" },
      { text: "OS secured for Asedo industrial and retail integration" },
    ],
  },
  {
    title: "Retail Energy Expansion – Nigeria & U.S.",
    status:
      "Nigeria: 50 Stations by Dec 2025 | U.S.: 4 Active (One Co-Branded)",
    image: "/projects/retail-energy-expansion.png", // Retail Energy Expansion project
    features: [
      { text: "NIGERIA: 50 smart-enabled service stations" },
      { text: "EV, LPG, solar hybrid features" },
      { text: "Digital command via AMY devices" },
      { text: "US: 4 operating stations" },
      { text: "Includes one under national franchise" },
      { text: "Integrated with Asedo Retail U.S. operations" },
    ],
  },
  {
    title: "Cement Manufacturing – Northwest Nigeria",
    status:
      "Licensing Complete | Procurement Underway | Construction: Q1 2026",
    image: "/projects/agriculture-silos.png",
    features: [
      { text: "Fully licensed factory & mining site" },
      { text: "EPC contractor engaged" },
      { text: "Power embedded from regional energy hub" },
      { text: "Launch planned for late 2026" },
    ],
  },
  {
    title: "Gas-to-Power Program",
    status: "Target Output: 418MW by 2028 | Phased Rollout Begun",
    image: "/projects/environment-industry.png",
    features: [
      { text: "80MW plant (Southwest): Online Q4 2026" },
      { text: "Distributed Microgrid (Cement, Retail): Starts Q3 2026" },
      { text: "Central Gas IPP: In feasibility stage" },
      { text: "Full buildout: 418MW by 2028" },
    ],
  },
  {
    title: "Enterprise Digitization Program",
    status: "Platform Pilot Complete | Full Deployment: Q1 2026",
    image: "/projects/enterprise-digitization.png",
    features: [
      { text: "Platform Pilot Complete | Full Deployment: Q1 2026" },
      { text: "AMY smart device suite fully integrated" },
      { text: "Centralized global command interface" },
    ],
  },
  {
    title: "Media Platform Expansion – U.S. Market",
    status: "Negotiation Phase | Contract Expected: September | Close: October 2025",
    image: "/projects/media-platform-expansion.png",
    features: [
      { text: "Strategic acquisition of a broadcast TV asset in the U.S." },
      { text: "Transaction under confidentiality" },
      { text: "Designed to anchor African content, commercial media and platform growth" },
      { text: "Targeted for launch integration by late 2025" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation currentPath="/projects" />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[60vh] lg:h-[60vh] min-h-[400px]">
        <img
          src="/projects/header.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Projects Hero"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div> {/* Overlay for readability on mobile */}

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 text-center">
          <h1 className="text-[#0A1E3F] md:text-white lg:text-[#0A1E3F] font-montserrat text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 md:mb-8 max-w-4xl drop-shadow-md md:drop-shadow-none">
            Projects
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-[#0A1E3F] md:text-white lg:text-[#0A1E3F] font-openSans text-base md:text-lg font-normal leading-relaxed drop-shadow-sm md:drop-shadow-none">
              With execution discipline and silent strategic partnerships, our
              projects are designed to deliver long-term value and global
              competitiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
          <div className="flex items-center gap-4">
            <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            <p className="text-[#00A89D] font-openSans text-sm md:text-base font-bold uppercase tracking-wide">
              SEE OUR PROJECTS
            </p>
            <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
          </div>

          <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
            See How We're Powering Change Around The World
          </h2>

          <p className="text-[#0A1E3F] font-openSans text-base md:text-lg leading-relaxed opacity-90 max-w-4xl">
            Asedo Energy Group is executing a bold, continent-spanning vision
            integrating energy infrastructure, digital systems, logistics, and
            industrial manufacturing into a unified growth platform.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full bg-white pb-12 md:pb-16 lg:pb-24 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col border border-[#0A1E3F] bg-[#F5F5F5] overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full h-64 md:h-80 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-6 md:gap-8 flex-grow">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#000206] font-montserrat text-xl md:text-2xl font-semibold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#00A89D] font-openSans text-sm md:text-base font-medium leading-relaxed">
                      {project.status}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mt-auto">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 md:gap-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 flex-shrink-0 mt-1 text-[#00A89D]"
                        >
                          <path
                            d="M12 14.6667L16 18.6667L29.3333 5.33333M21.3333 4H10.4C8.15979 4 7.03969 4 6.18404 4.43597C5.43139 4.81947 4.81947 5.43139 4.43597 6.18404C4 7.03969 4 8.15979 4 10.4V21.6C4 23.8402 4 24.9603 4.43597 25.816C4.81947 26.5686 5.43139 27.1805 6.18404 27.564C7.03969 28 8.15979 28 10.4 28H21.6C23.8402 28 24.9603 28 25.816 27.564C26.5686 27.1805 27.1805 26.5686 27.564 25.816C28 24.9603 28 23.8402 28 21.6V16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-[#000] font-openSans text-base font-normal leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Global Footprint Section */}
      <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
          <div className="flex items-center gap-4">
            <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            <p className="text-[#00A89D] font-openSans text-sm md:text-base font-bold uppercase tracking-wide">
              ROADMAP
            </p>
            <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
          </div>
          <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
            Strategic Global Footprint
          </h2>
        </div>
      </div>

      {/* Roadmap Cards Section */}
      <div className="bg-[#0A1E3F] w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Nigeria */}
          <div className="flex flex-col gap-4">
            <div className="bg-white w-24 h-16 flex items-center justify-center overflow-hidden">
              <img src="/flags/nigeria.png" alt="Nigeria Flag" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">ROLE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">
                    Refining, Retail, Cement, Logistics, Power
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">STATUS</p>
                <div className="flex items-center gap-2 border border-[#E3A700] px-2 py-1">
                  <div className="w-2 h-2 bg-[#E3A700]"></div>
                  <p className="text-[#E3A700] font-openSans text-sm md:text-base">Active</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">KEY DATE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">Rolling</p>
                </div>
              </div>
            </div>
          </div>

          {/* USA */}
          <div className="flex flex-col gap-4">
            <div className="bg-white w-24 h-16 flex items-center justify-center overflow-hidden">
              <img src="/flags/usa.png" alt="USA Flag" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">ROLE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">
                    Fabrication, Retail, Leasing Base
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">STATUS</p>
                <div className="flex items-center gap-2 border border-[#E3A700] px-2 py-1">
                  <div className="w-2 h-2 bg-[#E3A700]"></div>
                  <p className="text-[#E3A700] font-openSans text-sm md:text-base">Operational</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">KEY DATE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">Expanded Q2 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* UAE */}
          <div className="flex flex-col gap-4">
            <div className="bg-white w-24 h-16 flex items-center justify-center overflow-hidden">
              <img src="/flags/uae.png" alt="UAE Flag" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">ROLE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">
                    Refining & Trade Hub
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">STATUS</p>
                <div className="flex items-center gap-2 border border-[#E3A700] px-2 py-1">
                  <div className="w-2 h-2 bg-[#E3A700]"></div>
                  <p className="text-[#E3A700] font-openSans text-sm md:text-base">Acquisition</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">KEY DATE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">Closing Q1 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Turkey */}
          <div className="flex flex-col gap-4">
            <div className="bg-white w-24 h-16 flex items-center justify-center overflow-hidden">
              <img src="/flags/turkey.png" alt="Turkey Flag" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">ROLE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">
                    Procurement & Tech Interface
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">STATUS</p>
                <div className="flex items-center gap-2 border border-[#E3A700] px-2 py-1">
                  <div className="w-2 h-2 bg-[#E3A700]"></div>
                  <p className="text-[#E3A700] font-openSans text-sm md:text-base">Opening Soon</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">KEY DATE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">Q1 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* East Africa */}
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-2">
              <div className="bg-white w-24 h-16 flex items-center justify-center overflow-hidden">
                <img src="/flags/east-africa.png" alt="East Africa" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-300 font-openSans text-sm opacity-70">East Africa</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">ROLE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">
                    Smart Devices (Project AMY)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">STATUS</p>
                <div className="flex items-center gap-2 border border-[#E3A700] px-2 py-1">
                  <div className="w-2 h-2 bg-[#E3A700]"></div>
                  <p className="text-[#E3A700] font-openSans text-sm md:text-base">Launching</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">KEY DATE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">Q4 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* West Africa */}
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-2">
              <div className="bg-white w-24 h-16 flex items-center justify-center overflow-hidden">
                <img src="/flags/west-africa.png" alt="West Africa" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-300 font-openSans text-sm opacity-70">West Africa</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">ROLE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">
                    Retail & Device Distribution
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">STATUS</p>
                <div className="flex items-center gap-2 border border-[#E3A700] px-2 py-1">
                  <div className="w-2 h-2 bg-[#E3A700]"></div>
                  <p className="text-[#E3A700] font-openSans text-sm md:text-base">Rolling</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white font-openSans text-sm md:text-base">KEY DATE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="text-[#00A89D] font-openSans text-sm md:text-base">Through 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Execution Commitment Section */}
      <div className="bg-[#00A89D] w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#000206] font-montserrat text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
                Execution Commitment
              </h2>
              <div className="border-l-2 border-[#0A1E3F] pl-6">
                <p className="text-white font-openSans text-lg md:text-xl leading-relaxed">
                  "Our vision is industrial, our execution is silent, and our model is built for the long term not headlines, but real assets in motion."
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {[
                "Multi-region diversification",
                "Quiet partner acquisition strategy",
                "Technology-first integration",
                "Energy as an industrial base",
                "Execution built on measurable milestones"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 flex-shrink-0"
                  >
                    <path
                      d="M12 14.6667L16 18.6667L29.3333 5.33333M21.3333 4H10.4C8.15979 4 7.03969 4 6.18404 4.43597C5.43139 4.81947 4.81947 5.43139 4.43597 6.18404C4 7.03969 4 8.15979 4 10.4V21.6C4 23.8402 4 24.9603 4.43597 25.816C4.81947 26.5686 5.43139 27.1805 6.18404 27.564C7.03969 28 8.15979 28 10.4 28H21.6C23.8402 28 24.9603 28 25.816 27.564C26.5686 27.1805 27.1805 26.5686 27.564 25.816C28 24.9603 28 23.8402 28 21.6V16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#000] font-openSans text-lg md:text-xl">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="bg-white overflow-hidden">
            <img
              src="/team/projects-execution-commitment.png"
              alt="Executive"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <ShapeFutureCTA />

      <Footer />
    </div>
  );
}