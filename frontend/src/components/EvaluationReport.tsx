import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { memo} from "react";

export const EvaluationReport: React.FC<{
  // evalAddresses: object;
}> = memo(({  }) => {
  return (
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
            {/*  非共通処理ここから */}
            <ListItem alignItems="flex-start">
              <ListItemText
                secondary="コミュニケーション"
                secondaryTypographyProps={{
                  fontSize: 16,
                  color: "primary.text",
                }}
                sx={{ mb: 0 }}
              />
              <ListItemText
                secondary="5eval"
                secondaryTypographyProps={{
                  fontSize: 16,
                  color: "primary.text",
                }}
                sx={{ mb: 0 }}
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                secondary="コミュニケーション"
                secondaryTypographyProps={{
                  fontSize: 16,
                  color: "primary.text",
                }}
                sx={{ mb: 0 }}
              />
              <ListItemText
                secondary="10eval"
                secondaryTypographyProps={{
                  fontSize: 16,
                  color: "primary.text",
                }}
                sx={{ mb: 0 }}
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                secondary="コミュニケーション"
                secondaryTypographyProps={{
                  fontSize: 16,
                  color: "primary.text",
                }}
                sx={{ mb: 0 }}
              />
              <ListItemText
                secondary="10eval"
                secondaryTypographyProps={{
                  fontSize: 16,
                  color: "primary.text",
                }}
                sx={{ mb: 0 }}
              />
            </ListItem>
          </Paper>
      </Container>
  );
});
export async function getServerSideProps() {
  return {
    props: {},
  };
}