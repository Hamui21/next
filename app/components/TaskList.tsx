import TaskCard from "./TaskCard"

type Task = {
    id: number;
    title : string;
    complected: string;
};

export default function TaskList({ tasks = []}: { tasks: Task[] }) {
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}