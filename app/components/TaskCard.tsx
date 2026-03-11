"use client";

import { useState } from "react";

export default function TaskCard({ task }: {task : any}) {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    return (
        <div onClick={() => setIsCompleted(!isCompleted)}>
            <p>{task.title}</p>
                {isCompleted ? " Готово" : " В работе..."}
        </div>
    );
}