import {
  Avatar,
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  styled,
  List,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Layout } from "../../layout/Layout";
import { UserHistoryListItem } from "../components/UserHistoryListItem";

const RoundOutlineButton = styled(Button)`
  border-radius: 1000px;
`;

export default function MyPage() {
  return (
    <Layout
      fab={
        <>
          <PieChartIcon sx={{ mr: 1 }} />
          評価をリクエスト
        </>
      }
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
            }}
            src="/avater.png"
          />

          <Stack spacing={2} alignItems="center" sx={{ pb: 5, pt: 10 }}>
            <Typography variant="h5" component="p">
              UoChaN
            </Typography>

            <RoundOutlineButton
              variant="outlined"
              color="primary"
              endIcon={<ContentCopyIcon />}
            >
              0xee5...e1234
            </RoundOutlineButton>

            <Typography variant="body1" component="p">
              TypeScript/Vue/Nuxt PHP/Laravel
            </Typography>
          </Stack>
        </Paper>

        <Paper elevation={1} sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6" component="p">
            history
          </Typography>

          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
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
