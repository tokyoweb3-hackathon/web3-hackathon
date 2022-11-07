import { Avatar, Box, Button, Container, Stack } from "@mui/material";
import { useWeb3Auth } from "../hooks/web3Auth/useWeb3Auth";

export default function Login() {
  const { login } = useWeb3Auth();

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
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main" }}
            src="/avater.png"
            alt="avater"
          />
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={login}
          sx={{ pt: 2, pb: 2 }}
        >
          ログイン
        </Button>
      </Stack>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
