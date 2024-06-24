import { useAppSelector } from "../hooks";

export const useDate = () => useAppSelector(state => state.date);
