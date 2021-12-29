export interface Todo {
  todoId: string;
  createdAt: string;
  name: string;
  dueDate: Date;
  done: boolean;
  attachmentUrl?: string;
  notification?: string;
  email?: string;
}
