import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    { name: "Sat", withdraw: 450, deposit: 230 },
    { name: "Sun", withdraw: 340, deposit: 130 },
    { name: "Mon", withdraw: 310, deposit: 240 },
    { name: "Tue", withdraw: 460, deposit: 350 },
    { name: "Wed", withdraw: 150, deposit: 230 },
    { name: "Thu", withdraw: 370, deposit: 230 },
    { name: "Fri", withdraw: 380, deposit: 320 },
];

const useResponsiveValues = () => {
    const [values, setValues] = useState({ barGap: -40, maxBarSize: 15 });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let barGap, maxBarSize;

            if (width < 640) {
                barGap = -6;
                maxBarSize = 8;
            } else if (width < 768) {
                barGap = -35;
                maxBarSize = 12;
            } else {
                barGap = -40;
                maxBarSize = 12;
            }

            setValues({ barGap, maxBarSize });
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return values;
};

const CustomLegend = () => (
    <div className="flex gap-2 justify-end mt-3 mb-5 mr-4">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary-800 rounded-full" />
            <span className="text-sm text-primary-500">Deposit</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary-300 rounded-full" />
            <span className="text-sm text-primary-500">Withdraw</span>
        </div>
    </div>
);

const WeeklyChart = () => {
    const { barGap, maxBarSize } = useResponsiveValues();

    return (

        <div className="mt-3">
            <h1 className="lg:text-[22px] text-primary-200 font-semibold lg:mb-2 mb-4">Weekly Activity</h1>
            <div className="h-[380px] w-full bg-white rounded-lg pb-10">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 30, right: 20, left: 20, bottom: 0 }} barGap={barGap}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-gray-300" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#718EBF" }} dy={10} className="text-sm" />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#718EBF" }} domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} className="text-sm" />
                        <Legend content={<CustomLegend />} verticalAlign="top" align="left" />
                        <Bar dataKey="withdraw" fill="#232323" radius={[10, 10, 10, 10]} maxBarSize={maxBarSize} name="Withdraw" />
                        <Bar dataKey="deposit" fill="#396AFF" radius={[10, 10, 10, 10]} maxBarSize={maxBarSize} name="Deposit" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyChart;
