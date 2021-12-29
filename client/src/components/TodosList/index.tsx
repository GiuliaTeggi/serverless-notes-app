import React from "react";
import { Box, List, ListItem, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Todo from "../Todo";

export default function TodosList() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Button color="primary">
        Add <AddIcon />
      </Button>
      <List>
        {Array.from(Array(6)).map((_, index) => (
          <ListItem>
            <Todo />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
