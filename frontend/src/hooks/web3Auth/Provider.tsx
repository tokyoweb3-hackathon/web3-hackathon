import { createContext, ReactNode, useReducer } from "react";
import { reducer, State, Web3AuthAction } from "./reducer";

const initState = { provider: null, account: "" };
export const Web3AuthStateContext = createContext<State>(initState);
export const Web3AuthDispatchContext = createContext<
  React.Dispatch<Web3AuthAction>
>(() => {});

export function Web3AutProvider({ children }: { children?: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Web3AuthStateContext.Provider value={state}>
      <Web3AuthDispatchContext.Provider value={dispatch}>
        {children}
      </Web3AuthDispatchContext.Provider>
    </Web3AuthStateContext.Provider>
  );
}
