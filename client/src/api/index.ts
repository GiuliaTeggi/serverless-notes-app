import Axios from "axios";
import Todo from "../models/Todo";
import { apiEndpoint } from "../config";

export async function getTodos(idToken: string): Promise<Todo[]> {
  console.log("Fetching todos");

  const response = await Axios.get(`${apiEndpoint}/todos`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("Todos:", response.data);
  return response.data.items;
}
