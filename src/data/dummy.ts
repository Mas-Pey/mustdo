import type { MustDo } from "../types/mustdo";

export const dummyData: MustDo[] = [
    {
        id: 1,
        title: "Already done",
        description: "This task is already completed",
        completed: true
    },
    {
        id: 2,
        title: "This is a must-do",
        description: "Don't forget to do this task",
        completed: false
    },
]