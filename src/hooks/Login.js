import React from "react";
import { useFireAuth } from "../FireAuthContext";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { signInWithGoogle } = useFireAuth();
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        variant="contained"
        onClick={async () => {
          await signInWithGoogle();
          navigate("/");
        }}
      >
        Sign in with Google
      </Button>
    </Box>
  );
};
