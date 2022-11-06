import { Box, Container, Typography, Paper } from "@mui/material";
import { memo } from "react";
import { EvalAddressListItem } from "./EvalAddressListItem";

export const EvaluationReport: React.FC<{
  evalAddresses: object;
}> = ({ evalAddresses }) => {
  console.log("EvaluationReport");
  console.log(evalAddresses);
  return (
    <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4, pt: 15 }}>
      <Paper elevation={1} sx={{ mt: 4, p: 2, mb: 4, borderRadius: "16px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
        {/*  非共通処理ここから */}

        {Object.values(evalAddresses).map((evalAddress: any, i) => {
          return (
            <EvalAddressListItem
              key={i}
              name={evalAddress.name}
              total={evalAddress.total}
            />
          );
        })}
      </Paper>
    </Container>
  );
};
