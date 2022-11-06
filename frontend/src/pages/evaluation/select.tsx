import {
  Container,
  Paper,
  Typography,
  List,
  Divider
} from "@mui/material";
import { Layout } from "../../../layout/Layout";
import { SelectEvaluationListItem } from "../../components/SelectEvaluationListItem";
export default function selectEvaluation() {
  return (
    <Layout>
      <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4, pt: 15 }}>
        <Paper elevation={1} sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6" component="p">
            評価レポート
          </Typography>

          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            <SelectEvaluationListItem
              text={"コミュニケーション"}
            />
            <Divider variant="fullWidth" component="li" sx={{ borderColor: "#E0E0E0" }} />
            <SelectEvaluationListItem
              text={"マネージメント"}
            />
            <Divider variant="fullWidth" component="li" sx={{ borderColor: "#E0E0E0" }} />
            <SelectEvaluationListItem
              text={"ディレクション"}
            />
            <Divider variant="fullWidth" component="li" sx={{ borderColor: "#E0E0E0" }} />
          </List>
        </Paper>
      </Container>
    </Layout>
  );
}
