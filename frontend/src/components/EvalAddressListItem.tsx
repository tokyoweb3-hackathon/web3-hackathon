import {
  Box,
  Typography
} from "@mui/material";
import { memo } from "react";

export const EvalAddressListItem: React.FC<{
  name: string;
  total: string;
}> = memo(({ name, total }) => {
  return (
    <>
      <Box
        sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 4
        }}
      >
        <Typography variant="body1" component="p">
          { name }
        </Typography>
        <Typography variant="body1" component="p" color="text.secondary">
          { total } eval
        </Typography>
      </Box>
    </>
  );
});
