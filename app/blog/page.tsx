import Navigation from "../components/Navigation";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Blog() {
  const featuredPost = {
    title: "ASEDO ENERGY and Its Partners set to transform with fully licensed cement megaproject",
    excerpt: "Asedo Energy Group, in collaboration with its regional and technical partners, has officially secured all regulatory approvals for a fully licensed cement manufacturing and mining complex in Kebbi State, Northwest Nigeria.",
    category: "Partnership News",
    readTime: "17 mins read",
    image: "/blog-featured-cement-project.png",
    slug: "asedo-cement-megaproject",
  };

  const recentPosts = [
    {
      title: "ASEDO ENERGY and Its Partners set to transform with fully licensed cement megaproject",
      excerpt: "Asedo Energy Group, in collaboration with its regional and technical partners, has officially secured all regulatory approvals...",
      category: "Partnership News",
      readTime: "17 mins read",
      image: "/blog-cement-project-1.png",
      slug: "asedo-cement-megaproject",
    },
    {
      title: "Advancing Sustainable Energy Solutions Across Africa",
      excerpt: "Exploring innovative approaches to renewable energy infrastructure and sustainable development initiatives...",
      category: "Industry Insights",
      readTime: "12 mins read",
      image: "/blog-cement-project-1.png",
      slug: "sustainable-energy-solutions",
    },
    {
      title: "ASEDO ENERGY and Its Partners set to transform with fully licensed cement megaproject",
      excerpt: "Asedo Energy Group, in collaboration with its regional and technical partners, has officially secured all regulatory approvals...",
      category: "Partnership News",
      readTime: "17 mins read",
      image: "/blog-cement-project-1.png",
      slug: "asedo-cement-megaproject-2",
    },
    {
      title: "Advancing Sustainable Energy Solutions Across Africa",
      excerpt: "Exploring innovative approaches to renewable energy infrastructure and sustainable development initiatives...",
      category: "Industry Insights",
      readTime: "12 mins read",
      image: "/blog-cement-project-1.png",
      slug: "sustainable-energy-solutions-2",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation currentPath="/blog" />

      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden bg-[#000206]">
        {/* Gradient Background Pattern */}
        <div className="absolute inset-0 opacity-60">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 h-full">
            <div className="bg-gradient-to-b from-teal-900/0 to-gray-900/40"></div>
            <div className="bg-gradient-to-b from-teal-900/20 to-gray-900/70"></div>
            <div className="bg-gradient-to-b from-teal-900/0 to-gray-900"></div>
            <div className="bg-gradient-to-b from-teal-600/0 to-gray-900"></div>
            <div className="hidden md:block bg-gradient-to-b from-teal-400/0 to-gray-900"></div>
            <div className="hidden md:block bg-gradient-to-b from-teal-900/0 to-gray-900"></div>
            <div className="hidden lg:block bg-gradient-to-b from-teal-900/0 to-gray-900"></div>
            <div className="hidden lg:block bg-gradient-to-b from-teal-900/0 to-gray-900"></div>
            <div className="hidden lg:block bg-gradient-to-b from-teal-900/0 to-gray-900"></div>
            <div className="hidden lg:block bg-[#000206]"></div>
          </div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20 text-center">
          <h1 className="text-[#FFF] font-montserrat text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-6">
            Insights & Updates
          </h1>
          <p className="text-[#FFF] font-openSans text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            Ideas, insights, and the latest updates to keep you informed,
            inspired, and ahead in the world of green energy.
          </p>
        </div>
      </div>

      {/* Featured Blog Section */}
      <div className="bg-[#FFF] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            <p className="text-[#00A89D] font-montserrat text-base md:text-lg font-medium leading-tight tracking-tight uppercase">
              FEATURED BLOG
            </p>
            <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative h-64 md:h-96 lg:h-full min-h-[300px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={featuredPost.title}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-6 md:gap-8 p-6 md:p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="px-3 py-1.5 bg-[#000206] text-[#FFF] font-openSans text-xs md:text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="text-[#000206]/50 font-openSans text-xs md:text-sm">
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-[#000206] font-openSans text-lg md:text-xl font-semibold leading-tight tracking-tight line-clamp-2">
                  {featuredPost.title}
                </h2>

                <p className="text-[#000206]/50 font-openSans text-base leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-4 text-[#00A89D] border-b-2 border-[#00A89D] w-fit pb-2 group-hover:gap-6 transition-all">
                  <span className="font-openSans text-sm md:text-base">
                    Read more
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      d="M8 24L24 8M24 8H13.3333M24 8V18.6667"
                      stroke="#00A89D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Blog Posts Section */}
      <div className="bg-[#F5F5F5] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
              <p className="text-[#00A89D] font-openSans text-sm font-normal leading-tight uppercase">
                RECENT BLOG
              </p>
              <div className="bg-[#0A1E3F] w-1.5 h-1.5 rounded-full"></div>
            </div>
            <h2 className="text-[#0A1E3F] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
              Latest blog post
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {recentPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 lg:h-80 overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={post.title}
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="px-3 py-1.5 bg-[#000206] text-[#FFF] font-openSans text-xs md:text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-[#000206]/50 font-openSans text-xs md:text-sm">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-[#00A89D] font-openSans text-lg md:text-xl font-semibold leading-tight tracking-tight line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[#000206]/70 font-openSans text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-[#00A89D] border-b-2 border-[#00A89D] w-fit pb-2 group-hover:gap-5 transition-all">
                    <span className="font-openSans text-sm md:text-base">
                      Read more
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-6 md:h-6"
                    >
                      <path
                        d="M8 24L24 8M24 8H13.3333M24 8V18.6667"
                        stroke="#00A89D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
