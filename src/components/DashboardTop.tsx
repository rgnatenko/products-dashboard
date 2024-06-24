import { useAppDispatch } from "@/redux/hooks";
import { useDate } from "@/redux/selectors";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { setSelectedMonth, setSelectedYear } from "@/redux/features/date";
import { handleDateChanging } from "@/helpers/handleDateChanging";

export default function DashboardTop() {
    const { selectedMonth, selectedYear } = useDate();
    const dispatch = useAppDispatch();

    const changeDate = (direction: 'previous' | 'next') => {
        const { newMonth, newYear } = handleDateChanging({
            selectedMonth,
            selectedYear,
            direction
        });

        dispatch(setSelectedMonth(newMonth));
        dispatch(setSelectedYear(newYear));
    };

    const isDisabled = selectedYear === new Date().getFullYear() && selectedMonth === 'December';

    return (
        <div className="w-full flex items-end gap-16">
            <div className="flex flex-col w-[20%]">
                <p className="text-[12px] text-slate-500">Order Dashboard</p>
                <p className="text-xl text-white font-bold">{selectedMonth} {selectedYear}</p>
            </div>

            <div className="flex gap-3">
                <Button variant="secondary" onClick={() => changeDate('previous')}>
                    <ArrowLeft className="text-white w-3 h-3" />
                </Button>

                <Button
                    variant="secondary"
                    onClick={() => changeDate('next')}
                    disabled={isDisabled}
                >
                    <ArrowRight className="text-white w-3 h-3" />
                </Button>
            </div>
        </div>
    );
}
