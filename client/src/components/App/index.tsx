import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Header";
import TodosList from "../TodosList";
import { Button, Box, Card, CardContent, Typography, CircularProgress } from "@mui/material";

export default function App() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  const Login: React.FC = () => {
    return isLoading ? (
         <CircularProgress sx={{ marginTop: "20px" }} />
        ) : (
        <Box sx={{minHeight: "50vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card sx={{width: "100%", maxWidth: "300px", textAlign: "center"}}>
        <CardContent>
        <Typography>Please sign in to manage your Todos</Typography>
        <Button sx={{ mt: "20px"}} variant="contained" onClick={() => loginWithRedirect()}>LOGIN</Button>
        </CardContent>
      </Card>
      </Box>
    );
  };

  const showLogin = isLoading || !isAuthenticated; 
  return (
    <div className="App">
      <Header />
      {showLogin ?  <Login /> : <TodosList />}
    </div>
  );
}
