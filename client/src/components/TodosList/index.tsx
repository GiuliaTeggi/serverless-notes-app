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
        margin: "20px",
      }}
    >
      <Button color="primary" variant="contained" sx={{minWidth: "200px", margin: "20px 0"}} >
        Add Todo<AddIcon />
      </Button>
      <List sx={{ width: '100%', maxWidth: "400px" }}>
        {Array.from(Array(6)).map((_, index) => (
          <ListItem sx={{ width: '100%'}}>
            <Todo />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
