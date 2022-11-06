import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../../layout/Layout";
import Downshift from "downshift";
import EvalAddressContract  from '../../../artifacts/contracts/EvalAddressContract.sol/EvalAddressContract.json' assert { type: "json" };
import Web3 from "web3";

export default function createAddress({ ...props }) {
  const { placeholder, tags, ...other } = props;
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [ contract, setContract] = useState(null);
  const [ accounts, setAccounts ] = useState(null);
  const router = useRouter();
  const path = '/evaluation';
  useEffect(() => {
    setSelectedItem(tags);
  }, [tags]);
  useEffect(() => {
    const init = async() => {
      try {
        const web3 = new Web3(new Web3.providers.HttpProvider(`http://127.0.0.1:8545`));
        const ContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
        const ABI = EvalAddressContract.abi;
        const contract = new web3.eth.Contract(ABI, ContractAddress);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        setContract(contract);
        setAccounts(accounts[0]);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    }
    init();
  }, []);

  const handleSubmit = async () => {
    console.log(selectedItem);
    try {
      await contract.methods.createEvalAddress(
        accounts,
        selectedItem
      ).send({ from: accounts });
      router.push(path);
    } catch(error) {
      console.log(error);
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const newSelectedItem = [...selectedItem];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );

      if (duplicatedValues !== -1) {
        setInputValue("");
        return;
      }
  if (!event.target.value.replace(/\s/g, "").length) return;
      newSelectedItem.push(event.target.value.trim());
      setSelectedItem(newSelectedItem);
      setInputValue("");
    }
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === "Backspace"
    ) {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  }
  function handleChange(item) {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue("");
    setSelectedItem(newSelectedItem);
  }

  const handleDelete = item => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <React.Fragment>
      <Layout>
      <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4, pt: 15 }}>
          <Paper elevation={1} sx={{ mt: 4, p: 2, mb:4, borderRadius: '16px'}}>
            <Box
              sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="h5" component="p">
                評価設定
              </Typography>
              <Typography variant="body1" component="p" color="text.secondary">
                2022
              </Typography>
            </Box>
            <Typography variant="body2" component="p" color="text.secondary">
                Last Updated: 2022/11/06
            </Typography>
            <Downshift
              id="downshift-multiple"
              inputValue={inputValue}
              onChange={handleChange}
              selectedItem={selectedItem}
            >
              {({ getInputProps }) => {
                const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
                  onKeyDown: handleKeyDown,
                  placeholder
                });
                return (
                  <div>
                    <TextField
                      fullWidth
                      multiline
                      minRows="10"
                      sx={({ mt:3 })}
                      InputProps={{
                        startAdornment: selectedItem.map(item => (
                          <Chip
                            key={item}
                            tabIndex={-1}
                            label={item}
                            onDelete={handleDelete(item)}
                          />
                        )),
                        onBlur,
                        onChange: event => {
                          handleInputChange(event);
                          onChange(event);
                        },
                        onFocus
                      }}
                      {...other}
                      {...inputProps}
                    />
                  </div>
                );
              }}
            </Downshift>
            <Box sx={{ pt:2, display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant="body2" component="p" color="text.secondary">
                  最大10項目まで
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={ handleSubmit }
              type="button"
              variant="contained"
              color="primary"
              sx={{ pt: 1, pb: 1 }}
            >
              作成する
            </Button>
          </Box>
          </Paper>
      </Container>
    </Layout>
    </React.Fragment>
  );
}
createAddress.defaultProps = {
  tags: []
};

