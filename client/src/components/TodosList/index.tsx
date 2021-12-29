import React, { useState } from "react";
import { Box, List, ListItem, Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Todo from "../Todo";

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

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
          {Array.from(Array(6)).map((_, index) => (
            <ListItem sx={{ width: "100%" }}>
              <Todo />
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
