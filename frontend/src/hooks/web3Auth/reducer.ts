import { SafeEventEmitterProvider } from "@web3auth/base";

export type State = {
  provider: SafeEventEmitterProvider | null;
  account: string;
};

export enum Web3AuthActionType {
  ACTION_SET_PROVIDER = "ACTION_SET_PROVIDER",
  ACTION_CLEAR_PROVIDER = "ACTION_CLEAR_PROVIDER",
  ACTION_SET_ACCOUNT = "ACTION_SET_ACCOUNT",
  ACTION_CLEAR_ACCOUNT = "ACTION_CLEAR_ACCOUNT",
}

export type Web3AuthAction =
  | {
      type:
        | Web3AuthActionType.ACTION_SET_ACCOUNT
        | Web3AuthActionType.ACTION_CLEAR_ACCOUNT;
      payload: Pick<State, "account">;
    }
  | {
      type: Web3AuthActionType.ACTION_SET_PROVIDER;
      payload: Pick<State, "provider">;
    }
  | {
      type: Web3AuthActionType.ACTION_CLEAR_PROVIDER;
    };

type Reducer = (state: State, action: Web3AuthAction) => State;

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case Web3AuthActionType.ACTION_SET_PROVIDER:
      return { ...state, provider: action.payload.provider };
    case Web3AuthActionType.ACTION_CLEAR_PROVIDER:
      return { provider: null, account: "" };
    case Web3AuthActionType.ACTION_SET_ACCOUNT:
      return { ...state, account: action.payload.account };
    default:
      return state;
  }
};
