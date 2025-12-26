import Link from "next/link";

export default function ShapeFutureCTA() {
    return (
        <div className="bg-[#00A89D] w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
            <img
                src="/shape-future-bg.png"
                className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                alt="Shape Future Background"
            />
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto text-center">
                <h2 className="text-[#FFF] font-montserrat text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
                    Let&apos;s Shape the future of Clean Energy Together
                </h2>
                <Link
                    href="/contact"
                    className="inline-flex py-4 px-8 md:py-6 md:px-14 justify-center items-center gap-4 md:gap-5 bg-[#FFF] hover:bg-gray-100 transition-colors"
                >
                    <span className="text-[#00A89D] font-openSans text-base md:text-xl font-semibold leading-tight tracking-tight">
                        CONTACT US
                    </span>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 md:w-8 md:h-8"
                    >
                        <path
                            d="M8 24L24 8M24 8H13.3333M24 8V18.6667"
                            stroke="#00A89D"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
