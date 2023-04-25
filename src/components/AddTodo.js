import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, firestore } from "../firebaseConfig";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (todo.trim() === "") {
      return;
    }

    try {
      const todosRef = collection(
        firestore,
        "users",
        auth.currentUser.uid,
        "todos"
      );
      await addDoc(todosRef, {
        text: todo,
        createdAt: serverTimestamp(),
        completed: false,
      });
      setTodo("");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <Box>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          marginTop: "1rem",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="New todo"
          variant="outlined"
          value={todo}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            width: "200px",
          }}
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddTodo;
