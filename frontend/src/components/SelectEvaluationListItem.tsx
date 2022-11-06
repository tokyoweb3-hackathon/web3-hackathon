import {
  ListItem,
  ListItemText,
  Button
} from "@mui/material";
import { memo } from "react";
import { orange } from '@mui/material/colors';


export const SelectEvaluationListItem: React.FC<{ text: string }> = memo(function item({ text }) {
  const color = orange[300]
  return (
    <>
      <ListItem>
        <ListItemText
          primaryTypographyProps={{
            fontSize: 12,
            fontWeight: "normal",
            color: "rgba(0, 0, 0, 0.6)",
          }}
          secondary={text}
          secondaryTypographyProps={{
            fontSize: 16,
            color: "primary.text",
          }}
        />
        <Button type="submit" sx={{ color: color }} variant="text">評価する</Button>
      </ListItem>
    </>
  );
});
