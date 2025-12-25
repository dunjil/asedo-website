import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function BlogDetails() {
  // In a real app, you'd fetch this data based on the slug
  const blogPost = {
    title: "ASEDO ENERGY and Its Partners set to transform with fully licensed cement megaproject",
    category: "Featured Blog",
    date: "January 20, 2025",
    author: "ASEDO Team",
    content: "Asedo Energy Group, in collaboration with its regional and technical partners, has officially secured all regulatory approvals for a fully licensed cement manufacturing and mining complex in Kebbi State, Northwest Nigeria. This milestone cements the Group’s position as a key industrial player in Nigeria’s northern corridor.",
    images: [
      "/images/blog/Img20250721wa00501768x5761.png",
      "/images/blog/Img20250721wa00311300x2252.png",
    ],
    highlights: [
      "Factory & Mining Site Fully Licensed",
      "EPC Contractor Engaged",
      "Equipment Procurement Underway",
      "Powered by Asedo’s Embedded Regional Energy Hub",
      "Construction Set to Commence Q1 2026",
      "Full Operations Targeted for Launch in Late 2026"
    ],
    objectives: [
      "Accelerate industrial development across Northern Nigeria",
      "Deepen Nigeria’s self-sufficiency in cement production",
      "Empower local communities through job creation and training",
      "Support the Federal Government’s infrastructure expansion agenda"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation currentPath="/blog" />

      {/* Hero Section - Abstract Gradient Background from Raw Design */}
      <div className="relative w-full min-h-[400px] flex items-center justify-center bg-[#000206] overflow-hidden">
        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0 flex opacity-60">
          <div className="w-1/6 h-full bg-gradient-to-b from-[#0F524E] to-[#000206]"></div>
          <div className="w-1/6 h-full bg-gradient-to-b from-[#0F524E] via-[#000206] to-[#000206]"></div>
          <div className="w-1/6 h-full bg-gradient-to-b from-[#22B8AF] to-[#000408]"></div>
          <div className="w-1/6 h-full bg-gradient-to-b from-[#32D0C7] to-[#000408]"></div>
          <div className="w-1/6 h-full bg-gradient-to-b from-[#123B38] to-[#000408]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-white font-montserrat text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            {blogPost.title}
          </h1>
        </div>
      </div>

      {/* Blog Content Wrapper */}
      <div className="bg-white px-4 md:px-10 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

          {/* Category Label */}
          <div className="flex items-center gap-4 bg-[#white] w-fit">
            <div className="w-1.5 h-1.5 bg-[#0A1E3F]"></div>
            <p className="text-[#00A89D] font-montserrat text-base md:text-lg font-medium uppercase tracking-wide">
              {blogPost.category}
            </p>
            <div className="w-1.5 h-1.5 bg-[#0A1E3F]"></div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
            <div className="w-full h-[400px] md:h-full bg-gray-100 overflow-hidden">
              <img src={blogPost.images[0]} className="w-full h-full object-cover" alt="Cement Project 1" />
            </div>
            <div className="w-full h-[400px] md:h-full bg-gray-100 overflow-hidden">
              <img src={blogPost.images[1]} className="w-full h-full object-cover" alt="Cement Project 2" />
            </div>
          </div>

          {/* Main Text Content */}
          <div className="flex flex-col gap-12 max-w-5xl mx-auto w-full pt-10">
            <p className="text-[#000206] font-montserrat text-xl md:text-2xl font-normal leading-normal text-justify">
              {blogPost.content}
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-8">
              <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl font-semibold tracking-tight">
                Project Highlights:
              </h2>
              <div className="text-[#000206] font-montserrat text-base md:text-lg font-normal leading-normal space-y-4">
                {blogPost.highlights.map((item, i) => (
                  <p key={i} className="text-justify">{item}</p>
                ))}
              </div>
            </div>

            {/* Additional Context */}
            <div className="bg-[#F9F9F9] p-8 md:p-12 border-l-4 border-[#00A89D]">
              <p className="text-[#000206] font-montserrat text-base md:text-xl font-normal leading-normal">
                This cement manufacturing facility strategically located in Kebbi state is part of Asedo’s wider commitment to value chain integration and national infrastructure development. Once completed, the facility will serve as a regional anchor for housing, roads, and industrial construction, while driving job creation and upstream mineral utilization across the Northwest zone.
              </p>
            </div>

            <div className="flex items-center gap-4 pl-6 border-l-4 border-[#0A1E3F]">
              <p className="text-[#00A89D] font-montserrat text-2xl md:text-3xl font-normal">
                Partnership-Driven, Regionally Integrated
              </p>
            </div>

            <p className="text-[#000206] font-montserrat text-lg md:text-xl font-normal leading-normal text-justify">
              The project is a collaboration between Asedo Energy and a mix of local and international partners, combining industrial expertise, financial strength, and regional access. It will be powered by a dedicated embedded energy solution from Asedo’s nearby infrastructure hub, ensuring stable off-grid power and sustainability compliance from day one.
            </p>

            {/* Objectives */}
            <div className="flex flex-col gap-8">
              <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl font-semibold tracking-tight">
                Strategic Objectives:
              </h2>
              <ul className="text-[#000206] font-montserrat text-base md:text-lg font-normal leading-normal space-y-4 list-disc pl-10">
                {blogPost.objectives.map((item, i) => (
                  <li key={i} className="pl-4">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200 shadow-sm mt-8">
              <p className="text-[#000206] font-montserrat text-lg md:text-xl font-normal leading-normal text-center">
                Asedo Energy remains fully committed to working closely with the Kebbi State Government and all regulatory agencies to ensure seamless execution of this high-impact industrial project.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
