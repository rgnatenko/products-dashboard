import Order from "@/types/Order";
import formatVolume from "./formateVolume";
import getTotalVolume from "./getTotalVolume";

export default function summarizeAndFormatVolume(orders: Order[]) {
    const ordersTotalVolume = getTotalVolume(orders);

        if (ordersTotalVolume === 0) {
            return null;
        }

    return formatVolume(ordersTotalVolume);
}
