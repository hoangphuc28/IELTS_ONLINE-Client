import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Part } from "../../questions/type/Part.class";

interface PartState {
    list: Part[];
    partEdit: Part | null;
    loading: boolean;
    error: string | null;
}

const initialState: PartState = {
    list: [],
    partEdit: null,
    loading: false,
    error: null
};

export const partSlice = createSlice({
    name: 'parts',
    initialState,
    reducers: {
        setPartList(state, action: PayloadAction<Part[]>) {
            state.list = action.payload;
        },
        setPartEdit(state, action: PayloadAction<Part>) {
            state.partEdit = action.payload;
        }
    }
});

export const { setPartList, setPartEdit } = partSlice.actions;

export default partSlice.reducer;
