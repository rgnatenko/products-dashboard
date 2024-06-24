'use client';
import Dashboard from "@/components/Dashboard";
import Preloader from "@/components/Preloader";
import { Skeleton } from "@/components/ui/skeleton";
import getMonth from "@/helpers/getMonth";
import { structureQueryResults } from "@/helpers/structureQueryResult";
import { useDate } from "@/redux/selectors";
import Order from "@/types/Order";
import axios from "axios";
import { useQuery } from "react-query";

export default function Home() {
  const { selectedMonth, selectedYear } = useDate();

  async function fetchOrders() {
    const { data } = await axios.get('/api/orders');
    return data;
  }

  const {
    data: queryResults,
    isLoading,
    error,
    isError
  } = useQuery('orders', fetchOrders);

  const orders = queryResults || [];

  const structuredOrders = structureQueryResults.orders({
    queryResults: orders,
    callback: (order: Order) => getMonth(order.date) === selectedMonth
      && new Date(order.date).getFullYear() === selectedYear
  });

  if (isLoading) return <Preloader />;

  if (isError) return <p>{String(error)}</p>

  if (queryResults) {
    return (
      <Dashboard orders={structuredOrders} />
    );
  }
}
