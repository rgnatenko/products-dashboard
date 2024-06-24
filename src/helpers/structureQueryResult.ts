import { Month } from "@/types/Month";
import Order from "@/types/Order";
import Target from "@/types/Target";
import convertCurrencyToNumber from "./convertCurrencyToNumber";

interface TStructureQueryResultsParams {
    queryResults: string[][],
    callback: (arg: any) => boolean
}

export const structureQueryResults = {
    orders({ queryResults, callback }: TStructureQueryResultsParams) {

        const structuredOrders: Order[] = queryResults.slice(1).map(order => ({
            number: Number(order[0]),
            date: order[1],
            productName: order[2],
            volume: convertCurrencyToNumber(order[3])
        })).filter(callback);

        return structuredOrders;
    },

    target({ queryResults, callback }: TStructureQueryResultsParams) {
        let structuredTargets: Target[] = queryResults.map(target => ({
            month: target[0] as Month,
            targetVolume: convertCurrencyToNumber(target[1])
        }));

        return structuredTargets.find(callback);
    }
};
