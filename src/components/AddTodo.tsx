import { useState } from "react";

interface addTodoProps {
    addTodo: (text: string) => void; // 函数类型
}
function AddTodo({ addTodo }: addTodoProps) {
    const [texts, setTexts] = useState('');
    const addSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addTodo(texts);
        setTexts('');
    }


    return (
        <form onSubmit={addSubmit}>
            <input type="text" value={texts} placeholder="Add Todo..." onChange={(e)=>setTexts(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default AddTodo;