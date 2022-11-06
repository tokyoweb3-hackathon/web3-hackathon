import {
  Container,
  Paper,
  Typography,
  List,
  Divider
} from "@mui/material";
import faucetAbi from '../../../../artifacts/contracts/Faucet.sol/Faucet.json' assert { type: "json" };
import { Layout } from "../../../layout/Layout";
import { ethers, providers } from "ethers"
import { BaseProvider } from '@metamask/providers';
import { SelectEvaluationListItem } from "../../components/SelectEvaluationListItem";
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

export default function selectEvaluation() {
  return (
    <Layout>
      <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4, pt: 15 }}>
        <Paper elevation={1} sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6" component="p">
            評価レポート
          </Typography>

          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            <SelectEvaluationListItem
              text={"コミュニケーション"}
            />
            <Divider variant="fullWidth" component="li" sx={{ borderColor: "#E0E0E0" }} />
            <SelectEvaluationListItem
              text={"マネージメント"}
            />
            <Divider variant="fullWidth" component="li" sx={{ borderColor: "#E0E0E0" }} />
            <SelectEvaluationListItem
              text={"ディレクション"}
            />
            <Divider variant="fullWidth" component="li" sx={{ borderColor: "#E0E0E0" }} />
          </List>
        </Paper>
      </Container>
    </Layout>
  );
}
