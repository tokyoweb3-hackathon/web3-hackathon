import faucetAbi from '../../../artifacts/contracts/Faucet.sol/Faucet.json' assert { type: "json" };
import Button from '@mui/material/Button';
import { ethers, providers } from "ethers"
import { BaseProvider } from '@metamask/providers';
import { ContactSupportOutlined } from '@mui/icons-material';
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
    if (typeof web3 == 'undefined' && typeof window.ethereum == 'undefined') {
    console.log('Wallet is not installed!');
    return
  }

  const provider =  new ethers.providers.Web3Provider(ethereum);
  await provider.send('eth_requestAccounts', [])

  const signer =  provider.getSigner()
  console.log(signer, 'sign in user')
  const signerAddress = await signer.getAddress();
  console.log(signerAddress, 'signer address')
  const faucetContractAdress = "0x78488d6B257b1f4cd736CF38bd543a303Ed67d31";
  const faucetContract = new ethers.Contract(faucetContractAdress, faucetAbi.abi, provider);
  console.log(faucetContract, 'faucetのコントラクト')

  //署名
  const fc = faucetContract.connect(signerAddress);

  console.log(fc, '署名完了')

  //native token発行
  const res = await fc.send();

  console.log(res, '総数')
}

export default function Evaluation() {
  return <Button variant="outlined" onClick={handleClick}>faucet</Button>;
}
