import getMonth from "@/helpers/getMonth";
import { structureQueryResults } from "@/helpers/structureQueryResult";
import { useDate } from "@/redux/selectors";
import type Target from "@/types/Target";
import axios from "axios";
import { useQuery } from "react-query";
import { Progress } from "./ui/progress";
import formatVolume from "@/helpers/formateVolume";
import calculatePercentage from "@/helpers/calculatePercentage";

export default function TargetProgressBar({ ordersTotalVolume }: { ordersTotalVolume: number }) {
    const { selectedMonth } = useDate();

    async function fetchTargets() {
        const { data } = await axios.get('/api/targets');
        return data;
    }

    const { data: queryResults } = useQuery('targets', fetchTargets);
    const targets = queryResults || [];

    const target = structureQueryResults.target({
        queryResults: targets,
        callback: (target: Target) => target.month === selectedMonth
    });

    const defaultTarget = 100000;
    const monthTargetVolume = formatVolume(target?.targetVolume || defaultTarget);
    const ordersVolumePercentage = calculatePercentage({
        volumeToCalculate: ordersTotalVolume,
        totalVolume: target?.targetVolume || defaultTarget
    });

    return (
        <div className="relative w-full">
            <Progress className="h-6" value={ordersVolumePercentage} />

            <div className="absolute -top-10 right-8 flex flex-col items-center">
                <p className="text-md text-white">{monthTargetVolume}</p>
                <div className="w-1 h-8 bg-white" />
            </div>
        </div>
    );
}
