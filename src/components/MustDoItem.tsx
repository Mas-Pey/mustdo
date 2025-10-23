import type { MustDo } from "../types/mustdo"

interface MustDoItemProps {
    mustdo: MustDo
    onCompletedChange: (id: number, completed: boolean) => void
}

export default function MustDoItem({ mustdo, onCompletedChange }: MustDoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-5 border rounded-2xl p-4 text-amber-200 hover:bg-green-950 not-dark:hover:bg-green-300">
                <input type="checkbox"
                    checked={mustdo.completed}
                    onChange={(e) => onCompletedChange(mustdo.id, e.target.checked)}
                    className="scale-150"></input>
                <span className={mustdo.completed ? "line-through opacity-50" : ""}>
                    {mustdo.title}
                </span>
            </label>
        </div>
    )
}