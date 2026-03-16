import React from "react";

const Footer = () => {
    // Changed background to black and reduced padding (pt-10 pb-6) to decrease height
    return (
        <footer className="bg-black text-white pt-10 pb-6 mt-auto">
            <div className="max-w-360 mx-auto px-6 md:px-16">
                
                {/* Reduced gap and bottom margin to make it compact */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-12 gap-8 mb-8">
                    
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4 pr-4">
                        <h2 className="text-xl font-bold tracking-tight text-white text-center lg:text-left">
                            CS — Ticket System
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed text-justify lg:text-left ">
                            CS — Ticket System is a streamlined customer support platform designed to manage and resolve issues efficiently.
                        </p>
                    </div>
                    
                    {/* Navigation Links */}
                    {[
                        { title: "Company", links: ["About Us", "Our Mission", "Contact Sales"] },
                        { title: "Services", links: ["Products & Services", "Customer Stories", "Download Apps"] },
                        { title: "Information", links: ["Privacy Policy", "Terms & Conditions", "Join Us"] }
                    ].map((section, index) => (
                        <div key={index} className="text-center lg:text-left space-y-4">
                            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2 lg:border-none inline-block lg:block">
                                {section.title}
                            </h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {section.links.map(link => (
                                    <li key={link} className="hover:text-white cursor-pointer transition-colors">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                   
                    {/* Social Links & Contact */}
                    <div className="text-center lg:text-left space-y-4">
                        <h3 className="text-lg font-semibold border-b border-gray-800 pb-2 lg:border-none inline-block lg:block">
                            Social Links
                        </h3>

                        {/* Mobile Social Icons */}
                        <div className="flex lg:hidden justify-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-full font-bold hover:bg-gray-900 cursor-pointer transition-colors">X</div>
                            <div className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-full font-bold hover:bg-gray-900 cursor-pointer transition-colors">in</div>
                            <div className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-full font-bold hover:bg-gray-900 cursor-pointer transition-colors">f</div>
                        </div>

                        {/* Desktop Social Links */}
                        <div className="hidden lg:flex flex-col gap-3 text-gray-400 text-sm">
                            <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                                <span className="w-6 h-6 flex items-center justify-center border border-gray-800 rounded-full text-[10px]">X</span>
                                @CS — Ticket System
                            </div>
                            <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                                <span className="w-6 h-6 flex items-center justify-center border border-gray-800 rounded-full text-[10px]">in</span>
                                @CS — Ticket System
                            </div>
                            <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                                <span className="w-6 h-6 flex items-center justify-center border border-gray-800 rounded-full text-[10px]">f</span>
                                @CS — Ticket System
                            </div>
                        </div>

                        {/* Email Contact */}
                        <div className="text-gray-400 text-xs flex justify-center lg:justify-start items-center gap-2 pt-2">
                            <span>✉️</span> ahnafsadik01857@gmail.com
                        </div>
                    </div>
                </div>
                      
                {/* Copyright Section with reduced padding */}
                <div className="border-t border-gray-800 pt-6 mt-2 text-center">
                    <p className="text-xs text-gray-500 tracking-widest uppercase">
                        © {new Date().getFullYear()} Ahnaf Sadik Saad. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;