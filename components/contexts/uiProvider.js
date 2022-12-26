import { useMemo, useReducer } from 'react';
import { initialState } from '../contexts/cursorStates';
import { UIContext } from '../contexts/cursorContext';

// reducer
function reducer(state, action) {
  switch (action.type) {
    case 'SET_CURSOR_SIZE':
      return {
        ...state,
        cursorSize: action.size,
      };
    default:
      return state;
  }
}

// provider
export default function UIProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);

  function setCursorSize(size) {
    dispatch({ type: 'SET_CURSOR_SIZE', size });
  }

  let value = useMemo(
    () => ({
      ...state,
      setCursorSize,
    }),
    [state]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
