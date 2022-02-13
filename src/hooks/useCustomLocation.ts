import {Location, useLocation} from 'react-router-dom';

export function useCustomLocation<T>() {
    type L = Location & { state: T };

    return useLocation() as L;
}