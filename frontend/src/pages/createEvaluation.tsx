import {
    Container,
    Paper,
    Typography,
    TextField,
  } from "@mui/material";
  import { Layout } from "../../layout/Layout";
  import { grey } from '@mui/material/colors';
  
  export default function createEvaluation() {
    return (
       <Layout>
        <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4, pt: 15 }}>
          <Paper elevation={1} sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6" component="p" sx={{
              }}>
              マネージメント
            </Typography>
  
          <TextField
              sx={{
                bgcolor: grey[100],
              }}
              fullWidth
              defaultValue="Default Value"
            />
          </Paper>
        </Container>
      </Layout>
    );
  }
  