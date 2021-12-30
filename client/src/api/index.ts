import Axios from "axios";
import Todo from "../models/Todo";

export async function getTodos(idToken: string): Promise<Todo[]> {
  const apiEndpoint = `https://${process.env.REACT_APP_API_ENDPOINT}.execute-api.us-east-1.amazonaws.com/dev`;
  const response = await Axios.get(`${apiEndpoint}/todos`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("Todos:", response.data);
  return response.data.items;
}
