export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: ITodo[];
  isLoading: boolean;
  error: string | null;
}