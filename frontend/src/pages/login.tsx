import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "next/image";

export default function Login() {
  const theme = useTheme();
  const handleSubmit = () => {};
  return (
    <Container component="main" maxWidth="xs" sx={{ p: 4 }}>
      <Stack spacing={2} justifyContent="center" height="100vh">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Image src="/avater.png"  layout="fill" sizes=""/>
          </Avatar>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          display="block"
          sx={{ mt: 2 }}
        >
          <TextField
            id="email"
            defaultValue="Default Value"
            helperText="メールアドレス"
            name="email"
            autoComplete="email"
            margin="normal"
            color="primary"
            fullWidth
            focused
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ pt: 2, pb: 2 }}
          >
            アカウント作成
          </Button>
        </Box>

        <Box display="block">
          <Grid container justifyItems="center" alignItems="center">
            <Grid item xs={5} p={0}>
              <Divider variant="fullWidth" />
            </Grid>
            <Grid item xs={2} p={0}>
              <Typography textAlign="center" color="primary">
                OR
              </Typography>
            </Grid>
            <Grid item xs={5} p={0}>
              <Divider variant="fullWidth" />
            </Grid>
          </Grid>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ pt: 2, pb: 2 }}
        >
          Metamaskに接続
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ pt: 2, pb: 2 }}
        >
          Googleアカウントで作成
        </Button>
      </Stack>
    </Container>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
