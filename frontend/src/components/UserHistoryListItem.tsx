import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { memo } from "react";

export const UserHistoryListItem: React.FC<{
  avatarUrl: string;
  date: string;
  text: string;
}> = ({ avatarUrl, date, text }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={avatarUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={date}
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
          sx={{ mb: 0 }}
        />
      </ListItem>
      <Divider variant="inset" component="li" sx={{ borderColor: "#E0E0E0" }} />
    </>
  );
};
