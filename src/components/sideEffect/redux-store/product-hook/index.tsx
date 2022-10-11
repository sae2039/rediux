import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, appDispatch } from "../index";

export const useAppDispatch = () => useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
