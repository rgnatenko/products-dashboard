import formatVolume from "@/helpers/formateVolume";
import getTotalVolume from "@/helpers/getTotalVolume";
import { normalizeTextLength } from "@/helpers/normalizeTextLength";
import Order from "@/types/Order";
import { Progress } from "./ui/progress";
import calculatePercentage from "@/helpers/calculatePercentage";
import { filterOrders } from "@/helpers/filterOrders";

export default function DashboardCards({ orders }: { orders: Order[] }) {
  const recentOrders = filterOrders.sortByDate(orders).slice(0, 5);
  const topOrders = filterOrders
    .sortByVolume(filterOrders.filterByVolume(orders))
    .slice(0, 5);

  const ordersTotalVolume = getTotalVolume(orders);

  return (
    <div className="w-full flex items-center gap-4 h-full">
      <div className="p-4 w-[50%] bg-gray-700 flex flex-col h-full">
        <p className="text-lg text-white mb-4">5 recent orders</p>

        <div className="flex flex-col gap-3 max-h-20 overflow-auto">
          {recentOrders.map((order) => (
            <div
              key={order.productName}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <p className="text-sm text-white">{order.number}</p>
                <p className="text-sm text-white">{order.date}</p>
                <p className="text-sm text-white">
                  {normalizeTextLength(order.productName, 16, "...")}
                </p>
              </div>

              <p className="font-bold text-sm text-white">
                {formatVolume(order.volume)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {topOrders.length > 0 && (
        <div className="p-4 w-[50%] bg-gray-700 flex flex-col h-full">
          <p className="text-lg text-white mb-4">5 top orders</p>

          <div className="flex flex-col gap-3 max-h-20 overflow-auto">
            {topOrders.map((order) => (
              <div
                key={order.productName}
                className="flex items-center justify-between"
              >
                <div className="flex items-center justify-between w-[80%]">
                  <p className="text-sm text-white block w-max">
                    {normalizeTextLength(order.productName, 16, "...")}
                  </p>

                  <Progress
                    className="h-3 w-[70%]"
                    value={calculatePercentage({
                      volumeToCalculate: order.volume,
                      totalVolume: ordersTotalVolume,
                    })}
                  />
                </div>

                <p className="font-bold text-sm text-white">
                  {formatVolume(order.volume)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
