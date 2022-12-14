import { Box, Container, Tabs, Tab } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Layout } from "../../layout/Layout";
import PieChartIcon from "@mui/icons-material/PieChart";
import { EvaluationReport } from "../components/EvaluationReport";
import { SendTokenList } from "../components/SendTokenList";
import { useRouter } from "next/router";
import EvalAddressContract from "../artifacts/contracts/EvalAddressContract.json";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Evaluation() {
  const [value, setValue] = useState(0);
  const [contract, setContract] = useState<any>(null);
  const [accounts, setAccounts] = useState<any>(null);
  const [evalAddresses, setEvalAddresses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const init = async () => {
      try {
        const web3 = new Web3(
          new Web3.providers.HttpProvider(`http://127.0.0.1:8545`)
        );
        const ContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
        const ABI = EvalAddressContract.abi as any as AbiItem;
        const contract = new web3.eth.Contract(ABI, ContractAddress);
        const accounts = await web3.eth.getAccounts();
        setContract(contract);
        setAccounts(accounts[0]);

        const evalAddresses = await contract.methods
          .myEvalAddresses(accounts[0])
          .call();
        console.log("myEvalAddresses");
        console.log(evalAddresses[0].name);
        setEvalAddresses(evalAddresses);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    };
    init();
  }, []);

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const onLink = (href: string) => {
    router.push(href);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout
      fab={
        <>
          <PieChartIcon
            sx={{ mr: 2 }}
            onClick={() => onLink("/createAddress")}
          />
          ????????????
        </>
      }
    >
      <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            aria-label="basic tabs example"
          >
            <Tab label="???????????????" {...a11yProps(0)} />
            <Tab label="???????????????" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <EvaluationReport evalAddresses={evalAddresses} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SendTokenList />
        </TabPanel>
      </Container>
    </Layout>
  );
}
