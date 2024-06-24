import dayjs from "dayjs";

export default function getMonth(date: string) {
    return dayjs(date.split('.').reverse().join('.')).format('MMMM');
}
