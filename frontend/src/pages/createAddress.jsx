import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography,
  Paper,
  List
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Layout } from "../../layout/Layout";
import PropTypes from "prop-types";
import Downshift from "downshift";


export default function TagsInput({ ...props }) {
  const { placeholder, tags, ...other } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState([]);
  useEffect(() => {
    setSelectedItem(tags);
  }, [tags]);

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
TagsInput.defaultProps = {
  tags: []
};

