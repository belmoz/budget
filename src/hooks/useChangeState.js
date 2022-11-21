import { useState } from "react"


export const useChangeState = (initialValue, type) => {

    const [value, setValue] = useState(initialValue);


    // const addCommas = (value) => {
    //     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    // };
    const removeNonNumeric = (value) => {
        return value.toString().replace(/[^0-9]/g, "")
    };

    const onChange = (e) => {
        if (type === 'number') {
            setValue(removeNonNumeric(e.target.value))
        } else {
            setValue(e.target.value)
        }
    }

    return {
        value,
        setValue,
        onChange,
    }
}