import Order from "@/types/Order";
import DashboardTop from "./DashboardTop";
import TargetProgressBar from "./Target";
import DashboardCards from "./DashboardCards";
import summarizeAndFormatVolume from "@/helpers/summarizeAndFormatVolume";
import getTotalVolume from "@/helpers/getTotalVolume";
import Circles from "./Circles";

export default function Dashboard({ orders }: { orders: Order[] }) {
    const ordersTotalVolume = summarizeAndFormatVolume(orders)

    return (
        <>
            <DashboardTop />

            <Circles />

            {ordersTotalVolume && (
                <div className="w-full font-bold text-[120px] text-white">
                    {ordersTotalVolume}
                </div>
            )}

            {!orders.length && (
                <div className="relative z-30 w-full font-bold text-[80px] leading-none text-white mb-44">
                    No income for this month
                </div>
            )}

            {orders.length > 0 && (
                <div className="flex flex-col gap-8 w-full h-52">
                    <TargetProgressBar
                        ordersTotalVolume={getTotalVolume(orders)}
                    />

                    <DashboardCards orders={orders} />
                </div>
            )}
        </>
    );
}
