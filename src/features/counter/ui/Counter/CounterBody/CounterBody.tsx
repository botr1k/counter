import {incrementAC, resetAC} from "../../../model/counter-reducer.ts";
import {useAppDispatch, useAppSelector} from "@/app/hooks.ts";
import {selectCounter} from "../../../model/counter-select.ts";
import {Button} from "@/common/components/button.tsx";
import {Input} from "@/common/components/input.tsx";


type Props = {
  toggleSettings: () => void
};

export const CounterBody = (props: Props) => {
  const {toggleSettings} = props

  const counter = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()

  const increment = () => {
    dispatch(incrementAC())
  }

  const reset = () => {
    dispatch(resetAC())
  }

  return (
      <div className="space-y-4">
        <Input className="text-center text-2xl font-bold" value={counter.value} readOnly/>

        <div className="flex justify-between">
          <Button onClick={increment}>Увеличить</Button>
          <Button onClick={reset} variant={'outline'}>Сбросить</Button>
        </div>

        <Button className="w-full" onClick={toggleSettings} variant="secondary">Настройки</Button>
      </div>
  );
};