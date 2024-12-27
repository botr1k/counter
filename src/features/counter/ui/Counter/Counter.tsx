import {toggleSettingsAC} from "../../model/counter-reducer.ts";
import {CounterBody} from "./CounterBody/CounterBody.tsx";
import {SettingsCounter} from "./SettingsCounter/SettingsCounter.tsx";
import {useAppDispatch, useAppSelector} from "@/app/hooks.ts";
import {useEffect} from "react";
import {selectCounter} from "../../model/counter-select.ts";
import {Card, CardContent, CardHeader, CardTitle} from "@/common/components/card.tsx";
import {ModeToggle} from "@/common/components/mood-toggle.tsx";

export type CounterState = {
  value: number
  startValue: number
  maxValue: number
  isSettingsOpen: boolean
}

export const Counter = () => {

  const counter = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    localStorage.setItem('counterState', JSON.stringify(counter));
  }, [counter]);


  const toggleSettings = () => {
    dispatch(toggleSettingsAC())
  }


  return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle>{counter.isSettingsOpen ? "Настройки счётчика" : "Счётчик"}</CardTitle>
          <ModeToggle/>
        </CardHeader>
        <CardContent>
          {
            counter.isSettingsOpen
                ? <SettingsCounter toggleSettings={toggleSettings}
                />
                : <CounterBody toggleSettings={toggleSettings}
                />
          }
        </CardContent>
      </Card>
  );
};

