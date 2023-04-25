import { Box, Typography } from "@mui/material";
import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">My Todos</Typography>
      <AddTodo />
      <TodoList />
    </Box>
  );
};
