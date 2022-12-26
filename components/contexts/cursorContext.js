import { createContext, useContext } from 'react';
import { initialState } from '../contexts/cursorStates';

// context
export const UIContext = createContext(initialState);

// useUI hook function
export function useUI() {
  let context = useContext(UIContext);
  if (!context) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
}
