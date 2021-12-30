import React, { useState, useEffect } from "react";
import { Box, List, ListItem, Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TodoItem from "../TodoItem";
import Todo from "../../models/Todo";
import { useAuth0 } from "@auth0/auth0-react";
import { getTodos } from '../../api'

export default function TodosList() {
  const { getAccessTokenSilently } = useAuth0();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    try {
  const fetchTodos = async () => {
    const token = await getAccessTokenSilently();
    const todos = await getTodos(token)
    setTodos(todos)
    setLoading(false)
  }
      fetchTodos()
    } catch (e: unknown) {
      console.log(`Failed to fetch todos: ${e instanceof Error ? e.message : e}`)
    }
  }, [getAccessTokenSilently])

  const renderLoading = () => {
    return <CircularProgress sx={{ marginTop: "20px" }} />;
  };

  const renderTodos = () => {
    return (
      <>
        <Button
          color="primary"
          variant="contained"
          sx={{ minWidth: "200px", margin: "20px 0" }}
        >
          Add Todo
          <AddIcon />
        </Button>
        <List sx={{ width: "100%", maxWidth: "400px" }}>
          {todos.map((_, index) => (
            <ListItem sx={{ width: "100%" }}>
              <TodoItem />
            </ListItem>
          ))}
        </List>
      </>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      {loading ? renderLoading() : renderTodos()}
    </Box>
  );
}
