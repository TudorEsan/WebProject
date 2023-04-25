import React from "react";
import { useFireAuth } from "../FireAuthContext";
import { Box, Button } from "@mui/material";

export const Login = () => {
  const { signInWithGoogle } = useFireAuth();
  return (
    <Box>
      <Button variant="contained" onClick={() => signInWithGoogle()}>
        Sign in with Google
      </Button>
    </Box>
  );
};
