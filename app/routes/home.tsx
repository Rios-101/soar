import type { Route } from "./+types/home";
import AppLayout from "~/AppLayout";
import WeeklyChart from "~/Components/General/WeeklyChart";
import PieChart from "~/Components/General/PieChart";
import UserCard from "~/Components/General/UserCard";
import BalanceChart from "~/Components/General/BalanceChart";
import MasterCard from "~/Components/General/MasterCard";
import RecentTransaction from "~/Components/General/RecentTransaction";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Overview" },
    { name: "overview", content: "Soar Overview" },
  ];
}




export default function Home() {

  return (
    <AppLayout>
      <div>
        <div className="flex flex-col lg:gap-8 gap-4 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <MasterCard />
          </div>
          <div className="w-full lg:w-1/3">
            <RecentTransaction />
          </div>
        </div>
        <div className="flex flex-col lg:gap-8 gap-4 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <WeeklyChart />
          </div>
          <div className="w-full lg:w-1/3">
            <PieChart />
          </div>
        </div>
        <div className="flex flex-col lg:gap-8 gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <UserCard />
          </div>
          <div className="w-full lg:w-2/3">
            <BalanceChart />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
