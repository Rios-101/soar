import React from 'react'

// TypeScript types
interface Transaction {
    id: number;
    type: string;
    name: string;
    date: string;
    amount: string;
    isDeposit: boolean;
    icon: string;
}


const transactions: Transaction[] = [
    {
        id: 1,
        type: "Deposit from my Card",
        name: "05 January 2023",
        date: "05 January 2023",
        amount: "850",
        isDeposit: false,
        icon: "/card.png"
    },
    {
        id: 2,
        type: "Deposit Payroll",
        name: "22 January 2023",
        date: "22 January 2023",
        amount: "2,900",
        isDeposit: true,
        icon: "/paypal.png"
    },
    {
        id: 3,
        type: "Jemi Wilson",
        name: "Jemi Wilson",
        date: "21 January 2023",
        amount: "5,400",
        isDeposit: true,
        icon: "/wilson.png"
    }
];

const RecentTransaction = () => {
    return (
        <div>
            <h1 className="lg:text-[22px] text-primary-200 font-semibold lg:mb-2 mb-4">Recent Transaction</h1>
            <div className="w-full flex flex-col justify-between bg-white lg:border border-primary-900 lg:h-[282px] lg:w-full lg:p-4 p-2 text-primary-200 rounded-3xl overflow-x-auto whitespace-nowrap">
                {transactions.map((ele, index) => (
                    <div key={index} className="flex items-center space-y-2 lg:space-y-0 justify-between flex-shrink-0  lg:min-w-full">
                        <div className="flex items-center xl:gap-8 lg:gap-3 gap-4">
                            <img alt={ele.icon} src={ele.icon} className="w-[50px] h-[50px] lg:h-[40px] lg:w-[40px] xl:h-[55px] xl:w-[55px]" />
                            <div>
                                <p className="text-sm xl:text-base  font-medium">{ele.type}</p>
                                <p className="text-xs xl:text-[15px] text-gray-500">{ele.date}</p>
                            </div>
                        </div>
                        <p className={`xl:text-sm text-[11px] font-medium ${ele.isDeposit ? 'text-primary-1100' : 'text-primary-1000'}`}>
                            {ele.isDeposit ? '+$' : '-$'}{ele.amount}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentTransaction