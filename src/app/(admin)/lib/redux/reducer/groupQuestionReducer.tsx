import { PayloadAction, createSlice, Draft } from "@reduxjs/toolkit";
import { GroupQuestion } from "../../../admin/parts/type/GroupQuestion.class";

interface GroupQuestionState {
    list: Draft<GroupQuestion>[];
    loading: boolean;
    error: string | null;
}

const initialState: GroupQuestionState = {
    list: [],
    loading: false,
    error: null
};

export const groupQuestionSlice = createSlice({
    name: 'groupQuestions',
    initialState,
    reducers: {
        setList(state, action: PayloadAction<any[]>) {
            state.list = action.payload
        },
    }
});

// Action creators are generated for each case reducer function
export const { setList } = groupQuestionSlice.actions;

export default groupQuestionSlice.reducer;
