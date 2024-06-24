import { Month } from "@/types/Month";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TDateInitialState {
    selectedMonth: Month,
    selectedYear: number,
}

const initialState: TDateInitialState = {
    selectedMonth: 'January',
    selectedYear: 2022
};

const dateSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setSelectedMonth: (state, action: PayloadAction<Month>) => {
            state.selectedMonth = action.payload;
        },

        setSelectedYear: (state, action: PayloadAction<number>) => {
            state.selectedYear = action.payload;
        },
    }
});

export const { setSelectedMonth, setSelectedYear } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
