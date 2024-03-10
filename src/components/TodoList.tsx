import TodoItem from "./TodoItem";
import { Todo } from "@/types";

interface TodoListProps {
    todos: Todo[];
    
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
function TodoList({todos, toggleTodo, deleteTodo}: TodoListProps) {
   
    return (<ul>

        {todos.map((todo:Todo) => (
            // console.log(todo),
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        )) }
    </ul>)
}
export default TodoList;