import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Part } from "../../../admin/parts/type/Part.class";
import { PartEnum, SkillEnum } from "../../../admin/parts/type/enum";
import { PaginationInterface } from "../../type/pagination";

interface PartState {
    list: Part[];
    totalPage: number;
    partEdit: Part | null;
    pagination: PaginationInterface
}

const initialState: PartState = {
    list: [],
    totalPage: 0,
    partEdit: null,
    pagination: {
        page: 1,
        limit: 10,
        search: '',
        filter: {
            skill: '',
            partNumber: ''
        }
    }
};

export const partSlice = createSlice({
    name: 'parts',
    initialState,
    reducers: {
        setPartList(state, action: PayloadAction<any>) {
            state.list = action.payload.parts;
            state.totalPage = action.payload.totalPage;
        },
        setPartEdit(state, action: PayloadAction<Part>) {
            state.partEdit = action.payload;
        },
        setPartPagination(state, action: PayloadAction<PaginationInterface>) {
            state.pagination = action.payload;
        }
    }
});

export const { setPartList, setPartEdit, setPartPagination } = partSlice.actions;

export default partSlice.reducer;
