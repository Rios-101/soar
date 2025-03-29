import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { GrSend } from "react-icons/gr";



const users = [
    { image: `/ceo.png`, name: `Livia Bator`, role: `CEO`, highlight: true },
    { image: `/user.png`, name: `Randy Press`, role: `Director`, highlight: false },
    { image: `/user1.png`, name: `Workman`, role: `Designer`, highlight: false },
    { image: `/user1.png`, name: `Workman`, role: `Designer`, highlight: false },
]

const UserCard: React.FC = () => {
    return (
        <div className="mt-3">
            <h1 className="lg:text-[22px] text-primary-200 font-semibold lg:mb-2 mb-4">Quick Transfer</h1>
            <div className="bg-white flex flex-col items-center justify-center w-full p-4 rounded-xl shadow-lg h-[270px] ">
                <div className="flex items-center justify-center space-x-4 overflow-hidden">
                    {users.slice(0, 3).map((user, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-12 h-12 lg:w-8 lg:h-8 xl:w-[60px] xl:h-[60px] rounded-full object-cover "
                            />
                            <p className={`text-xs lg:text-[10px] xl:text-sm ${user.highlight && `font-semibold`} text-primary-300`}>{user.name}</p>
                            <p className={`text-xs xl:text-[15px] text-primary-500 ${user.highlight && `font-semibold`}`}>{user.role}</p>
                        </div>
                    ))}
                    <div className="xl:flex hidden items-center justify-center w-12 text-primary-500 h-12 rounded-full bg-white shadow-2xl"><FaAngleRight /></div>
                </div>
                <div className="mt-4 flex items-center">
                    <p className="text-sm lg:text-xs xl:text-base text-primary-500 text-center w-[40%]">Write Amount</p>
                    <div className="relative flex items-center w-[60%] bg-primary-700 pl-2 rounded-full h-[50px]  ">

                        <input
                            type="text"
                            value={525.50}
                            placeholder="Search for something"
                            className="bg-transparent outline-none text-sm w-full placeholder:text-[15px] text-primary-600"
                        />
                        <div className="bg-primary-300 hover:bg-primary-300/80 cursor-pointer py-3 gap-2 xl:px-6 px-2 rounded-full flex items-center ">
                            <p className="text-sm xl:text-base text-white">Send</p>
                            <GrSend className="text-white text-[25px]" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserCard;
