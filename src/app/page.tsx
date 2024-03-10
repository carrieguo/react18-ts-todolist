"use client"
import { Fragment,useState } from "react";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import TodoFilter from "@/components/TodoFilter";
import { Todo } from "@/types/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all');
  const addTodo = (text:string) => {
    const todo: Todo = { id: Date.now(), title: text, completed: false };
    setTodos([...todos, todo]);
  }
  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const filterTodos = () => {
    
    switch(filter){
      case "all":
        return todos;
      case "active":
        console.log('active');
        return todos.filter((todo) => !todo.completed);
      case "completed":
        console.log('completed');
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
  
  return (
    <Fragment>
    <h1>Todo List</h1>
    <AddTodo addTodo={addTodo} />
    <TodoList todos={filterTodos()} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

    <TodoFilter filterTodos={setFilter}></TodoFilter>
    </Fragment>
  );
}
