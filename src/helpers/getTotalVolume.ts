import Order from "@/types/Order";

export default function getTotalVolume(orders: Order[]) {
    const ordersTotalVolume = orders
        .reduce((accumulator, currentValue) => accumulator + currentValue.volume, 0);

        return ordersTotalVolume;
}
