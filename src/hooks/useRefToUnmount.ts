import { MutableRefObject, useEffect, useRef } from "react";


export const useRefToUnmount = (state: any) => {

    const refLocalBudget = useRef();

    useEffect(() => {
        refLocalBudget.current = state;
    }, [state])

    return refLocalBudget;
}