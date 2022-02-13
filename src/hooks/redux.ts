import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";

import {AppDispatch, RootState} from "../store";

const useCustomDispatch = () => useDispatch<AppDispatch>();
const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
    useCustomDispatch,
    useCustomSelector
}




