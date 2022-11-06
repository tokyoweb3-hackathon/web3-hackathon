import {
  Container,
  Paper,
  Typography,
  List
} from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Layout } from "../../../layout/Layout";
import { UserHistoryListItem } from "../../components/UserHistoryListItem";
import { useRouter } from "next/router";

export default function Evaluation() {
  const router = useRouter();
  const onLink = () => router.push('/selectevaluation');
  return (
    <Layout fab={
        <>
        <PieChartIcon sx={{ mr: 1 }} onClick={() => onLink()} />
          評価をリクエスト
        </>
      }
    >
      <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4, pt: 15 }}>
        <Paper elevation={1} sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6" component="p">
            評価レポート
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
