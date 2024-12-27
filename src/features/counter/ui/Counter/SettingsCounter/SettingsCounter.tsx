import {ChangeEvent, useState} from "react";
import {setMaxValueAC, setStartValueAC} from "../../../model/counter-reducer.ts";
import {useAppDispatch, useAppSelector} from "@/app/hooks.ts";
import {selectCounter} from "../../../model/counter-select.ts";
import {Input} from "@/common/components/input.tsx";
import {Button} from "@/common/components/button.tsx";
import {Alert, AlertDescription} from "@/common/components/alert.tsx";


type Props = {
  toggleSettings: () => void
};

export const SettingsCounter = (props: Props) => {

  const {toggleSettings} = props

  const [error, setError] = useState<string | null>(null)

  const {startValue, maxValue} = useAppSelector(selectCounter)

  const dispatch = useAppDispatch()


  const [localStartValue, setLocalStartValue] = useState<string>(startValue.toString());
  const [localMaxValue, setLocalMaxValue] = useState<string>(maxValue.toString());


  const setStartValue = (startValue: number) => {
    dispatch(setStartValueAC(startValue))
  }

  const setMaxValue = (maxValue: number) => {
    dispatch(setMaxValueAC(maxValue))
  }

  const changeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setLocalStartValue(newValue)

    if (newValue === '') {
      setError(null)
      return
    }

    if (+newValue >= 0 && +newValue < maxValue) {
      setError(null)
      setStartValue(+newValue)
    } else {
      setError('Начальное значение должно быть больше или равно 0\u00A0и\u00A0меньше максимального значения.');
    }
  }

  const changeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setLocalMaxValue(newValue)

    if (newValue === '') {
      setError(null);
      return;
    }

    if (+newValue >= 0 && +newValue > startValue) {
      setError(null);
      setMaxValue(+newValue);
    } else {
      setError('Максимальное значение должно быть больше или равно 0\u00A0и\u00A0больше начального значения.');
    }
  }

  return (
      <div className="space-y-4">

        {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        <div>
          <label className='block text-sm font-medium text-gray-700' htmlFor='min'>Минимальное значение</label>
          <Input id='min' type='number' value={localStartValue} onChange={changeStartValueHandler}/>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700' htmlFor='max'>Максимальное значение</label>
          <Input id='max' type="number" value={localMaxValue} onChange={changeMaxValueHandler}/>
        </div>

        <Button className='w-full' onClick={toggleSettings} disabled={!!error}>Сохранить и вернуться</Button>

      </div>
  );
};

