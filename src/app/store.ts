import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from "../features/counter/model/counter-reducer.ts";


const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('counterState')
    if (serializedState === null) {
      return undefined
    }
    return {counter: JSON.parse(serializedState)}
  } catch (err) {
    return undefined
  }
};

const rootReducer = combineReducers({
  counter: counterReducer
});

const persistedState = loadStateFromLocalStorage();


export const store = createStore(
    rootReducer,
    persistedState
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Для отладки
// @ts-ignore
window.store = store;