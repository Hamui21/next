import TaskList from "../components/TaskList";

export default async function TaskPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const tasks = await res.json();

    return (
        <div>
            <h1>Список задач</h1>
            <TaskList tasks={tasks} />
        </div>
    );
}