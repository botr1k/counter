import {RootState} from "@/app/store.ts";
import {CounterState} from "../ui/Counter/Counter.tsx";

export const selectCounter = (state: RootState): CounterState => state.counter