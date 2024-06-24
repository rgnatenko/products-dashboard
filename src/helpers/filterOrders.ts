import Order from "@/types/Order";

function parseDate(dateString: string) {
    const [day, month, year] = dateString.split('.');
    return new Date(`${year}-${month}-${day}`);
}

export const filterOrders = {
    sortByDate(orders: Order[]) {
        return orders.sort((a, b) => +parseDate(b.date) - +parseDate(a.date));
    },

    filterByVolume(orders: Order[]) {
        return orders.filter(order => order.volume > 1000);
    },

    sortByVolume(orders: Order[]) {
        return orders.sort((a, b) => b.volume - a.volume)
    }
};
