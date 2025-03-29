import { Bell, Search, Settings } from "lucide-react";
import { SvgNotificationFillIcon } from "../SVGS/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Set-up/redux/store";
import { toggleSideNav } from "../Set-up/redux/Slices/sideNavReducer";
import { useLocation } from "react-router";

const Header = () => {

    const dispatch = useDispatch();
    const { isOpen } = useSelector((state: RootState) => state.sideNav);
    const { pathname } = useLocation();

    function formatString(str: string): string {
        if (!str) return "";
        return str.replace("/", "").charAt(0).toUpperCase() + str.slice(2);
    }

    return (
        <>
            <header className="lg:flex hidden justify-between items-center bg-white p-4 shadow-sm">
                {/* Title */}
                <h1 className="text-[28px] font-semibold text-primary-200">{pathname === `/` ? `Overview` : formatString(pathname)}</h1>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar */}
                    <div className="relative flex items-center bg-primary-700 rounded-full h-[50px] px-2 w-64">
                        <Search size={20} className="text-primary-500 mr-2 ml-4" />
                        <input
                            type="text"
                            placeholder="Search for something"
                            className="bg-transparent outline-none text-sm w-full placeholder:text-[15px] placeholder:text-primary-600"
                        />
                    </div>

                    {/* Icons */}
                    <button className="p-2 bg-primary-700 hover:bg-gray-100 flex flex-col items-center justify-center w-[50px] h-[50px] rounded-full">
                        <Settings size={25} className="text-primary-500 hover:text-primary-800" />
                    </button>
                    <button className="p-2 bg-primary-700 hover:bg-gray-100 flex flex-col items-center justify-center w-[50px] h-[50px] rounded-full">
                        <SvgNotificationFillIcon className="fill-primary-500 hover:fill-primary-800 w-[25px] h-[25px]" />
                    </button>

                    {/* Profile Image */}
                    <img
                        src="/profile.png"
                        alt="User"
                        className="w-[60px] h-[60px] rounded-full object-cover"
                    />
                </div>
            </header>
            <header className="block lg:hidden  bg-white p-4 ">
                <div className="flex justify-between items-center">
                    <button
                        className='text-sm z-40 cursor-pointer hover:scale-95'
                        onClick={() => dispatch(toggleSideNav())}
                    >
                        <span
                            className={`bg-primary-300 block transition-all duration-300 ease-out h-[0.19rem] w-6 rounded-sm ${isOpen
                                ? "rotate-45 translate-y-[0.325rem]"
                                : "-translate-y-[0.19rem]"
                                }`}
                        />
                        <span
                            className={`bg-primary-300 block transition-all duration-300 ease-out h-[0.19rem] w-6 rounded-sm my-[0.14rem] ${isOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`bg-primary-300 block transition-all duration-300 ease-out h-[0.19rem] w-6 rounded-sm ${isOpen
                                ? "-rotate-45 -translate-y-[0.325rem]"
                                : "translate-y-[0.19rem]"
                                }`}
                        />
                    </button>
                    <h1 className="text-[20px] font-semibold text-primary-200">Overview</h1>
                    {/* Profile Image */}
                    <img
                        src="/profile.png"
                        alt="User"
                        className="w-[35px] h-[35px] rounded-full object-cover"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="relative flex items-center bg-primary-700 rounded-full h-[40px] px-2 mt-6 w-full">
                        <Search size={20} className="text-primary-500 mr-2 ml-4" />
                        <input
                            type="text"
                            placeholder="Search for something"
                            className="bg-transparent outline-none text-sm w-full placeholder:text-[15px] placeholder:text-primary-600"
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
