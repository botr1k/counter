import {CounterState} from "../ui/Counter/Counter.tsx";

type Actions =
    | Increment
    | Reset
    | ToggleSettings
    | SetStartValue
    | SetMaxValue

const initialState: CounterState = {
    value: 0,
    startValue: 0,
    maxValue: 10,
    isSettingsOpen: false
}

export const counterReducer = (state: CounterState = initialState, action: Actions): CounterState => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                value: state.value < state.maxValue ? state.value + 1 : state.value
            }
        }

        case "RESET": {
            return {
                ...state,
                value: state.startValue
            }
        }

        case "TOGGLE_SETTINGS": {
            return {
                ...state,
                isSettingsOpen: !state.isSettingsOpen
            }
        }

        case "SET_START_VALUE": {
            return {
                ...state,
                startValue: action.payload.startValue,
                value: action.payload.startValue
            }
        }

        case "SET_MAX_VALUE": {
            return {
                ...state,
                maxValue: action.payload.maxValue,
            }
        }

        default:
            return state
    }
}


export const incrementAC = () => ({type: 'INCREMENT'} as const);
export const resetAC = () => ({type: 'RESET'} as const);
export const toggleSettingsAC = () => ({type: 'TOGGLE_SETTINGS'} as const);
export const setStartValueAC = (startValue: number) => ({type: 'SET_START_VALUE', payload: {startValue}} as const);
export const setMaxValueAC = (maxValue: number) => ({type: 'SET_MAX_VALUE', payload: {maxValue}} as const);


export type Increment = ReturnType<typeof incrementAC>
export type Reset = ReturnType<typeof resetAC>
export type ToggleSettings = ReturnType<typeof toggleSettingsAC>
export type SetStartValue = ReturnType<typeof setStartValueAC>
export type SetMaxValue = ReturnType<typeof setMaxValueAC>