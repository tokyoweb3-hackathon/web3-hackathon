import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  List
} from "@mui/material";
import { Layout } from "../../layout/Layout";


export default function CreateAddress() {
  return (
    <Layout>
      <div>
      <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4, pt: 15 }}>
        <form>
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
            <TextField
              margin="normal"
              color="primary"
              fullWidth
              focused
            >
            </TextField>
            <TextField
              margin="normal"
              color="primary"
              fullWidth
              focused
            >
            </TextField>
            <TextField
              margin="normal"
              color="primary"
              fullWidth
              focused
            >
            </TextField>
            <TextField
              margin="normal"
              color="primary"
              fullWidth
              focused
            >
            </TextField>
            <TextField
              margin="normal"
              color="primary"
              fullWidth
              focused
            >
            </TextField>
            {/*  非共通処理ここまで */}
          </Paper>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ pt: 1, pb: 1 }}
            >
              作成する
            </Button>
          </Box>
        </form>
      </Container>
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  return {
    props: {},
  };
}








