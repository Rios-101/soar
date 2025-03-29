import React, { useEffect, useState } from "react";

const PieChart = () => {
    const [Chart, setChart] = useState<any>(null);
    const [chartWidth, setChartWidth] = useState(300);

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("react-apexcharts").then((mod) => setChart(() => mod.default));


            const handleResize = () => {
                setChartWidth(window.innerWidth < 1024 ? 300 : 300);
            };

            handleResize(); // Set initial size
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    if (!Chart) return null;

    const options = {
        chart: {
            type: "pie" as const,
        },
        labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
        colors: ["#2C3456", "#E47934", "#3D5AFE", "#191919"],
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -30,
                },
                expandOnClick: false,
                startAngle: 300,
                endAngle: 660,
                offsetY: 0,
                donut: {
                    size: "0%",
                },
            },
        },
        dataLabels: {
            style: {
                fontSize: "12px",
                fontWeight: "bold",
                colors: ["#ffffff"],
            },
            formatter: (val: number, opts: any) => {
                const label = opts.w.globals.labels[opts.seriesIndex];
                return [`${val}%`, label];
            },
            dropShadow: {
                enabled: true,
            },
            textAnchor: "middle" as const,
            distributed: true,
            position: "center" as const,
        },
        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 5,
            colors: ["#ffffff"],
        },
    };

    const series = [30, 15, 20, 35];

    return (
        <div className="mt-3">
            <h1 className="lg:text-[22px] text-primary-200 font-semibold lg:mb-2 mb-4">Expense Statistics</h1>
            <div className="flex justify-center items-center p-4 h-[380px] w-full bg-white rounded-lg">
                <Chart
                    options={{
                        ...options,
                        states: {
                            hover: { filter: { type: "none" } },
                            active: { filter: { type: "none" } },
                        },
                    }}
                    series={series}
                    type="pie"
                    width={chartWidth}
                />
            </div>
        </div>
    );
};

export default PieChart;
