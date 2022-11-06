import { ADAPTER_EVENTS, CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import RPC from "./web3RPC";
import { useContext, useEffect, useState } from "react";
import Router from "next/router";
import { Web3AuthStateContext, Web3AuthDispatchContext } from "./Provider";
import { Web3AuthActionType } from "./reducer";

export const useWeb3Auth = () => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);

  const state = useContext(Web3AuthStateContext);
  const dispatch = useContext(Web3AuthDispatchContext);

  const init = async () => {
    try {
      const web3auth = new Web3Auth({
        clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "",
        // chainConfig: {
        // this is ethereum chain config, change if other chain(Solana, Polygon)
        // chainNamespace: CHAIN_NAMESPACES.EIP155,
        // chainId: "0x1",
        //   rpcTarget:
        //     "https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c",
        // },
        // TEST NET
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x3", // "0x4", "Ox5"
          rpcTarget: "https://rpc.ankr.com/eth_ropsten", // eth_rinkeby, eth_goerli
          displayName: "Ropsten Testnet",
          blockExplorer: "https://ropsten.etherscan.io", // rinkeby, goerli
          ticker: "ETH",
          tickerName: "Ethereum",
        },
      });
      setWeb3auth(web3auth);
      subscribeAuthEvents(web3auth);

      await web3auth.initModal();
      if (web3auth.provider) {
        dispatch({
          type: Web3AuthActionType.ACTION_SET_PROVIDER,
          payload: { provider: web3auth.provider },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const subscribeAuthEvents = (web3AuthInstance: Web3Auth) => {
    web3AuthInstance.on(ADAPTER_EVENTS.CONNECTED, async (data: unknown) => {
      console.log("Yeah!, you are successfully logged in", data);

      if (web3AuthInstance?.provider) {
        const rpc = new RPC(web3AuthInstance.provider);
        const address = await rpc.getAccounts();
        dispatch({
          type: Web3AuthActionType.ACTION_SET_PROVIDER,
          payload: { provider: web3AuthInstance.provider },
        });
        dispatch({
          type: Web3AuthActionType.ACTION_SET_ACCOUNT,
          payload: { account: address },
        });
        Router.push("/myPage");
        return;
      }

      console.error("ログインに失敗しました");
      await logout();
      Router.push("/login");
    });

    web3AuthInstance.on(ADAPTER_EVENTS.CONNECTING, () => {
      console.log("connecting");
    });

    web3AuthInstance.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      console.log("disconnected");
      Router.push("/login");
    });

    web3AuthInstance.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.error("some error or user has cancelled login request", error);
    });
  };

  useEffect(() => {
    init();
  }, [init]);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    dispatch({
      type: Web3AuthActionType.ACTION_SET_PROVIDER,
      payload: { provider: web3authProvider },
    });
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    dispatch({ type: Web3AuthActionType.ACTION_CLEAR_PROVIDER });
  };

  const getChainId = async () => {
    if (!state.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(state.provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  };
  const getAccounts = async () => {
    if (!state.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(state.provider);
    const address = await rpc.getAccounts();

    return address;
  };

  const getBalance = async () => {
    if (!state.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(state.provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!state.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(state.provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };

  const signMessage = async () => {
    if (!state.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(state.provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!state.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(state.provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };

  return {
    web3auth,
    provider: state.provider,
    account: state.account,
    login,
    getUserInfo,
    logout,
    getChainId,
    getAccounts,
    getBalance,
  };
};
