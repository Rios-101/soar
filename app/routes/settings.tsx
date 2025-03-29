import React, { useEffect, useState, type ReactElement } from 'react'
import AppLayout from '~/AppLayout'
import Edit from '~/Components/General/Edit';
import Preferences from '~/Components/General/Preferences';
import Security from '~/Components/General/Security';

const Settings = () => {

    const [section, setSection] = useState("editProfile");

    let componentToRender: ReactElement;

    switch (section) {
        case "editProfile":
            componentToRender = <Edit />;
            break;
        case "perferences":
            componentToRender = <Preferences />;
            break;
        case "security":
            componentToRender = <Security />;
            break;
        default:
            componentToRender = <Edit />;
    }

    const handleSectionChange = (newSection: string) => {
        setSection(newSection);
    };

    return (
        <AppLayout>
            <div className='px-4 py-6 bg-white rounded-3xl'>
                <div className='flex gap-6 items-center w-full border-b border-primary-1200 '>
                    {["editProfile", "perferences", "security"].map((setting) => {
                        // Transforming setting string to capitalize each word
                        const formattedSetting = setting
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, (str) => str.toUpperCase());
                        return (
                            <button
                                key={setting}
                                className={`${section === setting
                                    ? "text-primary-300 border-b-4 rounded-tl-[20px] rounded-tr-[20px] font-medium "
                                    : " font-medium text-bg2-700 text-primary-500 "
                                    } text-[10px] lg:text-[15px] border-primary-300 px-2 pb-2 cursor-pointer`}
                                onClick={() => handleSectionChange(setting)}
                            >
                                {formattedSetting}
                            </button>
                        )
                    })}
                </div>

                <div className=''>{componentToRender}</div>
            </div>
        </AppLayout>
    )
}

export default Settings