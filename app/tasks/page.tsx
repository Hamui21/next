import TaskList from "../components/TaskList";
import { cacheLife } from "next/cache";

async function getTasks() {
    'use cache';
    cacheLife('minutes');

    console.log("запрос выполнился");

    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10",);

    return res.json();
}

export default async function TaskPage() {
    const tasks = await getTasks();

    return (
        <div>
            <h1>Список задач</h1>
            <TaskList tasks={tasks} />
        </div>
    );
}