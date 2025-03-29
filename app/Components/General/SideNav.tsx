import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { SvgAccountFillIcon, SvgCreditFillIcon, SvgHomeFillIcon, SvgInvestmentFillIcon, SvgLoanFillIcon, SvgPrivillageFillIcon, SvgServiceFillIcon, SvgSettingFillIcon, SvgTransactionFillIcon } from "../SVGS/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Set-up/redux/store";
import { closeSideNav, toggleSideNav } from "../Set-up/redux/Slices/sideNavReducer";

const SideNav = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state: RootState) => state.sideNav);
    const { pathname } = useLocation(); // Get current path 

    return (
        <>
            {/* Mobile Sidebar Button */}
            {/* <button
                className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md"
                onClick={() => dispatch(toggleSideNav())}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button> */}

            {/* Sidebar Animation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Sidebar */}
                        <motion.aside
                            initial={{ x: "-100%" }} // Start off-screen
                            animate={{ x: 0 }} // Slide in
                            exit={{ x: "-100%" }} // Slide out on close
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-primary-100 z-40 flex flex-col shadow-lg"
                        >
                            {/* Logo */}
                            <div className="flex justify-center items-center mb-10 mt-6">
                                <img src="/logo.png" alt="logo" className="w-[35px] h-[35px]" />
                                <h1 className="text-2xl font-bold text-primary-200 ml-2">
                                    Soar Task
                                </h1>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 px-4">
                                <ul className="space-y-4">
                                    <li>
                                        {/* <Link to="/" className="flex items-center gap-3 p-3 text-primary-400 hover:bg-gray-700 rounded-md">
                                <Home size={20} /> Dashboard
                            </Link> */}
                                        <Link
                                            to={"/"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition hover:bg-primary-600 `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgHomeFillIcon
                                                    className={`size-6 ${pathname === "/"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 ${pathname === "/" ? `text-primary-300` : `text-primary-400`}`}>
                                                    Dashboard
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/transactions"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/transactions" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgTransactionFillIcon
                                                    className={`size-6 ${pathname === "/transactions"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/transactions" ? `text-primary-300` : `text-primary-400`}`}>
                                                    Transaction
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/accounts"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/accounts" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgAccountFillIcon
                                                    className={`size-6 ${pathname === "/accounts"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/accounts" ? `text-primary-300` : `text-primary-400`}`}>
                                                    Account
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/investments"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/investments" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgInvestmentFillIcon
                                                    className={`size-6 ${pathname === "/investments"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/investments" ? `text-primary-300` : `text-primary-400`}`}>
                                                    Investment
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/credit"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/credit" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgCreditFillIcon
                                                    className={`size-6 ${pathname === "/credit"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/credit" ? `text-primary-300` : `text-primary-400`}`}>
                                                    Credit
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/loan"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/loan" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgLoanFillIcon
                                                    className={`size-6 ${pathname === "/loan"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/loan" ? `text-primary-300` : `text-primary-400`}`}>
                                                    Loan
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/services"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/services" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgServiceFillIcon
                                                    className={`size-6 ${pathname === "/services"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/services" ? `text-primary-300` : `text-primary-400`}`}>
                                                    Service
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/privilege"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/privilege" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgPrivillageFillIcon
                                                    className={`size-6 ${pathname === "/privilege"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/privilege" ? `text-primary-300` : `text-primary-400`}`}>
                                                    My Privileges
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/settings"}
                                            className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                                        >
                                            <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/settings" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                            <div className="flex pl-6 gap-5 relative items-center ">
                                                <SvgSettingFillIcon
                                                    className={`size-6 ${pathname === "/settings"
                                                        ? "fill-primary-300"
                                                        : "fill-primary-400 group-hover:fill-primary-300"
                                                        } `}
                                                />

                                                <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/settings" ? `text-primary-300` : `text-primary-400`}`}>
                                                    Settings
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </motion.aside>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-primary-300/35 bg-opacity-0 z-30 lg:hidden"
                            onClick={() => dispatch(closeSideNav())}
                        />
                    </>
                )}
            </AnimatePresence>

            {/* Sidebar */}
            {/* <aside
                className={`bg-white border border-r border-r-primary-100 text-white h-screen py-6 flex flex-col z-40 transition-transform duration-300 ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
                    } lg:translate-x-0 lg:block lg:w-[18%] min-w-[240px] ${isOpen ? `block` : `hidden`} `}
            > */}
            <aside className="hidden lg:block lg:w-[16%] min-w-[240px] bg-white border-r border-primary-100 h-screen">
                {/* Logo */}
                <div className="flex ml-10 items-center mt-5 mb-10 w-full">
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="logo"
                            className="w-[35px] h-[35px]"
                        />
                        <h1 className="text-2xl font-bold text-primary-200">Soar Task</h1>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1">
                    <ul className="space-y-4">
                        <li>
                            {/* <Link to="/" className="flex items-center gap-3 p-3 text-primary-400 hover:bg-gray-700 rounded-md">
                                <Home size={20} /> Dashboard
                            </Link> */}
                            <Link
                                to={"/"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgHomeFillIcon
                                        className={`size-6 ${pathname === "/"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/" ? `text-primary-300` : `text-primary-400`}`}>
                                        Dashboard
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/transactions"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/transactions" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgTransactionFillIcon
                                        className={`size-6 ${pathname === "/transactions"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/transactions" ? `text-primary-300` : `text-primary-400`}`}>
                                        Transaction
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/accounts"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/accounts" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgAccountFillIcon
                                        className={`size-6 ${pathname === "/accounts"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/accounts" ? `text-primary-300` : `text-primary-400`}`}>
                                        Account
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/investments"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/investments" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgInvestmentFillIcon
                                        className={`size-6 ${pathname === "/investments"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/investments" ? `text-primary-300` : `text-primary-400`}`}>
                                        Investment
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/credit"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/credit" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgCreditFillIcon
                                        className={`size-6 ${pathname === "/credit"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/credit" ? `text-primary-300` : `text-primary-400`}`}>
                                        Credit
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/loan"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/loan" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgLoanFillIcon
                                        className={`size-6 ${pathname === "/loan"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/loan" ? `text-primary-300` : `text-primary-400`}`}>
                                        Loan
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/services"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/services" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgServiceFillIcon
                                        className={`size-6 ${pathname === "/services"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/services" ? `text-primary-300` : `text-primary-400`}`}>
                                        Service
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/privilege"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/privilege" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgPrivillageFillIcon
                                        className={`size-6 ${pathname === "/privilege"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/privilege" ? `text-primary-300` : `text-primary-400`}`}>
                                        My Privileges
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/settings"}
                                className={`flex pl-4 relative items-center group mx-auto py-3 group transition  `}
                            >
                                <div className={`group-hover:border-r-8 group-hover:absolute group-hover:left-0 group-hover:w-1.5 group-hover:h-[60px] group-hover:text-primary-300 group-hover:rounded-tr-3xl group-hover:rounded-br-3xl group-hover:border-r-primary-300 ${pathname === "/settings" && "border-r-8 absolute left-0 w-1.5 h-[60px] text-primary-300 rounded-tr-3xl rounded-br-3xl  border-r-primary-300"}`} />
                                <div className="flex pl-[31px] gap-5 relative items-center ">
                                    <SvgSettingFillIcon
                                        className={`size-6 ${pathname === "/settings"
                                            ? "fill-primary-300"
                                            : "fill-primary-400 group-hover:fill-primary-300"
                                            } `}
                                    />

                                    <h2 className={`text-lg  font-medium line-clamp-1 group-hover:text-primary-300 ${pathname === "/settings" ? `text-primary-300` : `text-primary-400`}`}>
                                        Settings
                                    </h2>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>


        </>
    );
};

export default SideNav;
