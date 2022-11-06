import {
  Avatar,
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  styled,
  List,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Layout } from "../../layout/Layout";
import { UserHistoryListItem } from "../components/UserHistoryListItem";
import { useWeb3Auth } from "../hooks/web3Auth/useWeb3Auth";
import { useState } from "react";
import { useUser } from "../hooks/user/useUser";

const RoundOutlineButton = styled(Button)`
  border-radius: 1000px;
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: calc(100% - 32px);
  box-sizing: border-box;
  padding: 16px 14px;
`;

export default function MyPage() {
  const { logout, account } = useWeb3Auth();
  const [editing, setEditing] = useState(false);
  const { createUser, user, setUser } = useUser({ initAccount: account });

  const omitAddress = (accountAddress: string) =>
    accountAddress?.length > 0
      ? `${accountAddress.slice(0, 5)}...${accountAddress.slice(-6, -1)}`
      : "";

  const editProfile = () => {
    setEditing(true);
  };

  const saveProfile = () => {
    setEditing(false);

    createUser({
      ...user,
      accountAddress: account,
    });
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUser((prev) => ({
      ...prev,
      discription: event.target.value,
    }));
  };

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      userName: event.target.value,
    }));
  };

  return (
    <Layout
      fab={
        <>
          <PieChartIcon sx={{ mr: 1 }} />
          評価をリクエスト
        </>
      }
      onFabClick={logout}
    >
      <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4, pt: 15 }}>
        <Paper elevation={1} sx={{ position: "relative" }}>
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
              width: 150,
              height: 150,
              position: "absolute",
              top: -75,
              left: 0,
              right: 0,
              margin: "0 auto",
              backgroundColor: "transparent",
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: user.imageUrl }}></span>
          </Avatar>

          <Stack spacing={2} alignItems="center" sx={{ pb: 5, pt: 10 }}>
            {editing ? (
              <TextField
                id="username"
                defaultValue={user.userName}
                name="username"
                margin="normal"
                color="primary"
                fullWidth
                sx={{ pl: 2, pr: 2 }}
                onChange={handleChangeUserName}
                value={user.userName}
              />
            ) : (
              <Typography variant="h5" component="p">
                {user.userName}
              </Typography>
            )}

            <RoundOutlineButton
              variant="outlined"
              color="primary"
              endIcon={<ContentCopyIcon />}
            >
              {omitAddress(account)}
            </RoundOutlineButton>

            {editing ? (
              <TextField
                id="discription"
                defaultValue={user.discription}
                name="discription"
                multiline
                maxRows={4}
                value={user.discription}
                onChange={handleChangeDescription}
              />
            ) : (
              <Typography variant="body1" component="p">
                {user.discription}
              </Typography>
            )}

            {editing ? (
              <RoundOutlineButton
                variant="contained"
                color="primary"
                onClick={saveProfile}
              >
                プロフィールを保存
              </RoundOutlineButton>
            ) : (
              <RoundOutlineButton
                variant="outlined"
                color="inherit"
                onClick={editProfile}
              >
                プロフィールを編集
              </RoundOutlineButton>
            )}
          </Stack>
        </Paper>

        <Paper elevation={1} sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6" component="p">
            history
          </Typography>

          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <UserHistoryListItem
              avatarUrl={"avater.png"}
              date={"2022/10/23"}
              text={"星野智洋さんを評価しました"}
            />
            <UserHistoryListItem
              avatarUrl={"avater.png"}
              date={"2022/10/23"}
              text={"星野智洋さんを評価しました"}
            />
            <UserHistoryListItem
              avatarUrl={"avater.png"}
              date={"2022/10/23"}
              text={"星野智洋さんを評価しました"}
            />
          </List>
        </Paper>
      </Container>
    </Layout>
  );
}
