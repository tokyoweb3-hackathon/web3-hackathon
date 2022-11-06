import faucetAbi from '../../../artifacts/contracts/Faucet.sol/Faucet.json' assert { type: "json" };
import Button from '@mui/material/Button';
import { ethers, providers } from "ethers"
import { BaseProvider } from '@metamask/providers';
const Web3 = require('web3')
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "http://127.0.0.1:8545/"
  )
);

declare global {
  interface Window {
    ethereum: BaseProvider;
  }
}


const handleClick = async () => {
const { ethereum } = window as unknown as { ethereum: BaseProvider }
const provider = new ethers.providers.Web3Provider(ethereum);
  await provider.send('eth_requestAccounts', [])

  const signer = await provider.getSigner()
  const signerAddress = await signer.getAddress();
  const rspAddress = "0x78488d6B257b1f4cd736CF38bd543a303Ed67d31";
  const rspContract = new ethers.Contract(rspAddress, faucetAbi.abi, provider);
const fc = rspContract.connect(signer);

  await fc.balanceOf(signerAddress);

}

export default function Evaluation() {
  return <Button variant="outlined" onClick={handleClick}>faucet</Button>;
}
