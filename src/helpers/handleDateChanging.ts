import { Month } from "@/types/Month";

const months: Month[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

interface THandleDateChangingParams {
    selectedMonth: Month,
    selectedYear: number,
    direction: 'previous' | 'next'
}

export const handleDateChanging = ({
    selectedMonth,
    selectedYear,
    direction
}: THandleDateChangingParams) => {
    const currentIndex = months.indexOf(selectedMonth);

    let newIndex = currentIndex;
    let newYear = selectedYear;

    if (direction === 'previous') {
        newIndex = currentIndex - 1;

        if (newIndex < 0) {
            newIndex = months.length - 1;
            newYear--;
        }
    }

    if (direction === 'next') {
        newIndex = currentIndex + 1;

        if (newIndex >= months.length) {
            // if (newYear === new Date().getFullYear()) {
            //     return { newMonth: selectedMonth, newYear: selectedYear };
            // }

            newIndex = 0;
            newYear++;
        }
    }

    return { newMonth: months[newIndex], newYear };
};
