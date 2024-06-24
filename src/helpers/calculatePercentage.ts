interface TCalculatePercentageParams {
    volumeToCalculate: number, 
    totalVolume: number
}

export default function calculatePercentage({ volumeToCalculate, totalVolume }:TCalculatePercentageParams) {
    if (totalVolume === 0) {
        return 0;
    }

    const percentage = (volumeToCalculate / totalVolume) * 100;
    return percentage;
}
