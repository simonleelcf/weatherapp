export const CHANGE_INPUT = "CHANGE_INPUT";
export const TOGGLE_UNIT = "TOGGLE_UNIT";

export const changeInputAction = input => ({
    type: CHANGE_INPUT,
    payload: {
        input,
    }
})

export const toggleUnitAction = () => ({
    type: TOGGLE_UNIT,
})