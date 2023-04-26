import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { useFireAuth } from "../FireAuthContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { handleSignOut } = useFireAuth();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Button
        variant="outlined"
        color="primary"
        onClick={async () => {
          await handleSignOut();
          navigate("/login");
        }}
      >
        Logout
      </Button>
      <Typography variant="h2">My Todos</Typography>
      <AddTodo />
      <TodoList />
    </Box>
  );
};
