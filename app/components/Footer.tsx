import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white w-full py-12 md:py-16 lg:py-24 px-2 sm:px-4 md:px-8 lg:px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
                    {/* Logo & Description */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        <img
                            src="/logo-footer.png"
                            className="w-40 h-auto"
                            alt="ASEDO Logo"
                        />
                        <p className="text-[#0A1E3F] font-openSans text-sm font-normal leading-relaxed">
                            Leading Nigerian oil and gas company dedicated to delivering
                            innovative solutions and exceptional services across the entire
                            energy value chain.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-2">
                            <div className="w-9 h-9 rounded-none bg-[#F5F5F5] border border-[#F5F5F5] flex items-center justify-center text-[#00A89D]">
                                {/* LinkedIn Icon */}
                                <svg width="16" height="16" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                    <path d="M9 1C11.1217 1 13.1566 1.84286 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9V18.3333H11.6667V9C11.6667 8.29276 11.3857 7.61448 10.8856 7.11438C10.3855 6.61429 9.70724 6.33333 9 6.33333C8.29276 6.33333 7.61448 6.61429 7.11438 7.11438C6.61429 7.61448 6.33333 8.29276 6.33333 9V18.3333H1V9C1 6.87827 1.84286 4.84344 3.34315 3.34315C4.84344 1.84286 6.87827 1 9 1V1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
                        {/* Company */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#000] font-montserrat text-base md:text-lg font-semibold tracking-tight">Company</h3>
                            <div className="flex flex-col gap-3 text-[#00A89D] font-montserrat text-sm font-normal">
                                <Link href="/about-us" className="hover:underline">About Us</Link>
                                <Link href="/team" className="hover:underline">Our Team</Link>
                                <Link href="/blog" className="hover:underline">Our Blog</Link>
                                <Link href="/about-us" className="hover:underline">Who We Are</Link>
                                <Link href="/careers" className="hover:underline">Careers</Link>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#000] font-montserrat text-base md:text-lg font-semibold tracking-tight">Services</h3>
                            <div className="flex flex-col gap-3 text-[#000206] font-montserrat text-sm font-normal">
                                <Link href="/services" className="hover:text-[#00A89D] transition-colors">Upstream Development</Link>
                                <Link href="/services" className="hover:text-[#00A89D] transition-colors">Offshore Drilling & Marine Logistics</Link>
                                <Link href="/services" className="hover:text-[#00A89D] transition-colors">Refining & Processing</Link>
                                <Link href="/services" className="hover:text-[#00A89D] transition-colors">Gas & Power Infrastructure</Link>
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="flex flex-col gap-4 max-w-xs">
                            <h3 className="text-[#000] font-montserrat text-base md:text-lg font-semibold tracking-tight">Projects</h3>
                            <div className="flex flex-col gap-3 text-[#000206] font-montserrat text-sm font-normal">
                                <Link href="/projects" className="hover:text-[#00A89D] transition-colors">Southwest Nigeria Energy & Industrial Hub</Link>
                                <Link href="/projects" className="hover:text-[#00A89D] transition-colors">Oil & Gas Asset Monetization (Niger Delta Basin)</Link>
                                <Link href="/projects" className="hover:text-[#00A89D] transition-colors">UAE Refinery Acquisition</Link>
                                <Link href="/projects" className="hover:text-[#00A89D] transition-colors">North America Industrial Platform</Link>
                            </div>
                            <div className="flex items-center gap-2 border-b border-[#00A89D] w-fit pb-0.5 mt-1">
                                <Link href="/projects" className="text-[#00A89D] font-montserrat text-sm font-medium">More links</Link>
                                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path d="M8 24L24 8M24 8H13.3333M24 8V18.6667" stroke="#00A89D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Office Address Section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#000] font-montserrat text-base md:text-lg font-semibold tracking-tight">Office Address</h3>
                    <div className="flex items-start gap-3">
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0 text-[#00A89D]">
                            <path d="M21.3337 17.8326C26.0427 18.7585 29.3337 20.873 29.3337 23.3333C29.3337 26.647 23.3641 29.3333 16.0003 29.3333C8.63653 29.3333 2.66699 26.647 2.66699 23.3333C2.66699 20.873 5.95791 18.7585 10.667 17.8326M16.0003 22.6667V12M16.0003 12C18.2095 12 20.0003 10.2091 20.0003 8C20.0003 5.79086 18.2095 4 16.0003 4C13.7912 4 12.0003 5.79086 12.0003 8C12.0003 10.2091 13.7912 12 16.0003 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-[#000206] font-openSans text-sm font-normal leading-relaxed max-w-sm">
                            Plot 281 Trans-Amadi Industrial Layout Rd, Trans Amadi, Port Harcourt, Rivers
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 md:pt-10 border-t border-[#000]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[#0A1E3F] font-openSans text-xs md:text-sm font-normal">2025 ASEDO ENERGY GROUP. All rights reserved.</p>
                        <div className="flex gap-6 md:gap-8">
                            <Link href="/privacy" className="text-[#0A1E3F] font-openSans text-xs md:text-sm font-normal cursor-pointer hover:text-[#00A89D]">Privacy</Link>
                            <Link href="/hse-policy" className="text-[#0A1E3F] font-openSans text-xs md:text-sm font-normal cursor-pointer hover:text-[#00A89D]">HSE Policy</Link>
                            <Link href="/terms" className="text-[#0A1E3F] font-openSans text-xs md:text-sm font-normal cursor-pointer hover:text-[#00A89D]">Terms of Use</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
