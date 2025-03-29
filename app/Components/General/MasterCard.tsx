import React, { useRef } from 'react'
import { CreditCard, DollarSign, User, ChevronRight, ChevronLeft } from 'lucide-react';
import { SvgCardChipAltIcon, SvgCardChipIcon, SvgCardMasterALtIcon, SvgCardMasterIcon } from "~/Components/SVGS/svgIcons";

const MasterCard = () => {

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300, // Adjust scroll distance
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h1 className="lg:text-[22px] text-primary-200 font-semibold">My Cards</h1>
                <button className="text-primary-200 hover:text-primary-500 cursor-pointer text-sm lg:text-[17px]">See All</button>
            </div>

            <div className="relative">
                {/* Left Scroll Button */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 cursor-pointer transform -translate-y-1/2 z-10 bg-white p-2 shadow-lg rounded-full hidden md:flex"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Scrollable Cards Container */}
                <div
                    ref={scrollRef}
                    className="flex lg:gap-6 gap-3 overflow-x-auto whitespace-nowrap no-scrollbar max-w-full scroll-smooth"
                >
                    <div className="h-[170px] w-[265px] flex flex-col justify-between bg-gradient-to-br from-slate-700 to-black lg:h-[282px] lg:w-[350px] text-white rounded-3xl flex-shrink-0">
                        <div className="flex justify-between items-center px-6 pt-6">
                            <div>
                                <p className="text-xs">Balance</p>
                                <h2 className="lg:text-2xl  font-bold">$5,756</h2>
                            </div>

                            <SvgCardChipIcon size="35" />


                        </div>
                        <div className="flex gap-20 items-center px-6">
                            <div>
                                <p className="text-white/70 lg:text-xs text-[10px]">CARD HOLDER</p>
                                <p className="lg:text-[15px] text-[13px]">Eddy Column</p>
                            </div>
                            <div>
                                <p className="text-white/70 lg:text-xs text-[10px]">VALID THRU</p>
                                <p className="lg:text-[15px] text-[13px]">12/22</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-gray-700/30 px-6 lg:py-5 py-2 rounded-b-3xl">
                            <p className="text-sm lg:text-xl font-semibold">3778 **** **** 1234</p>
                            <SvgCardMasterIcon />
                        </div>
                    </div>

                    <div className="h-[170px] w-[265px] flex flex-col justify-between bg-white border border-primary-900 lg:h-[282px] lg:w-[350px] text-primary-200 rounded-3xl flex-shrink-0">
                        <div className="flex justify-between items-center px-6 pt-6">
                            <div>
                                <p className="text-primary-500 text-xs">Balance</p>
                                <h2 className="lg:text-2xl  font-bold">$5,756</h2>
                            </div>

                            <SvgCardChipAltIcon size="35" />

                        </div>
                        <div className="flex gap-20 items-center px-6">
                            <div>
                                <p className="text-primary-500 lg:text-xs text-[10px]">CARD HOLDER</p>
                                <p className="lg:text-[15px] text-[13px]">Eddy Column</p>
                            </div>
                            <div>
                                <p className="text-primary-500 lg:text-xs text-[10px]">VALID THRU</p>
                                <p className="lg:text-[15px] text-[13px]">12/22</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-primary-900 px-6 py-5 rounded-b-3xl">
                            <p className="text-sm lg:text-xl font-semibold">3778 **** **** 1234</p>
                            <SvgCardMasterALtIcon />
                        </div>
                    </div>

                    <div className="h-[170px] w-[265px] flex flex-col justify-between bg-gradient-to-br from-slate-700 to-black lg:h-[282px] lg:w-[350px] text-white rounded-3xl flex-shrink-0">
                        <div className="flex justify-between items-center px-6 pt-6">
                            <div>
                                <p className="text-xs">Balance</p>
                                <h2 className="lg:text-2xl  font-bold">$5,756</h2>
                            </div>

                            <SvgCardChipIcon size="35" />


                        </div>
                        <div className="flex gap-20 items-center px-6">
                            <div>
                                <p className="text-white/70 lg:text-xs text-[10px]">CARD HOLDER</p>
                                <p className="lg:text-[15px] text-[13px]">Eddy Column</p>
                            </div>
                            <div>
                                <p className="text-white/70 lg:text-xs text-[10px]">VALID THRU</p>
                                <p className="lg:text-[15px] text-[13px]">12/22</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-gray-700/30 px-6 lg:py-5 py-2 rounded-b-3xl">
                            <p className="text-sm lg:text-xl font-semibold">3778 **** **** 1234</p>
                            <SvgCardMasterIcon />
                        </div>
                    </div>
                </div>

                {/* Right Scroll Button */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-lg rounded-full hidden md:flex"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}

export default MasterCard