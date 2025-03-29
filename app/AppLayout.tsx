
import type { ReactNode } from "react";
import SideNav from "./Components/General/SideNav";
import Header from "./Components/General/Header";

interface AppLayoutProps {
    children: ReactNode;
    className?: string;
}

const AppLayout = ({ children, className }: AppLayoutProps) => {
    return (
        <>
            <main className='flex relative h-screen'>
                <SideNav />
                <div className='overflow-y-scroll w-full lg:w-[84%] relative bg-primary-700'>
                    <Header />
                    <div
                        className={`w-full relative pt-6 xl:pt-6 pb-6 lg:px-8 px-5 ${className}`}
                    >
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};

export default AppLayout;
