import React, { createContext, useReducer } from 'react';
import { State, Action } from './types';
import { initialState } from './constant';

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const BuilderContext = createContext<ContextType | undefined>(undefined);

const itemReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'MODIFY_ITEM':
      return {
        ...state,
        items: action.payload
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
type Props = {
  children: JSX.Element
}
export const BuilderProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  return (
    <BuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </BuilderContext.Provider>
  );
};


