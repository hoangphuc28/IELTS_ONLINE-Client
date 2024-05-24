import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux"
import { AppShareDispatch, AppShareStore, RootShareState } from "./store"

export const useAppShareStore = useStore.withTypes<AppShareStore>()
export const useAppShareSelector = useSelector.withTypes<RootShareState>()
export const useAppShareDispatch = useDispatch.withTypes<AppShareDispatch>()
