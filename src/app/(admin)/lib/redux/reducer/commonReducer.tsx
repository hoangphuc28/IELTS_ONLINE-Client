import { PayloadAction, createSlice, Draft } from "@reduxjs/toolkit";
import { GroupQuestion } from "../../../admin/parts/type/GroupQuestion.class";

interface CommonState {
    isLoading: boolean;
    error: string | null;
}

const initialState: CommonState = {
    isLoading: false,
    error: null
};

export const commonSlice = createSlice({
    name: 'commonStates',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
    }
});

// Action creators are generated for each case reducer function
export const { setLoading } = commonSlice.actions;

export default commonSlice.reducer;
