import { Fragment } from "react"

interface TodoFilterProps {
    filterTodos:(text:string)=>void
}
function TodoFilter({filterTodos}:TodoFilterProps) {
    return (
        <Fragment>
            <button onClick={()=>filterTodos('all')}>全部</button>
            <button onClick={()=>filterTodos('completed')}>已完成</button>
            <button onClick={()=>filterTodos('active')}>未完成</button>
        </Fragment>

    )
}

export default TodoFilter