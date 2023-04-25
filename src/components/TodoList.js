import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { auth, firestore } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { DeleteOutline } from "@mui/icons-material";

const TodoList = () => {
  const todosRef = collection(
    firestore,
    "users",
    auth.currentUser.uid,
    "todos"
  );

  const q = query(todosRef, orderBy("createdAt", "desc"));
  const [todosSnapshot, loading, error] = useCollection(q);
  const todos = todosSnapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const toggleTodo = async (todo) => {
    try {
      console.log(todo);
      const todoRef = doc(
        firestore,
        "users",
        auth.currentUser.uid,
        "todos",
        todo.id
      );
      await updateDoc(todoRef, { ...todo, completed: !todo.completed });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async (todo) => {
    try {
      const todoRef = doc(
        firestore,
        "users",
        auth.currentUser.uid,
        "todos",
        todo.id
      );
      await deleteDoc(todoRef);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} dense>
          <Checkbox checked={todo.completed} onClick={() => toggleTodo(todo)} />
          <ListItemText primary={todo.text} />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(todo)}
          >
            <DeleteOutline />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
