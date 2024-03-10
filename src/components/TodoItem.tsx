import { Todo } from "@/types";
interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
    const titleStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none',
    }
    return (
        <li>
            <span style={titleStyle}>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>删除</button>
            <button onClick={() => toggleTodo(todo.id)}>切换</button>
        </li>
    )

}
export default TodoItem;